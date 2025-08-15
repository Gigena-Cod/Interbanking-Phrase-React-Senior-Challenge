import type { PhrasesState } from "./types";

export const initialState: PhrasesState = {
  phrases: [],
  selectedPhrase: null,
  createPhrasePopupOpen: false,
  deletePhrasePopupOpen: false,

};
