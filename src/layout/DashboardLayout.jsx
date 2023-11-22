import { Outlet } from "react-router-dom";

import SideBar from "../components/sideBar";
import Navbar from "../components/Navbar";
import "./layout.css"

const DashboardLayout = () => {

    const open = false

  return (
    <div className="d-flex">
      <div
        className="bg-white d-none d-md-block"
        style={{
          width: "20vw",
          minHeight: "100vh",
          boxShadow: "7px 1px 12px -1px rgba(64,61,61,0.67)",
        }}
      >
        <SideBar />
      </div>
      {
        open &&
      <div
        className="position-absolute top-0 bottom-0"
        style={{
          width: "50vw",
          height: "100vh",
          boxShadow: "7px 1px 12px -1px rgba(64,61,61,0.67)",
        }}
      >
        <SideBar />
      </div>
}
      
      <div
        className="break"
        style={{height: "100vh", background: "#f7f7f7" }}
      >
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
