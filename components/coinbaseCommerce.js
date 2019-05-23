/* this ES5 script should be included directly from merchant HTML */
"use strict";
// Mashed up to pass in element and button type
export default (window, document, el, buttonType) => {
  var doc = document;
  var VERSION = 1;

  var PRODUCT_CHECKOUT_PATH = "/embed/checkout/";

  var RESET_STYLE =
    "background: none; " +
    "box-sizing: border-box; " +
    "clear: none; " +
    "clip: auto; " +
    "float: none; " +
    "margin: 0; padding: 0; border: 0; " +
    "opacity: 1; " +
    "vertical-align: baseline;" +
    "visibility: visible; " +
    "min-width: 0; max-width: none; " +
    "min-height: 0; max-height: none; " +
    /* everything is fullscreen */
    "left: 0; top: 0; right: 0; bottom: 0; " +
    "width: 100%; height: 100%; ";

  var MODAL_IFRAME_STYLE =
    RESET_STYLE +
    "display: block; " +
    "position: fixed; " +
    "transition: all 0.3s ease-out; " +
    "z-index: 9999;";

  var MODAL_CONTAINER_STYLE =
    RESET_STYLE + "display: none; " + "position: fixed; " + "z-index: 9000;";

  var DIMMER_STYLE =
    RESET_STYLE +
    "display: block; " +
    "background-color: rgba(0, 0, 0, 0.5); " +
    "position: static; " +
    "z-index: -99;";

  if (window.BuyWithCrypto && window.BuyWithCrypto.version >= VERSION) {
    window.BuyWithCrypto.findButtonAndInstall(buttonType);
    return;
  }

  (function() {
    function BuyWithCrypto() {
      this.root = "https://commerce.coinbase.com";
      this.messageOrigin = "https://commerce.coinbase.com:443";

      this.showModal = this.showModal.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
    }
    BuyWithCrypto.version = VERSION;

    /// if <a class="buy-with-crypto"> appears *before* `node`, installs BuyWithCrypto into the <a>.
    BuyWithCrypto.findButtonAndInstall = function(type) {
      var element = doc.getElementById("button-" + (type || "default"));
      var widget = new window.BuyWithCrypto();
      widget.install(element);
    };

    // we'll generate our class the old-fashioned way
    var BWC = BuyWithCrypto.prototype;

    /// style the link, set up the iframe and handlers
    /// pass a second argument {omitStyles: true} to skip the styles
    BWC.install = function(link, options) {
      var product = this.extractProductId(link);
      if (!product) {
        return false;
      }
      this.product = product;
      this.link = link;
      this.params = link.dataset || {};
      if (typeof options !== "object" || !options.omitStyles) {
        this.turnIntoButton(link);
      }
      if (!link.classList.contains("disabled")) {
        link.addEventListener("click", this.showModal, false);
      } else {
        link.addEventListener(
          "click",
          function(e) {
            e.preventDefault();
          },
          false,
        );
      }
      // listen for events from inside the iframe
      window.addEventListener("message", this.handleMessage, false);
      return true;
    };

    BWC.uninstall = function() {
      if (this.link) {
        this.link.removeEventListener("click", this.showModal, false);
        this.link = null;
      }
      if (this.modal.parentNode === document.body) {
        document.body.removeChild(this.modal);
      }
      window.removeEventListener("message", this.handleMessage, false);
    };

    BWC.loadModal = function() {
      // insert the overall container which contains the iframe and dimmer
      if (!this.modalContainer) {
        this.modalContainer = document.createElement("div");
        this.modalContainer.style = MODAL_CONTAINER_STYLE;
        document.body.appendChild(this.modalContainer);

        // dim the whole page 50%
        var dimmer = document.createElement("div");
        dimmer.style = DIMMER_STYLE;
        this.modalContainer.appendChild(dimmer);
      }

      // insert the modal iframe
      // XXX: we could preload the iframe. it just needs a 'preloaded' state
      //      where it doesn't start any timers/polling/etc when it's in the BG.
      if (!this.iframe) {
        this.iframe = modalIframe(this.root, this.product, this.params);
        this.modalContainer.appendChild(this.iframe);
      }
    };

    BWC.showModal = function(e) {
      if (e) {
        // we want normal left clicks
        if (e.button > 0 || e.ctrlKey || e.shiftKey || e.metaKey) {
          return;
        }
        if (e.preventDefault) {
          e.preventDefault();
        }
      }

      // are we already visible?
      if (
        !this.modalContainer ||
        this.modalContainer.style.display !== "block"
      ) {
        this.loadModal();
        this.modalContainer.style.display = "block";
      }
    };

    BWC.hideModal = function() {
      if (this.modalContainer) {
        document.body.removeChild(this.modalContainer);
        this.modalContainer = null;
      }
      this.iframe = null;
    };

    BWC.handleMessage = function(e) {
      if (canonicalOrigin(e.origin) !== this.messageOrigin) {
        return;
      }
      if (e.data.event === "checkout_modal_closed") {
        if (this.iframe && this.iframe.contentWindow === e.source) {
          this.hideModal();
        }
      }
    };

    BWC.extractProductId = function(a) {
      if (a) {
        var m = /\/(?:products|checkout)\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i.exec(
          a.href,
        );
        if (m) {
          return m[1];
        }
        if (a.dataset) {
          var product = a.dataset.checkout || a.dataset.product;
          if (product) {
            a.href = this.root + PRODUCT_CHECKOUT_PATH + product;
            return product;
          }
        }
      }
    };

    BWC.turnIntoButton = function(a) {
      var donate = a.classList.contains("donate-with-crypto");
      // there should be a <span> inside
      var span;
      var onlyTextInside = true;
      for (var child = a.firstChild; child; child = child.nextSibling) {
        if (child.nodeType !== 3 && child.nodeType !== 8) {
          onlyTextInside = false;
        }
        if (child.nodeType === 1 && child.tagName === "SPAN") {
          span = child;
          break;
        }
      }
      // if not, make one
      if (!span) {
        span = document.createElement("span");
        var caption = onlyTextInside && a.textContent.trim();
        if (!caption) {
          caption = (donate ? "Donate" : "Buy") + " with Crypto";
        }
        span.textContent = caption;
        while (a.lastChild) {
          a.removeChild(a.lastChild);
        }
        a.appendChild(span);
      }

      if (a.rel === "" && a.target === "") {
        a.rel = "noopener noreferrer";
        a.target = "_blank";
      }

      loadCss(this.root + "/v1/button.css");
    };

    // end of BuyWithCrypto definition

    function modalIframe(root, product, params) {
      // just pass all the params through for forwards compat
      var filteredParams = {};
      for (var key in params) {
        if (
          key !== "product" &&
          key !== "checkout" &&
          params.hasOwnProperty(key)
        ) {
          filteredParams[key] = params[key];
        }
      }
      filteredParams.origin = document.location.origin;
      var iframe = document.createElement("iframe");
      iframe.allowTransparency = true;
      iframe.frameBorder = "no"; // obsolete API
      iframe.scrolling = "no"; // obsolete API
      iframe.src =
        root +
        PRODUCT_CHECKOUT_PATH +
        encodeURI(product) +
        "?" +
        encodeURIParams(filteredParams);
      iframe.style = MODAL_IFRAME_STYLE;
      return iframe;
    }

    function loadCss(url) {
      if (!document.head.querySelector('link[href="' + url + '"]')) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
      }
    }

    function encodeURIParams(params) {
      var encoded = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          encoded.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(params[key]),
          );
        }
      }
      return encoded.join("&");
    }

    function canonicalOrigin(origin) {
      if (!/^[a-zA-Z0-9:\/.-]+$/.test(origin)) {
        return;
      }
      if (!/^https?:\/\//i.test(origin)) {
        origin = "https://" + origin;
      }
      if (!/:\d+$/.test(origin)) {
        origin += /^https:/i.test(origin) ? ":443" : ":80";
      }
      return origin.toLowerCase();
    }

    // export for repeated or programmatic use
    window.BuyWithCrypto = BuyWithCrypto;

    BuyWithCrypto.findButtonAndInstall(document.currentScript);
  })(); // BuyWithCrypto setup
}; /* overall closure */
