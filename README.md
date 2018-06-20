# GiveCrypto
This document will outline the build, how to make updates, and how deployment is setup.

### Copy updates
The build does not rely on a CMS. Instead, following the design spec as a strict guideline, copy updates can be made by simply updating each content section. For example, to update the [hero copy](https://d.pr/i/sxrJvg) on the home page, we would update the file `/content/home/hero.tsx`.

##### content/home/hero.tsx
```
export default {
  title: 'Give cryptocurrency to people in need.',
  subtitle:
    'GiveCrypto is a nonprofit that distributes cryptocurrency to people living in poverty.'
};
```

#### FAQs
The faqs, and a few other content sections can acceps Markdown as their input. That will give us the ability to create links, format text, etc. Here's how we would update an [FAQ](https://d.pr/i/Vuk32o) found on the `Donate` page:

##### content/faq/donation-faq.tsx
```
[...]
  {
    question: 'Is GiveCrypto a 501c3 organization?',
    answer: `We are a project within our fiscal sponsor, The Pledge Group Foundation, which is a 501c3 organization.`
  },
[...]
```