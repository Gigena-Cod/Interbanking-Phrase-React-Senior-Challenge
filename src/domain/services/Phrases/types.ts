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
    createdAt: "2025-08-15T15:27:42.683Z",
  },
  {
    id: "2",
    text: "Fix the cause, not the symptom.",
    createdAt: "2025-08-15T14:55:10.120Z",
  },
  {
    id: "3",
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    createdAt: "2025-08-14T20:12:05.450Z",
  },
  {
    id: "4",
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    createdAt: "2025-08-13T09:42:33.000Z",
  },
  {
    id: "5",
    text: "Simplicity is the soul of efficiency.",
    createdAt: "2025-08-12T16:18:27.999Z",
  },
  {
    id: "6",
    text: "Before software can be reusable it first has to be usable.",
    createdAt: "2025-08-11T11:30:50.321Z",
  },
  {
    id: "7",
    text: "Experience is the name everyone gives to their mistakes.",
    createdAt: "2025-08-10T08:05:12.456Z",
  },
  {
    id: "8",
    text: "In order to be irreplaceable, one must always be different.",
    createdAt: "2025-08-09T19:45:55.987Z",
  },
  {
    id: "9",
    text: "Testing leads to failure, and failure leads to understanding.",
    createdAt: "2025-08-08T14:22:11.654Z",
  },
  {
    id: "10",
    text: "Debugging is like being the detective in a crime movie where you are also the murderer.",
    createdAt: "2025-08-07T21:37:03.222Z",
  },
];
