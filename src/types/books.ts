export const genres = [
  "FICTION",
  "NON-FICTION",
  "SCIENCE",
  "ROMANCE",
  "MYSTERY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export type Genre = (typeof genres)[number];

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBookInput {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
}

export interface IBooks {
  books: IBook[];
}
