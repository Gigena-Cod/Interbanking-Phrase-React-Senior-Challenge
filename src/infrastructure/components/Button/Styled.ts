import { styled } from "styled-components";
import { TYPE } from "./types";

export const Container = styled.button<{ $type?: TYPE }>`
  background-color: ${(props) =>
    props.$type === TYPE.PRIMARY ? "#1E87F0" : "#fff"};
  border: ${(props) =>
    props.$type === TYPE.PRIMARY ? "1px solid #1E87F0" : "1px solid #ffffff"};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 2.25rem;
  width: max-content;
  padding: 0 1rem;
  margin: 0;
  cursor: pointer;
  box-shadow: 0px 0px 12px 0px
    ${(props) =>
      props.$type === TYPE.PRIMARY
        ? "rgba(30, 135, 240, 0.15)"
        : "rgba(0, 0, 0, 0.15)"};
  -webkit-box-shadow: 0px 0px 12px 0px
    ${(props) =>
      props.$type === TYPE.PRIMARY
        ? "rgba(30, 135, 240, 0.15)"
        : "rgba(0, 0, 0, 0.15)"};
  -moz-box-shadow: 0px 0px 12px 0px
    ${(props) =>
      props.$type === TYPE.PRIMARY
        ? "rgba(30, 135, 240, 0.15)"
        : "rgba(0, 0, 0, 0.15)"};
`;
