import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Phrase } from "../../../domain/models";
import { initialState } from "./state";

const phrasesSlice = createSlice({
  name: "phrases",
  initialState,
  reducers: {
    setPhrases(state, action: PayloadAction<Phrase[]>) {
      state.phrases = action.payload;
    },
    setSelectedPhrase(state, action: PayloadAction<Phrase | null>) {
      state.selectedPhrase = action.payload;
    },
    setCreatePhrasePopupOpen(state, action: PayloadAction<boolean>) {
      state.createPhrasePopupOpen = action.payload;
    },
    setDeletePhrasePopupOpen(state, action: PayloadAction<boolean>) {
      state.deletePhrasePopupOpen = action.payload;
    },
  },
});

export const {
  setPhrases,
  setSelectedPhrase,
  setCreatePhrasePopupOpen,
  setDeletePhrasePopupOpen,
} = phrasesSlice.actions;

export default phrasesSlice.reducer;
