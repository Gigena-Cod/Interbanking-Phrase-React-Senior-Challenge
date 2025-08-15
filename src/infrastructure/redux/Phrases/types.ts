import type { Phrase } from "../../../domain/models";

export interface PhrasesState {
  phrases: Phrase[];
  selectedPhrase: Phrase | null;
  createPhrasePopupOpen: boolean;
  deletePhrasePopupOpen: boolean;
}
