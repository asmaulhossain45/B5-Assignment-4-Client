export const genres = [
  "FICTION",
  "NON-FICTION",
  "SCI-FI",
  "ROMANCE",
  "MYSTERY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export type Genre = typeof genres[number];

export interface IBook {
  id: string;
  title: string;
  author: string;
  image?: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBooks {
  books: IBook[];
}
