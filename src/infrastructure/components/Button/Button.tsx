import { Text } from "../Text/Text";
import { Container } from "./Styled";
import { TYPE, type ButtonProps } from "./types";
import { FONT_SIZE, FONT_WEIGHT } from "../Text/types";

export function Button(buttonProps: ButtonProps) {
  const { title, type, onClick } = buttonProps;

  return (
    <Container onClick={onClick} $type={type }>
      <Text
        value={title}
        fontColor={type === TYPE.PRIMARY ? "#fff" : "#212b2b"}
        fontSize={FONT_SIZE.TEXT_BASE}
        fontWeight={FONT_WEIGHT.FONT_BOLD}
      />
    </Container>
  );
}
