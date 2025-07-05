export interface IBorrowInput {
  book: string;
  quantity: number;
  dueDate: Date;
}

export interface ISummary {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}
