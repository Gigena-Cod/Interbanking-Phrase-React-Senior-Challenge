import { styled } from "styled-components";

export const Container = styled.textarea<{
  $width?: string;
  $minHeight?: string;
}>`
  width: ${(props) => props.$width || "100%"};
  min-height: ${(props) => props.$minHeight || "100%"};
  border: 1px solid #444444;
  outline: none;
  border-radius: 4px;
  resize: none;

  background-color: #fff;
  padding: 0.5rem;
  field-sizing: content;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #333333;
`;
