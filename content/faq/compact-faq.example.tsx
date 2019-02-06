const exampleList = `
- List
- Another item
- Spacing/indenting matters
- So this list is up here in a variable
  - Nesting is supported
  - So are [links](/)
`;

const exampleStyles = `
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~
`;

const faqs = [
  {
    question: "Answer with link",
    answer: `Learn more about us on the internet. [I'm an inline-style link](/)`
  },
  {
    question: "Styled example",
    answer: exampleStyles
  },
  {
    question: "List example",
    answer: exampleList
  },
  {
    question: "Is my donation tax deductable",
    answer:
      "Yes. Donations through the site are tax deductible through our fiscal sponsor the Pledge Group. However, anonymous donations are not tax deductible as name and contact information is needed to issue a tax deduction receipt."
  }
];

export default faqs;
