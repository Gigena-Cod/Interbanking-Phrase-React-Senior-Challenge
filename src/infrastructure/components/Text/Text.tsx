import { Container } from "./Styled";
import type { TextProps } from "./types";

/**
 * Custom text component
 * @param {TextProps} textProps - Props for the text component
 * @param {string} textProps.value - The text content of the text component
 * @param {string} textProps.fontSize - The font size of the text component
 * @param {string} textProps.fontWeight - The font weight of the text component
 * @param {string} textProps.fontColor - The font color of the text component
 */
export function Text(textProps: TextProps) {
  const { value, fontSize, fontWeight, fontColor } = textProps;

  const className = `${fontSize} ${fontWeight}`;

  return (
    <Container $fontColor={fontColor} className={className}>
      {value}
    </Container>
  );
}
