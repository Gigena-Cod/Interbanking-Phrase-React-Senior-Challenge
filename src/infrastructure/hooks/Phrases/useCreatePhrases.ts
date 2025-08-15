import { useState } from "react";
import { PhrasesService } from "../../../domain/services/Phrases/Phrases.service";
import type { PostResponse } from "../../../domain/services/Phrases/types";
import type { CreateParams } from "./types";

/**
 * Custom hook for creating new phrases
 * @returns {Object} An object containing:
 *   - data: The response data from the create operation
 *   - loading: Boolean indicating if the create operation is in progress
 *   - error: Boolean indicating if an error occurred during the create operation
 *   - create: Function to create a new phrase
 *     @param {CreateParams} createParams - Parameters for creating a phrase
 *     @param {string} createParams.text - The text content of the phrase to create
 */
export function useCreatePhrases() {
  const [data, setData] = useState<PostResponse>();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const service = new PhrasesService();

  async function create(createParams: CreateParams) {
    try {
      const { text } = createParams;

      setLoading(true);

      const response = await service.post(text);

      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    create,
  };
}
