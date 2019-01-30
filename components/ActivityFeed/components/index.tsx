import glamorous from "glamorous";
import { Step } from "../../../utils/Scale";
import { colors, shadows } from "../../../design-system";

export const Container = glamorous.section({
  zIndex: 99999,
  boxShadow: shadows.default,
  overflowY: "scroll",
  position: "fixed",
  right: Step(5),
  bottom: Step(5),
  maxWidth: 420,
  height: 200,
  transform: `translateY(100px)`,
  background: colors.white,
  textAlign: "center",
  border: `1px solid ${colors.greyLighter}`,
  borderRadius: "8px",
  color: colors.blue,
  padding: `${Step(2)} ${Step(4)}`,
});

export const EventContainer = glamorous.section({
  textAlign: "left",
  color: colors.grey,
  fontSize: Step(3),
  paddingBottom: Step(4),
  "&:first-child": {
    marginTop: Step(3),
  },
  "> h1": {
    fontWeight: "600",
    fontSize: Step(3.65, "rem"),
    lineHeight: Step(4.45),
    margin: 0,
    padding: `${Step(2)} 0`,
    color: colors.black,
  },
});

export const DateContainer = glamorous.section({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Bar = glamorous.div({
  height: 1,
  flex: "50 0 50%",
  marginRight: Step(3),
  background: colors.greyLighter,
});

export const DateItem = glamorous.h4({
  flex: "0 50 15%",
  color: colors.greyLight,
  padding: 0,
  margin: 0,
});

export const EventMessage = glamorous.h1({
  color: colors.black,
});
