import glamorous from "glamorous";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import content from "../content/home/about";
import { breakpoints, colors } from "../design-system";
import { Step } from "../utils/Scale";
import Map from "./Map";

const Container = glamorous.section({
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "100%",
  marginTop: Step(7.5),
  height: "auto",
  [breakpoints.ns]: {
    height: 475,
  },
});

const Title = glamorous.h2({
  textAlign: "center",
  padding: `0 ${Step(2)}`,
  color: colors.black,
  fontSize: Step(5),
  [breakpoints.ns]: {
    padding: `0 ${Step(6)}`,
    fontSize: Step(5.65),
  },
});

const DonorsCTA: React.SFC = () => (
  <Container className="flex items-center justify-center relative mb6-ns">
    <div className="z-1 absolute responsive w-100 h-100">
      <Map />
    </div>
    <div className="z-5">
      <Title className="lh-copy measure">
        <ReactMarkdown source={content.title} />
      </Title>
    </div>
  </Container>
);

export default DonorsCTA;
