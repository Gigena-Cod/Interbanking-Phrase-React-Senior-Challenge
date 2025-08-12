import {
  Container,
  NewPhraseWrapper,
  PhrasesWrapper,
  TitleWrapper,
} from "./Styled";
import { Text, Button, TextArea, Modal } from "../../components";
import { FONT_SIZE, FONT_WEIGHT } from "../../components/Text/types";
import { useEffect, useState } from "react";
import { Phrase } from "./components/Phrase/Phrase";
import { useGetPhrases } from "../../hooks";
import { CreatePhrasePopup } from "./components/CreatePhrasePopup/CreatePhrasePopup";
import { SkeletonPhrase } from "./components/SkeletonPhrase/SkeletonPhrase";

const PHRASES_PER_PAGE = Array.from({ length: 10 });

export function ViewPhrases() {
  const [newPhrase, setNewPhrase] = useState("");

  const getPhrases = useGetPhrases();

  const handleAddPhrase = () => {};

  useEffect(() => {
    getPhrases.get();
  }, []);

  const [createPhrasePopupOpen, setCreatePhrasePopupOpen] = useState(false);

  const handleCreatePhrasePopupOpen = () => {
    setCreatePhrasePopupOpen(true);
  };

  return (
    <Container>
      <TitleWrapper>
        <Text
          value="ViewPhrases"
          fontSize={FONT_SIZE.TEXT_2XL}
          fontWeight={FONT_WEIGHT.FONT_BOLD}
        />
        <Text
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          fontSize={FONT_SIZE.TEXT_SM}
        />
      </TitleWrapper>
      <NewPhraseWrapper>
        <TextArea
          value={newPhrase}
          onChange={(e) => setNewPhrase(e.target.value)}
        />
        <Button title="Add" onClick={handleCreatePhrasePopupOpen} />
      </NewPhraseWrapper>

      <PhrasesWrapper>
        {getPhrases.loading
          ? PHRASES_PER_PAGE.map((_, index) => <SkeletonPhrase key={index} />)
          : getPhrases.data?.data.map((phrase) => (
              <Phrase key={phrase.id} text={phrase.text} />
            ))}
      </PhrasesWrapper>
      <CreatePhrasePopup
        isOpen={createPhrasePopupOpen}
        onClose={() => setCreatePhrasePopupOpen(false)}
      />
    </Container>
  );
}
