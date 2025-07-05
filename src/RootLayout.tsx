import { Outlet } from "react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ModalContainer from "./components/modals/ModalContainer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ModalContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
