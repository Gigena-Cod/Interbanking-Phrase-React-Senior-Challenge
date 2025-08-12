import { Modal, Text, TextArea } from "../../../../components";
import { useState } from "react";
import { Container } from "./Styled";
import type { CreatePhrasePopupProps } from "./types";

export function CreatePhrasePopup(
  createPhrasePopupProps: CreatePhrasePopupProps
) {
  const { isOpen, onClose } = createPhrasePopupProps;

  const [newPhrase, setNewPhrase] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      title="Lorem ipsum dolor sit amet"
      description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.rure dolor it anim id est laborum."
      primaryButtonTitle="Close"
      secondaryButtonTitle="Cancel"
      onPrimaryButtonClick={onClose}
      onSecondaryButtonClick={onClose}
      children={
        <Container>
          <TextArea
            placeholder="Write your phrase here..."
            minHeight="5rem"
            value={newPhrase}
            onChange={(event) => setNewPhrase(event.target.value)}
          />
        </Container>
      }
    />
  );
}
