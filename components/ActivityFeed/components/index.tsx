import styled from "@emotion/styled";
import { Step } from "../../../utils/Scale";
import { colors, shadows } from "../../../design-system";

console.log(Step(7, null));
export const Container = styled.section`
  z-index: 99999;
  box-shadow: ${shadows.default};
  overflow-y: scroll;
  position: fixed;
  right: ${Step(5)};
  bottom: ${Step(5)};
  width: 420px;
  max-width: calc(100% - 3.65rem);
  height: 200px;
  transform: translateY(100px);
  background: ${colors.white};
  text-align: center;
  border: 1px solid ${colors.greyLighter};
  border-radius: 8px;
  color: ${colors.blue};
  padding: ${Step(2)} ${Step(4)};
`;

export const EventContainer = styled.section`
  text-align: left;
  color: ${colors.grey};
  font-size: ${Step(3)};
  padding-bottom: ${Step(4)};
  h1 {
    font-weight: 600;
    font-size: ${Step(3.65)};
    line-height: ${Step(4.45, null)};
    margin: 0;
    padding: ${Step(2)} 0;
    color: ${colors.black};
  }
  &:first-child {
    margin-top: ${Step(3)};
  }
`;

export const DateContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.div`
  height: 1px;
  flex: 50 0 50%;
  margin-right: ${Step(3)};
  background: ${colors.greyLighter};
`;

export const DateItem = styled.h4`
  flex: 0 50 15%;
  color: ${colors.greyLight};
  padding: 0;
  margin: 0;
`;

export const EventMessage = styled.h1`
  color: ${colors.black};
`;
