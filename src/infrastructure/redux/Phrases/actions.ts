import type { RootState } from "..";
import type { Phrase } from "../../../domain/models";

export const getPhrases = (state: RootState): Phrase[] => {
  return state.phrases.phrases;
};

export const getCreatePhrasePopupOpen = (state: RootState): boolean => {
  return state.phrases.createPhrasePopupOpen;
};
