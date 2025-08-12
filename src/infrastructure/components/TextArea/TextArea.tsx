import type { TextAreaProps } from "./types";
import { Container } from "./Styled";

export function TextArea(textAreaProps: TextAreaProps) {
  const { value, placeholder, width, minHeight, onChange } = textAreaProps;

  return (
    <Container
      placeholder={placeholder}
      $width={width}
      $minHeight={minHeight}
      value={value}
      onChange={onChange}
    />
  );
}
