export interface IBook {
  id: string;
  title: string;
  author: string;
  image?: string;
  genre: "Fiction" | "Non-Fiction" | "Sci-Fi" | "Romance" | "Mystery" | "Biography" | "Fantasy" | string;
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
