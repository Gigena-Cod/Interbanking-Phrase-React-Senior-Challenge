import type { GetParams } from "../../../infrastructure/hooks/Phrases/types";
import type { Phrase } from "../../models";
import {
  DB_NAME,
  DB_VERSION,
  DEFAULT_PHRASES,
  STORE_NAME,
  type GetResponse,
  type PostResponse,
} from "./types";

export class PhrasesService {
  private db!: IDBDatabase;

  constructor() {
    this.initDB();
  }

  /**
   * Initializes the database
   * @returns {Promise<void>} A promise that resolves when the database is initialized
   */
  private initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);

      request.onsuccess = async () => {
        this.db = request.result;

        // Verificar si la base de datos está vacía
        const store = this.transaction(STORE_NAME, "readonly");
        const checkRequest = store.count();

        checkRequest.onsuccess = () => {
          if (checkRequest.result === 0) {
            // Si está vacía, cargar frases por defecto
            this.loadDefaultPhrases()
              .then(() => resolve())
              .catch(reject);
          } else {
            resolve();
          }
        };

        checkRequest.onerror = () => reject(checkRequest.error);
      };

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
      };
    });
  }

  /**
   * Creates a transaction for the specified store and mode
   * @param {string} storeName - The name of the store to create a transaction for
   * @param {IDBTransactionMode} mode - The mode of the transaction (readonly or readwrite)
   * @returns {IDBObjectStore} The object store for the specified store and mode
   */
  private transaction(
    storeName: string,
    mode: IDBTransactionMode
  ): IDBObjectStore {
    const tx = this.db.transaction(storeName, mode);
    return tx.objectStore(storeName);
  }

  /**
   * Waits for a specified amount of time
   * @param {number} ms - The amount of time to wait in milliseconds
   * @returns {Promise<void>} A promise that resolves after the specified amount of time
   */
  private async withTimeout(ms: number = 1500): Promise<void> {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  /**
   * Retrieves phrases from the database
   * @param {GetParams} getParams - Optional parameters for the get operation
   * @param {string} getParams.search - Optional search parameter to filter phrases
   * @returns {Promise<GetResponse>} A promise that resolves to the retrieved phrases
   */
  async get(getParams?: GetParams): Promise<GetResponse> {
    const { search } = getParams || {};
    await this.initDB();
    await this.withTimeout();

    const request = await new Promise<GetResponse>((resolve, reject) => {
      const store = this.transaction(STORE_NAME, "readonly");
      const request = store.getAll();

      request.onerror = () =>
        reject({
          data: null,
          success: false,
        });

      request.onsuccess = () => {
        let results = request.result as Phrase[];

        // Filtrado por search usando regex (case-insensitive)
        if (search && search.trim() !== "") {
          const regex = new RegExp(search, "i");
          results = results.filter((phrase) => regex.test(phrase.text));
        }

        resolve({
          data: results,
          success: true,
        });
      };
    });

    return request;
  }

  /**
   * Creates a new phrase in the database
   * @param {string} newText - The text of the new phrase
   * @returns {Promise<PostResponse>} A promise that resolves to the created phrase
   */
  async post(newText: string): Promise<PostResponse> {
    await this.initDB();

    await this.withTimeout();

    const request = await new Promise<PostResponse>((resolve, reject) => {
      const store = this.transaction(STORE_NAME, "readwrite");
      const newPhrase: Phrase = {
        id: crypto.randomUUID(),
        text: newText,
        createdAt: new Date().toISOString(),
      };
      const request = store.add(newPhrase);

      request.onsuccess = () => {
        resolve({
          data: newPhrase,
          success: true,
        });
      };

      request.onerror = () =>
        reject({
          data: null,
          success: false,
        });
    });

    return request;
  }

  /**
   * Deletes a phrase from the database
   * @param {string} id - The ID of the phrase to delete
   * @returns {Promise<boolean>} A promise that resolves to true if the deletion was successful
   */
  async delete(id: string): Promise<boolean> {
    await this.initDB();

    await this.withTimeout();

    const request = await new Promise<boolean>((resolve, reject) => {
      const store = this.transaction(STORE_NAME, "readwrite");
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(true);
    });

    return request;
  }

  /**
   * Loads default phrases into the database
   * @returns {Promise<void>} A promise that resolves when the default phrases are loaded
   */
  private async loadDefaultPhrases(): Promise<void> {
    await Promise.all(
      DEFAULT_PHRASES.map(
        (phrase) =>
          new Promise<void>((resolve, reject) => {
            const store = this.transaction(STORE_NAME, "readwrite");
            const request = store.add(phrase);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
          })
      )
    );
  }
}
