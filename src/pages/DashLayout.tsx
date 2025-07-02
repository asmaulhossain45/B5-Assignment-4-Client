import DashNav from "@/components/layout/DashNav";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router";

const DashLayout = () => {
  return (
    <>
      <DashNav />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashLayout;
