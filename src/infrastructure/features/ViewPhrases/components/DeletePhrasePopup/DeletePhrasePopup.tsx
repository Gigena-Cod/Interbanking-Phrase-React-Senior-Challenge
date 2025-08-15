import { Modal, notifyFailure, notifySuccess } from "../../../../components";
import { useEffect, useMemo, type JSX } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getDeletePhrasePopupOpen,
  getPhrases,
  getSelectedPhrase,
} from "../../../../redux/Phrases/actions";
import {
  setDeletePhrasePopupOpen,
  setPhrases,
  setSelectedPhrase,
} from "../../../../redux/Phrases";
import { useDeletePhrases } from "../../../../hooks";

/**
 * A component that allows users to delete phrases
 * @returns {JSX.Element} The DeletePhrasePopup component
 */
export function DeletePhrasePopup(): JSX.Element {
  const isOpen = useSelector(getDeletePhrasePopupOpen);

  const selectedPhrase = useSelector(getSelectedPhrase);

  const phrases = useSelector(getPhrases);

  const dispatch = useDispatch();

  const deletePhrases = useDeletePhrases();

  const primaryButtonTitle = useMemo(() => {
    if (deletePhrases.loading) return "Deleting...";

    return "Delete";
  }, [deletePhrases.loading]);

  const onClose = () => {
    dispatch(setDeletePhrasePopupOpen(false));
  };

  const handleSave = () => {
    if (!selectedPhrase?.id) return;

    deletePhrases.del({ phraseId: selectedPhrase.id });
  };

  useEffect(() => {
    if (!deletePhrases.success) return;

    notifySuccess("Phrase deleted successfully");

    const updatedPhrases = phrases.filter(
      (phrase) => phrase.id !== selectedPhrase?.id
    );

    dispatch(setPhrases(updatedPhrases));

    dispatch(setSelectedPhrase(null));

    onClose();
  }, [deletePhrases.success]);

  useEffect(() => {
    if (!deletePhrases.error) return;

    notifyFailure("Failed to delete phrase");
  }, [deletePhrases.error]);

  return (
    <Modal
      isOpen={isOpen}
      title="Delete Phrase"
      description="This action will permanently delete the phrase. Are you sure you want to continue?"
      primaryButtonTitle={primaryButtonTitle}
      primaryButtonDisabled={deletePhrases.loading}
      secondaryButtonTitle="Cancel"
      secondaryButtonDisabled={deletePhrases.loading}
      height="10rem"
      onPrimaryButtonClick={handleSave}
      onSecondaryButtonClick={onClose}
      children={<></>}
    />
  );
}
