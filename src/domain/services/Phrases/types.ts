import type { Phrase } from "../../models";

export const DB_NAME = "PhraseDB";

export const STORE_NAME = "phrases";

export const DB_VERSION = 1;

export interface PostResponse {
  data: Phrase;
  success: true;
}

export interface GetResponse {
  data: Phrase[];
  success: true;
}

export const DEFAULT_PHRASES: Phrase[] = [
  {
    id: "1",
    text: "Code is like humor. When you have to explain it, it’s bad.",
  },
  { id: "2", text: "Fix the cause, not the symptom." },
  {
    id: "3",
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
  },
  {
    id: "4",
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  },
  { id: "5", text: "Simplicity is the soul of efficiency." },
  {
    id: "6",
    text: "Before software can be reusable it first has to be usable.",
  },
  { id: "7", text: "Experience is the name everyone gives to their mistakes." },
  {
    id: "8",
    text: "In order to be irreplaceable, one must always be different.",
  },
  {
    id: "9",
    text: "Testing leads to failure, and failure leads to understanding.",
  },
  {
    id: "10",
    text: "Debugging is like being the detective in a crime movie where you are also the murderer.",
  },
];
