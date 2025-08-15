import type { Phrase } from "../../../domain/models";

export interface PhrasesState {
  phrases: Phrase[];
  createPhrasePopupOpen: boolean;
}
