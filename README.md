# GiveCrypto
This document will outline the build, how to make updates, and how deployment is setup.


### Deployment
Continuous deployments are setup for this build. That means every change to the `master` branch will run through some minimal testing and deploy to `www.givecrypto.org`. For that reason, I suggest [all updates be made on the staging branch first](https://www.useloom.com/share/3dc647ab8d0e4d5f8446e5c17e785fb7). Changes on 'staging' will also test and deploy to our stage at `staging.givecrypto.org`. Once you are happy with your changes, submit a pull request and merge the changes into master. This will again fire the test suite, and deploy the update to production.

### Updates
The build does not rely on a CMS. Instead, following the design spec as a strict guideline, copy updates can be made by simply updating each content section. For example, to update the [hero copy](https://d.pr/i/sxrJvg) on the home page, we would update the file `/content/home/hero.tsx`.

##### content/home/hero.tsx
```
export default {
  title: 'Give cryptocurrency to people in need.',
  subtitle:
    'GiveCrypto is a nonprofit that distributes cryptocurrency to people living in poverty.'
};
```

### Markdown 
The faqs, and a few other content sections can accept Markdown as their input. That provides the ability to create links, format text, etc. Here's how we would add a link to an [FAQ](https://d.pr/i/Vuk32o) found on the `Donate` page:

##### content/faq/donation-faq.tsx
```
[...]
  {
    question: 'Is GiveCrypto a 501c3 organization?',
    answer: `We are a project within our [fiscal sponsor](http://link.com), The Pledge Group Foundation, which is a 501c3 organization.`
  },
[...]
```