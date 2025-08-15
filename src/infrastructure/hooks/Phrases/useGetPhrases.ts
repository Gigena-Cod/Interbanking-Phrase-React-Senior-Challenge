import { useState } from "react";
import { PhrasesService } from "../../../domain/services/Phrases/Phrases.service";
import type { GetResponse } from "../../../domain/services/Phrases/types";
import type { GetParams } from "./types";

/**
 * Custom hook for fetching phrases
 * @returns {Object} An object containing:
 *   - data: The response data from the fetch operation
 *   - loading: Boolean indicating if the fetch operation is in progress
 *   - error: Boolean indicating if an error occurred during the fetch operation
 *   - get: Function to fetch phrases
 *     @param {GetParams} getParams - Parameters for fetching phrases
 *     @param {string} getParams.search - The search query to filter phrases
 */
export function useGetPhrases() {
  const [data, setData] = useState<GetResponse>();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const service = new PhrasesService();

  async function get(getParams: GetParams) {
    try {
      const { search } = getParams;
      setLoading(true);
      const response = await service.get({ search });

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
    get,
  };
}
