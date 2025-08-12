import { useState } from "react";
import { PhrasesService } from "../../../domain/services/Phrases/Phrases.service";
import type { GetResponse } from "../../../domain/services/Phrases/types";

export function useGetPhrases() {
  const [data, setData] = useState<GetResponse>();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const service = new PhrasesService();

  async function get() {
    try {
      setLoading(true);
      const response = await service.get();

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
