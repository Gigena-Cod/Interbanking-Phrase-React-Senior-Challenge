import { styled } from "styled-components";
import { TYPE } from "./types";

export const Container = styled.button<{ $type?: TYPE }>`
  background-color: ${(props) =>
    props.$type === TYPE.PRIMARY ? "#212b2b" : "#fff"};
  border: ${(props) =>
    props.$type === TYPE.PRIMARY ? "1px solid #212b2b" : "1px solid #212b2b"};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 2.25rem;
  width: min-content;
  padding: 0 1rem;
  margin: 0;
`;
