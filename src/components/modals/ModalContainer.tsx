import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ViewBookModal from "./ViewBook.Modal";
import EditBookModal from "./EditBook.Modal";
import DeleteBookModal from "./DeleteBook.Modal";
import BorrowBookModal from "./BorrowBook.Modal";
import { closeModal } from "@/redux/slices/modalSlice";

const ModalContainer = () => {
  const dispatch = useAppDispatch();
  const { modalType, selectedBook } = useAppSelector((state) => state.modal);
  if (!selectedBook) return null;
  return (
    <>
      {modalType === "view" && (
        <ViewBookModal
          open={true}
          book={selectedBook}
          setOpen={() => dispatch(closeModal())}
        />
      )}
      {modalType === "borrow" && (
        <BorrowBookModal
          open={true}
          book={selectedBook}
          setOpen={() => dispatch(closeModal())}
        />
      )}
      {modalType === "edit" && (
        <EditBookModal
          open={true}
          book={selectedBook}
          setOpen={() => dispatch(closeModal())}
        />
      )}
      {modalType === "delete" && (
        <DeleteBookModal
          open={true}
          book={selectedBook}
          setOpen={() => dispatch(closeModal())}
        />
      )}
    </>
  );
};

export default ModalContainer;
