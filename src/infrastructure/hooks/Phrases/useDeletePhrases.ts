import { useState } from "react";
import { PhrasesService } from "../../../domain/services/Phrases/Phrases.service";

import type { DeleteParams } from "./types";

/**
 * Custom hook for deleting phrases
 * @returns {Object} An object containing:
 *   - success: Boolean indicating if the delete operation was successful
 *   - loading: Boolean indicating if the delete operation is in progress
 *   - error: Boolean indicating if an error occurred during the delete operation
 *   - delete: Function to delete a phrase
 *     @param {DeleteParams} deleteParams - Parameters for deleting a phrase
 *     @param {string} deleteParams.phraseId - The ID of the phrase to delete
 */
export function useDeletePhrases() {
  const [success, setSuccess] = useState<boolean>();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const service = new PhrasesService();

  async function del(deleteParams: DeleteParams) {
    try {
      const { phraseId } = deleteParams;

      setLoading(true);

      await service.delete(phraseId);

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    success,
    loading,
    error,
    del,
  };
}
