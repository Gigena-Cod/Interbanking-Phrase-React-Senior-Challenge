import type { TextAreaProps } from "./types";
import { Container } from "./Styled";

/**
 * Custom text area component
 * @param {TextAreaProps} textAreaProps - Props for the text area component
 * @param {string} textAreaProps.value - The value of the text area
 * @param {string} textAreaProps.placeholder - The placeholder of the text area
 * @param {string} textAreaProps.width - The width of the text area
 * @param {string} textAreaProps.minHeight - The minimum height of the text area
 * @param {Function} textAreaProps.onChange - The change handler for the text area
 */
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
