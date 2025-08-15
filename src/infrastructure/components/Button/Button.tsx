import { Text } from "../Text/Text";
import { Container } from "./Styled";
import { TYPE, type ButtonProps } from "./types";
import { FONT_SIZE } from "../Text/types";

/**
 * Custom button component
 * @param {ButtonProps} buttonProps - Props for the button component
 * @param {string} buttonProps.title - The text content of the button
 * @param {TYPE} buttonProps.type - The type of the button (primary or secondary)
 * @param {Function} buttonProps.onClick - The click handler for the button
 */
export function Button(buttonProps: ButtonProps) {
  const { title, type, onClick } = buttonProps;

  return (
    <Container onClick={onClick} $type={type}>
      <Text
        value={title}
        fontColor={type === TYPE.PRIMARY ? "#fff" : "#212b2b"}
        fontSize={FONT_SIZE.TEXT_SM}
      />
    </Container>
  );
}
