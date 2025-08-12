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

  private transaction(
    storeName: string,
    mode: IDBTransactionMode
  ): IDBObjectStore {
    const tx = this.db.transaction(storeName, mode);
    return tx.objectStore(storeName);
  }

  private async withTimeout(ms: number = 1500): Promise<void> {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  async get(): Promise<GetResponse> {
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
        resolve({
          data: request.result as Phrase[],
          success: true,
        });
      };
    });

    return request;
  }

  async post(newText: string): Promise<PostResponse> {
    await this.initDB();

    await this.withTimeout();

    const request = await new Promise<PostResponse>((resolve, reject) => {
      const store = this.transaction(STORE_NAME, "readwrite");
      const newPhrase: Phrase = { id: crypto.randomUUID(), text: newText };
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
