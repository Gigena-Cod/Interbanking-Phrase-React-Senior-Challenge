import type { PhraseProps } from "./types";
import { Container, DateDeleteWrapper } from "./Styled";
import { Button, Text } from "../../../../components";
import { formatRelativeDate } from "../../../../helpers/formatRelativeDate";
import { FONT_SIZE } from "../../../../components/Text/types";
import { TYPE } from "../../../../components/Button/types";
import { useDispatch } from "react-redux";
import {
  setDeletePhrasePopupOpen,
  setSelectedPhrase,
} from "../../../../redux/Phrases";

export function Phrase(phraseProps: PhraseProps) {
  const { text, createdAt } = phraseProps;

  const dispatch = useDispatch();

  const handleDeletePhrase = () => {
    dispatch(setDeletePhrasePopupOpen(true));
    dispatch(setSelectedPhrase(phraseProps));
  };

  return (
    <Container>
      <Text value={`“${text}”`} />

      <DateDeleteWrapper>
        <Text
          value={formatRelativeDate(createdAt)}
          fontSize={FONT_SIZE.TEXT_XS}
          fontColor="#a5a5a5"
        />
        <Button
          title="Delete"
          type={TYPE.TERTIARY}
          onClick={handleDeletePhrase}
        />
      </DateDeleteWrapper>
    </Container>
  );
}
