import { Text } from "../Text/Text";
import { Container } from "./Styled";
import { TYPE, type ButtonProps } from "./types";
import { FONT_SIZE } from "../Text/types";
import { useMemo } from "react";

/**
 * Custom button component
 * @param {ButtonProps} buttonProps - Props for the button component
 * @param {string} buttonProps.title - The text content of the button
 * @param {TYPE} buttonProps.type - The type of the button (primary or secondary)
 * @param {Function} buttonProps.onClick - The click handler for the button
 */
export function Button(buttonProps: ButtonProps) {
  const { title, type, disabled, onClick } = buttonProps;

  /**
   * useMemo to optimize the font color calculation
   */
  const getFontColor = useMemo(() => {
    if (disabled) return "#fff";

    switch (type) {
      case TYPE.PRIMARY:
        return "#fff";
      case TYPE.TERTIARY:
        return "#fff";
      default:
        return "#212b2b";
    }
  }, [type]);

  const handleClick = () => {
    if (disabled) return;

    if (!onClick) return;

    onClick();
  };

  return (
    <Container onClick={handleClick} $type={type} $disabled={disabled}>
      <Text
        value={title}
        fontColor={getFontColor}
        fontSize={FONT_SIZE.TEXT_SM}
      />
    </Container>
  );
}
