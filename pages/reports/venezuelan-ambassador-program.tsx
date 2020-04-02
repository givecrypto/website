import * as React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { Motion, spring } from "react-motion";
import Analytics from "../../components/Analytics";
import seo from "../../content/ambassadors-report/seo";
import hero from "../../content/ambassadors-report/hero";
import HeadMeta from "../../components/HeadMeta";
import Wrapper from "../../components/Wrapper";
import { breakpoints, colors } from "../../design-system";
import { Step } from "../../utils/Scale";
import Gender from "../../components/Metrics/Gender";
import Education from "../../components/Metrics/Education";
import Age from "../../components/Metrics/Age";
import HouseholdHorizontalBar from "../../components/Metrics/Household/HouseholdHorizontalBar";
import Spend from "../../components/Metrics/Spend";
import useMeasure from "../../utils/useMeasure";
import { get } from "lodash";

// Refresh styles
import "../../utils/rehydrate";

const TAB_SPACE = 24;

// Styled Components
const Title = styled.h2({
  color: colors.coldWater,
  fontWeight: 600,
  marginBottom: 0,
  paddingBottom: 0,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5.45),
  },
});
const Subtitle = styled.h1({
  paddingBottom: Step(3),
  marginTop: 0,
  paddingTop: 0,
  color: colors.coldWater,
  fontWeight: 400,
  fontSize: Step(4.5),
  [breakpoints.ns]: {
    fontSize: Step(5.45),
  },
});

const Tabs = styled.div({
  display: "flex",
  position: "relative",
  paddingBottom: "0.75rem",
});

const TabBar = styled.div(({ width = 0, x = 0 }: any) => ({
  position: "absolute",
  display: "flex",
  background: colors.blue,
  height: 4,
  bottom: -1,
  width,
  transform: `translateX(${x})`,
}));

const Tab = styled.button(({ isActive }: any) => ({
  display: "block",
  webkitAppearance: "none",
  color: isActive ? colors.blue : colors.greyLight,
  cursor: "pointer",
  border: "none",
  padding: 0,
  marginRight: TAB_SPACE,

  "&:focus, &:active": {
    color: colors.blue,
    outline: "none",
  },

  "&:hover": {
    color: colors.blue,
  },

  "&:last-child": {
    marginRight: 0,
  },
}));

enum ActivePage {
  Demographics = "Demographics",
  Spend = "Spend",
}

interface Props {}
const Report: React.FC<Props> = () => {
  const [page, setPage] = React.useState(ActivePage.Demographics);
  const [ipData, setIpData] = React.useState(null);
  const [showReport, setShowReport] = React.useState(true);
  const demoRef = React.useRef();
  const demoMeasure = useMeasure(demoRef);
  const spendRef = React.useRef();
  const spendMeasure = useMeasure(spendRef);

  React.useEffect(() => {
    if (showReport) {
      fetch("https://extreme-ip-lookup.com/json") // Get the IP data
        .then(res => res.json())
        .then(ip => {
          setIpData(ip);
          setShowReport(false);
        });
    }
  }, [showReport]);

  const style = {
    [ActivePage.Demographics]: {
      x: spring(0, { stiffness: 140, damping: 14 }),
      width: spring(demoMeasure.width, { stiffness: 190, damping: 21 }),
    },
    [ActivePage.Spend]: {
      x: spring(demoMeasure.width + TAB_SPACE, { stiffness: 140, damping: 14 }),
      width: spring(spendMeasure.width, { stiffness: 190, damping: 21 }),
    },
  };

  return (
    <Analytics>
      <Head>
        <title key="head-title">{seo.title}</title>
      </Head>
      <HeadMeta
        path="/report"
        title={seo.title}
        description={seo.description}
      />
      <Wrapper className="ph3 bb b--light-gray">
        <Title>{hero.title}</Title>
        <Subtitle className="lh-copy">{hero.subtitle}</Subtitle>
        <Tabs>
          <Tab
            ref={demoRef}
            isActive={page === ActivePage.Demographics}
            onClick={() => setPage(ActivePage.Demographics)}
          >
            Demographics
          </Tab>
          <Motion
            defaultStyle={{ opacity: 0, x: -20 }}
            style={{
              opacity: spring(1),
              x: spring(0, { stiffness: 75, damping: 14 }),
            }}
          >
            {(value: any) => (
              <Tab
                ref={spendRef}
                isActive={page === ActivePage.Spend}
                style={{
                  display:
                    get(ipData, "status") !== "success" ||
                    get(ipData, "countryCode") === "VE"
                      ? "none"
                      : "block",
                  opacity: value.opacity,
                  transform: `translateX(${value.x}px)`,
                }}
                onClick={() => setPage(ActivePage.Spend)}
              >
                Spend
              </Tab>
            )}
          </Motion>
          <Motion
            defaultStyle={{ x: -28, width: demoMeasure.width }}
            style={style[page]}
          >
            {(value: any) => (
              <TabBar
                key="TabBar"
                style={{
                  transform: `translateX(${value.x}px)`,
                  width: value.width,
                }}
              />
            )}
          </Motion>
        </Tabs>
      </Wrapper>
      {page === ActivePage.Spend ? (
        <Wrapper>
          <Spend />
        </Wrapper>
      ) : (
        <>
          <Wrapper className="ph3 bb b--light-gray">
            <Age />
          </Wrapper>
          <Wrapper className="ph0 bb b--light-gray">
            <div className="flex flex-wrap">
              <div className="ph3 w-100 w-50-l pb4 pb0-l bb bn-ns br-l b--light-gray pt4">
                <Gender />
              </div>
              <div className="ph3 w-100 w-50-l pl0 pl3-l pt4">
                <Education />
              </div>
            </div>
          </Wrapper>
          <Wrapper className="ph3 bb b--light-gray">
            <HouseholdHorizontalBar />
          </Wrapper>
        </>
      )}
    </Analytics>
  );
};

export default Report;
