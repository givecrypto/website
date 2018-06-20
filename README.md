# GiveCrypto
This document will outline the build, how to make updates, and how deployment is setup.


### Deployment
Continuous deployments are setup for this build. That means every change to the `master` branch will run through some minimal testing and deploy to `www.givecrypto.org`. For that reason, I suggest [all updates be made on the staging branch first](https://www.useloom.com/share/3dc647ab8d0e4d5f8446e5c17e785fb7). Changes on 'staging' will also test and deploy to our stage at `staging.givecrypto.org`. Once you are happy with your changes, [submit a pull request and merge the changes into master](https://www.useloom.com/share/da6d70a04b204e928bcb564aa731ad43). This will again fire the test suite, and deploy the update to production.

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

##### content/home/video-section.tsx
Updating the video section is easy too! Just grab the youtube id for the video and paste it into the `youtubeId` property.

```
export default {
  title: `A video from our founder`,
  youtubeId: '0_bx8bnCoiU',
  subtitle: `“Given the enormous wealth creation from cryptocurrency, and the future potential upside, I believe there is a rare opportunity to create a large non-profit fund.”`,
  meta: `- Brian Armstrong, Founder`,
  link:
    'https://medium.com/@barmstrong/charitable-giving-with-cryptocurrency-11e24923cd4a'
};
```

### Adding donors
Adding donors to the list is pretty similar. Let's say we want to add a new donor to the `25K+` list. This list only requires a name. So we would add new names like this:

##### content/donors/donors-list.tsx
```
[...]
  '$100k+': ['Jayson Hobby', 'James Earl Jones'],
[...]
```

Adding donors to the `1M+`, `10M+` and `100M+` requires a bit more work because we need to show their photo. First, we need to save 4 versions of their headshot: 

| Filename           | w x h     | Format |
|--------------------|-----------|--------|
| first-last.jpg     | 392 x 348 | jpg    |
| first-last@2x.jpg  | 784 x 696 | jpg    |
| first-last.webp    | 392 x 348 | webp   |
| first-last@2x.webp | 784 x 696 | webp   |

##### content/donors/donors-list.tsx
```
[...]
  '$1M+': [
    {
      name: 'First Last',
      role: 'Role, Company Name',
      filename: 'first-last'
    }
  ],
[...]
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