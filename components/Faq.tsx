import styled from "@emotion/styled";
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemBody,
  AccordionItemTitle,
  resetNextUuid,
} from "react-accessible-accordion";
import ReactMarkdown from "react-markdown";
import compactFaq from "../content/faq/compact-faq";
import { colors } from "../design-system";
import "../styles/accordion.css";
import { Step } from "../utils/Scale";

const SubHeading = styled.h2({
  fontSize: Step(5),
  fontWeight: 500,
  paddingRight: Step(4.5),
});

const Wrapper = styled.div(({ scheme }: any) => ({
  padding: `${Step(5)} 0`,
  borderBottom: `2px solid ${colors.greyLightest}`,
  "> div": {
    overflow: "hidden",
    outline: "none",
    "& a": {
      color: colors.green,
      "&:hover": {
        color: scheme === "light" ? colors.black : colors.white,
      },
    },
    "> h2": {
      color: scheme === "light" ? colors.black : colors.white,
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      width: "100%",
      "&:after": {
        lineHeight: 0,
        transition: "all 300ms",
        transform: `rotate(0)`,
        padding: 0,
        margin: 0,
        verticalAlign: "top",
        fontSize: Step(6),
        content: "+",
        color: colors.blue,
        display: "block",
        position: "absolute",
        right: 0,
        top: `0.85rem`,
      },
    },
    "& p, & li": {
      fontSize: Step(5),
      lineHeight: Step(4.95, "none"),
      color: colors.greyLight,
    },
    "&:focus": {
      "& h2": {
        color: colors.greyLight,
      },
    },
    "&[aria-expanded=true]": {
      "& h2": {
        color: scheme === "light" ? colors.black : colors.white,
        // textShadow: '0 0 10px rgba(255,255,255,0.25)',
        "&:after": {
          color: colors.red,
          transform: `rotate(45deg)`,
        },
      },
    },
  },
}));

const Faqs: any = (props: {
  qa: { map: (arg0: (item: any) => JSX.Element) => void };
  scheme: string;
}) => {
  return props.qa.map((item: any) => {
    return (
      <AccordionItem key={`key-${item.question}`}>
        <Wrapper scheme={props.scheme}>
          <AccordionItemTitle>
            <SubHeading className="lh-title">{item.question}</SubHeading>
          </AccordionItemTitle>
          <AccordionItemBody>
            <ReactMarkdown source={item.answer} />
          </AccordionItemBody>
        </Wrapper>
      </AccordionItem>
    );
  });
};

export interface FaqProps {
  title?: string;
  scheme?: string;
  list?: any;
}

export default class Faq extends React.Component<FaqProps, any> {
  public render() {
    const { title = "FAQs", scheme = "dark", list = compactFaq } = this.props;

    const Heading = styled.h2({
      color: scheme === "light" ? colors.black : colors.white,
      lor: colors.white,
      fontSize: Step(6),
    });

    // Reset uuid
    resetNextUuid();

    return (
      <>
        <Heading>{title}</Heading>
        <Accordion accordion={false}>
          <Faqs qa={list} scheme={scheme} />
        </Accordion>
      </>
    );
  }
}
