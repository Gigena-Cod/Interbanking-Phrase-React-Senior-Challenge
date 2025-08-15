import type { PhraseProps } from "./types";
import { Container, DateWrapper } from "./Styled";
import { Text } from "../../../../components";
import { formatRelativeDate } from "../../../../helpers/formatRelativeDate";
import { FONT_SIZE } from "../../../../components/Text/types";

export function Phrase(phraseProps: PhraseProps) {
  const { text, createdAt } = phraseProps;

  return (
    <Container>
      <Text value={`“${text}”`} />
      <DateWrapper>
        <Text
          value={formatRelativeDate(createdAt)}
          fontSize={FONT_SIZE.TEXT_XS}
          fontColor="#a5a5a5"
        />
      </DateWrapper>
    </Container>
  );
}
