/* tslint:disable */

export default () => (t, i) => {
  console.log('test', t, i);
  var e = '/embed/checkout/',
    n =
      'background: none; box-sizing: border-box; clear: none; clip: auto; float: none; margin: 0; padding: 0; border: 0; opacity: 1; vertical-align: baseline;visibility: visible; min-width: 0; max-width: none; min-height: 0; max-height: none; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; ',
    o =
      n +
      'display: block; position: fixed; transition: all 0.3s ease-out; z-index: 9999;';
  t.BuyWithCrypto && t.BuyWithCrypto.version >= 1
    ? t.BuyWithCrypto.findButtonAndInstall(i.currentScript)
    : (function() {
        function n() {
          (this.root = 'https://commerce.coinbase.com'),
            (this.messageOrigin = 'https://commerce.coinbase.com:443'),
            (this.showModal = this.showModal.bind(this)),
            (this.handleMessage = this.handleMessage.bind(this));
        }
        (n.version = 1),
          (n.findButtonAndInstall = function(i) {
            for (var e = 0; i && e < 3; e++)
              if ((i = i.previousSibling) && 1 === i.nodeType) {
                if (
                  'A' === i.tagName &&
                  (i.classList.contains('buy-with-crypto') ||
                    i.classList.contains('donate-with-crypto'))
                ) {
                  new t.BuyWithCrypto().install(i);
                  break;
                }
                if ('SCRIPT' === i.tagName) break;
              }
          });
        var a = n.prototype;
        (a.install = function(i, e) {
          var n = this.extractProductId(i);
          return (
            !!n &&
            ((this.product = n),
            (this.link = i),
            (this.params = i.dataset || {}),
            ('object' == typeof e && e.omitStyles) || this.turnIntoButton(i),
            i.classList.contains('disabled')
              ? i.addEventListener(
                  'click',
                  function(t) {
                    t.preventDefault();
                  },
                  !1
                )
              : i.addEventListener('click', this.showModal, !1),
            t.addEventListener('message', this.handleMessage, !1),
            !0)
          );
        }),
          (a.uninstall = function() {
            this.link &&
              (this.link.removeEventListener('click', this.showModal, !1),
              (this.link = null)),
              this.modal.parentNode === i.body &&
                i.body.removeChild(this.modal),
              t.removeEventListener('message', this.handleMessage, !1);
          }),
          (a.loadModal = function() {
            if (!this.modalContainer) {
              (this.modalContainer = i.createElement('div')),
                (this.modalContainer.style =
                  'background: none; box-sizing: border-box; clear: none; clip: auto; float: none; margin: 0; padding: 0; border: 0; opacity: 1; vertical-align: baseline;visibility: visible; min-width: 0; max-width: none; min-height: 0; max-height: none; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: none; position: fixed; z-index: 9000;'),
                i.body.appendChild(this.modalContainer);
              var t = i.createElement('div');
              (t.style =
                'background: none; box-sizing: border-box; clear: none; clip: auto; float: none; margin: 0; padding: 0; border: 0; opacity: 1; vertical-align: baseline;visibility: visible; min-width: 0; max-width: none; min-height: 0; max-height: none; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; background-color: rgba(0, 0, 0, 0.5); position: static; z-index: -99;'),
                this.modalContainer.appendChild(t);
            }
            this.iframe ||
              ((this.iframe = (function(t, n, a) {
                var r = {};
                for (var s in a)
                  'product' !== s &&
                    'checkout' !== s &&
                    a.hasOwnProperty(s) &&
                    (r[s] = a[s]);
                r.origin = i.location.origin;
                var l = i.createElement('iframe');
                return (
                  (l.allowTransparency = !0),
                  (l.frameBorder = 'no'),
                  (l.scrolling = 'no'),
                  (l.src =
                    t +
                    e +
                    encodeURI(n) +
                    '?' +
                    (function(t) {
                      var i = [];
                      for (var e in t)
                        t.hasOwnProperty(e) &&
                          i.push(
                            encodeURIComponent(e) +
                              '=' +
                              encodeURIComponent(t[e])
                          );
                      return i.join('&');
                    })(r)),
                  (l.style = o),
                  l
                );
              })(this.root, this.product, this.params)),
              this.modalContainer.appendChild(this.iframe));
          }),
          (a.showModal = function(t) {
            if (t) {
              if (t.button > 0 || t.ctrlKey || t.shiftKey || t.metaKey) return;
              t.preventDefault && t.preventDefault();
            }
            (this.modalContainer &&
              'block' === this.modalContainer.style.display) ||
              (this.loadModal(), (this.modalContainer.style.display = 'block'));
          }),
          (a.hideModal = function() {
            this.modalContainer &&
              (i.body.removeChild(this.modalContainer),
              (this.modalContainer = null)),
              (this.iframe = null);
          }),
          (a.handleMessage = function(t) {
            (function(t) {
              if (!/^[a-zA-Z0-9:\/.-]+$/.test(t)) return;
              /^https?:\/\//i.test(t) || (t = 'https://' + t);
              /:\d+$/.test(t) || (t += /^https:/i.test(t) ? ':443' : ':80');
              return t.toLowerCase();
            })(t.origin) === this.messageOrigin &&
              'checkout_modal_closed' === t.data.event &&
              this.iframe &&
              this.iframe.contentWindow === t.source &&
              this.hideModal();
          }),
          (a.extractProductId = function(t) {
            if (t) {
              var i = /\/(?:products|checkout)\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i.exec(
                t.href
              );
              if (i) return i[1];
              if (t.dataset) {
                var n = t.dataset.checkout || t.dataset.product;
                if (n) return (t.href = this.root + e + n), n;
              }
            }
          }),
          (a.turnIntoButton = function(t) {
            for (
              var e,
                n = t.classList.contains('donate-with-crypto'),
                o = !0,
                a = t.firstChild;
              a;
              a = a.nextSibling
            )
              if (
                (3 !== a.nodeType && 8 !== a.nodeType && (o = !1),
                1 === a.nodeType && 'SPAN' === a.tagName)
              ) {
                e = a;
                break;
              }
            if (!e) {
              e = i.createElement('span');
              var r = o && t.textContent.trim();
              for (
                r || (r = (n ? 'Donate' : 'Buy') + ' with Crypto'),
                  e.textContent = r;
                t.lastChild;

              )
                t.removeChild(t.lastChild);
              t.appendChild(e);
            }
            '' === t.rel &&
              '' === t.target &&
              ((t.rel = 'noopener noreferrer'), (t.target = '_blank')),
              (function(t) {
                if (!i.head.querySelector('link[href="' + t + '"]')) {
                  var e = i.createElement('link');
                  (e.rel = 'stylesheet'), (e.href = t), i.head.appendChild(e);
                }
              })(this.root + '/v1/button.css');
          }),
          (t.BuyWithCrypto = n),
          n.findButtonAndInstall(i.currentScript);
      })();
};
