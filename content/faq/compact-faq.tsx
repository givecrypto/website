const exampleList = `
- List
- Another item
- Spacing/indenting matters
- So this list is up here in a variable
  - Nesting is supported
  - So are [links](/)
`;

const faqs = [
  {
    question: 'Basic question',
    answer: `We have the best answers. [I'm an inline-style link](/)`
  },
  {
    question: 'Answer with link',
    answer: `Learn more about us on the internet. [I'm an inline-style link](/)`
  },
  {
    question: 'Great title',
    answer: exampleList
  },
  {
    question: 'Is my donation tax deductable',
    answer:
      'Yes. Donations through the site are tax deductible through our fiscal sponsor the Pledge Group. However, anonymous donations are not tax deductible as name and contact information is needed to issue a tax deduction receipt.'
  }
];

export default faqs;
