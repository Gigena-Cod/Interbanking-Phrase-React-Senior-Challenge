import {
  Modal,
  notifyFailure,
  notifySuccess,
  TextArea,
} from "../../../../components";
import { useEffect, useMemo, useState, type JSX } from "react";
import { Container } from "./Styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCreatePhrasePopupOpen,
  getPhrases,
} from "../../../../redux/Phrases/actions";
import {
  setCreatePhrasePopupOpen,
  setPhrases,
} from "../../../../redux/Phrases";
import { useCreatePhrases } from "../../../../hooks";

/**
 * A component that allows users to create new phrases
 * @returns {JSX.Element} The CreatePhrasePopup component
 */
export function CreatePhrasePopup(): JSX.Element {
  const [newPhrase, setNewPhrase] = useState("");

  const isOpen = useSelector(getCreatePhrasePopupOpen);

  const phrases = useSelector(getPhrases);

  const dispatch = useDispatch();

  const createPhrases = useCreatePhrases();

  const primaryButtonTitle = useMemo(() => {
    if (createPhrases.loading) return "Saving...";

    return "Save";
  }, [createPhrases.loading]);

  const onClose = () => {
    dispatch(setCreatePhrasePopupOpen(false));
  };

  const handleSave = () => {
    createPhrases.create({ text: newPhrase });
  };

  useEffect(() => {
    if (!createPhrases.data) return;

    notifySuccess("Phrase created successfully");

    const updatedPhrases = [createPhrases.data.data, ...phrases];

    dispatch(setPhrases(updatedPhrases));

    setNewPhrase("");

    onClose();
  }, [createPhrases.data]);

  useEffect(() => {
    if (!createPhrases.error) return;

    notifyFailure("Failed to create phrase");
  }, [createPhrases.error]);

  return (
    <Modal
      isOpen={isOpen}
      title="Create a New Phrase"
      description="Write an inspiring, funny, or thoughtful phrase to add to your collection."
      primaryButtonTitle={primaryButtonTitle}
      primaryButtonDisabled={createPhrases.loading}
      secondaryButtonTitle="Cancel"
      secondaryButtonDisabled={createPhrases.loading}
      onPrimaryButtonClick={handleSave}
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
