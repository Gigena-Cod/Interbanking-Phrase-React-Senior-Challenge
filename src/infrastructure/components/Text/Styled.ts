import { styled } from "styled-components";

export const Container = styled.span<{ $fontColor?: string }>`
  color: ${(props) => props.$fontColor || "#444444"};
`;
