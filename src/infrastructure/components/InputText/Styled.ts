import { styled } from "styled-components";

export const Container = styled.input<{ $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: 2.25rem;
  border: 1px solid rgb(199, 199, 199);
  outline: none;
  border-radius: 4px;
  resize: none;

  background-color: #fff;
  padding: 0.5rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #333333;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.10);
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.10);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.10);
`;
