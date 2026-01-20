import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayouts;
