import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { colors, shadows } from "../../../design-system";
import { Step } from "../../../utils/Scale";

export const Container = styled.section`
  z-index: 99999;
  box-shadow: ${shadows.default};
  position: fixed;
  overflow: hidden;
  right: ${Step(5)};
  bottom: ${Step(5)};
  width: 420px;
  max-width: calc(100% - (${Step(5)} * 2));
  height: 200px;
  transform: translateY(100px);
  background: ${colors.white};
  text-align: center;
  border: 1px solid ${colors.greyLighter};
  border-radius: 8px;
  color: ${colors.blue};
`;
export const List = styled.section`
  overflow-y: scroll;
  height: 198px;
  padding: ${Step(2)} ${Step(4)};
  -webkit-overflow-scrolling: touch;
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
  &:first-of-type {
    margin-top: ${Step(3)};
  }
`;

export const DateContainer = styled.section`
  display: flex;
  flex-direction: row;
  min-width: 0;
  align-items: center;
  justify-content: stretch;
`;

export const Bar = styled.div`
  height: 1px;
  min-width: 0;
  flex: 50 0 50%;
  margin-right: ${Step(3)};
  background: ${colors.greyLighter};
`;

export const DateItem = styled.h4`
  color: ${colors.greyLight};
  padding: 0;
  margin: 0;
`;

export const EventMessage = styled.h1`
  color: ${colors.black};
`;
export const EventLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
`;

const dot = css`
  position: absolute;
  content: "";
  left: 4px;
  margin: 0 3px;
  display: inline-block;
  background: ${colors.greyLight};
  width: 4px;
  height: 4px;
  border-radius: 100%;
`;
export const DragBarContainer = styled.div`
  position: absolute;
  z-index: 99999;
  top: 0;
  left: calc(50% - 25px);
  margin: 0 auto;
  width: 50px;
  height: 20px;
  background: ${colors.greyLighter};
  border-radius: 0 0 8px 8px;
  transform: translateY(-6px);
`;
export const DragBar = styled.div`
  text-align: center;
  position: relative;
  margin: 0;
  padding: 0;
  display: inline-block;
  cursor: move;
  font-size: ${Step(5)};
  color: ${colors.greyLight};
  background: ${colors.greyLight};
  width: 4px;
  height: 4px;
  border-radius: 100%;

  &:before {
    ${dot};
  }
  &:after {
    ${dot};
    left: auto;
    right: 4px;
  }
`;

export const DragBarSpace = styled.div`
  display: block;
  width: 100%;
  height: 10px;
`;
