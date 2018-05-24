import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
  resetNextUuid
} from 'react-accessible-accordion';
import '../styles/accordion.css';

export interface FaqProps {}

export default class Faq extends React.Component<FaqProps, any> {
  render() {
    // Reset uuid
    resetNextUuid();

    return (
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Simple title</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>Body content</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Complex title</h3>
            <div>With a bit of description</div>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>Body content</p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  }
}
