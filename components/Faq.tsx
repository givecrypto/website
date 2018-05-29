import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
  resetNextUuid
} from 'react-accessible-accordion';
import '../styles/accordion.css';
import glamorous from 'glamorous';
import { Step } from '../utils/Scale';
import compactFaq from '../content/faq/compact-faq';
import { colors } from '../design-system';
import ReactMarkdown from 'react-markdown';

const Heading = glamorous.h2({
  fontSize: Step(6)
});
const SubHeading = glamorous.h2({
  fontSize: Step(5),
  fontWeight: 500
});

const Faqs: any = () => {
  return compactFaq.map((item: any) => {
    const Wrapper = glamorous.div({
      padding: `${Step(5)} 0`,
      borderBottom: `2px solid ${colors.white}`,
      '> div': {
        overflow: 'hidden',
        outline: 'none',
        '& a': {
          color: colors.green,
          '&:hover': {
            color: colors.white
          }
        },
        '> h2': {
          cursor: 'pointer',
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          '&:after': {
            lineHeight: 0,
            transition: 'all 300ms',
            transform: `rotate(0)`,
            padding: 0,
            margin: 0,
            verticalAlign: 'top',
            fontSize: Step(6),
            content: '+',
            color: colors.blue,
            display: 'block',
            position: 'absolute',
            right: 0,
            top: `0.85rem`
          }
        },
        '& p, & li': {
          fontSize: Step(5),
          lineHeight: Step(4.95, 'none'),
          color: colors.greyLight
        },
        '&:focus': {
          '& h2': {
            color: colors.greyLight
          }
        },
        '&[aria-expanded=true]': {
          '& h2': {
            color: colors.red,
            '&:after': {
              color: colors.red,
              transform: `rotate(45deg)`
            }
          }
        }
      }
    });
    return (
      <AccordionItem key={`key-${item.question}`}>
        <Wrapper>
          <AccordionItemTitle>
            <SubHeading>{item.question}</SubHeading>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ReactMarkdown source={item.answer} />
          </AccordionItemBody>
        </Wrapper>
      </AccordionItem>
    );
  });
};

export interface FaqProps {}

export default class Faq extends React.Component<FaqProps, any> {
  render() {
    // Reset uuid
    resetNextUuid();

    return (
      <>
        <Heading>FAQs</Heading>
        <Accordion accordion={false}>
          <Faqs />
        </Accordion>
      </>
    );
  }
}
