import { Container } from "./Styled";
import type { TextProps } from "./types";

export function Text(textProps: TextProps) {
  const { value, fontSize, fontWeight, fontColor } = textProps;

  const className = `${fontSize} ${fontWeight}`;

  return (
    <Container $fontColor={fontColor} className={className}>
      {value}
    </Container>
  );
}
