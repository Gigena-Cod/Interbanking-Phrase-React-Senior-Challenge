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
    setCreatePhrasePopupOpen(state, action: PayloadAction<boolean>) {
      state.createPhrasePopupOpen = action.payload;
    },
  },
});

export const { setPhrases, setCreatePhrasePopupOpen } = phrasesSlice.actions;

export default phrasesSlice.reducer;
