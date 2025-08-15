import { styled } from "styled-components";

export const Container = styled.input<{ $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: 2.25rem;
  border: 1px solid #444444;
  outline: none;
  border-radius: 4px;
  resize: none;

  background-color: #fff;
  padding: 0.5rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #333333;
`;
