import type { IBook } from "@/types/books";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ModalType = "view" | "edit" | "delete" | "borrow" | null;

interface modalState {
  modalType: ModalType;
  selectedBook: IBook | null;
}

const initialState: modalState = {
  modalType: null,
  selectedBook: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: ModalType; book: IBook }>
    ) => {
      state.modalType = action.payload.type;
      state.selectedBook = action.payload.book;
    },
    closeModal: (state) => {
      state.modalType = null;
      state.selectedBook = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
