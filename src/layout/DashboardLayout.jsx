import { Outlet } from "react-router-dom";

import SideBar from "../components/sideBar";
import Navbar from "../components/Navbar";
import "./layout.css"
import { useState } from "react";

const DashboardLayout = () => {

    // const open = false


    const [open, setOpen] = useState(false)

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
        <SideBar  close={false} />
      </div>
      {
        open &&
      <div
        className="position-absolute top-0 bottom-0 d-md-none bg-white flex-column d-flex "
        style={{
          width: "50vw",
          height: "100vh",
          boxShadow: "7px 1px 12px -1px rgba(64,61,61,0.67)",
        }}
      >
        <SideBar close={true} setOpen={setOpen} open={open} />
      </div>
}
      
      <div
        className="break d-flex flex-column justify-content-between overflow-y-scroll "
        style={{height: "100vh", background: "#f7f7f7" }}
      >
        <div>
        <Navbar setOpen={setOpen}/>
        <div className="">
        <Outlet />
        </div>
        </div>
        <p className="text-center w-75 mx-auto mb-0">Copyright 2022 NowNow All Rights Reserved. <span style={{color:"#5ab5f8"}}>Privacy-Policy Terms of Use</span></p>
      </div>
    </div>
  );
};

export default DashboardLayout;
