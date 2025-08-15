import { Container } from "./Styled";
import type { InputTextProps } from "./types";

/**
 * Custom input text component
 * @param {InputTextProps} inputTextProps - Props for the input text component
 * @param {string} inputTextProps.value - The value of the input text
 * @param {string} inputTextProps.width - The width of the input text
 * @param {string} inputTextProps.placeholder - The placeholder of the input text
 * @param {Function} inputTextProps.onChange - The change handler for the input text
 */
export function InputText(inputTextProps: InputTextProps) {
  const { value, width, placeholder, onChange } = inputTextProps;

  return (
    <Container
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $width={width}
    />
  );
}
