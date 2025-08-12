import { Container } from "./Styled";
import type { InputTextProps } from "./types";

export function InputText(inputTextProps: InputTextProps) {
  const { value, onChange, placeholder } = inputTextProps;

  return (
    <Container value={value} onChange={onChange} placeholder={placeholder} />
  );
}
