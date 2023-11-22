/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = ({setOpen, open}) => {
  return (
    <section
      style={{
        background: "white",
        boxShadow: "-3px 13px 9px 3px rgba(236,236,236,0.75)",
      }}
    >
      <div className="d-flex justify-content-between ps-4 pe-5  py-3">
        <div>
          <IoMenu size={25} onClick={() => {setOpen(!open)}} style={{cursor: "pointer"}}/>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <BiEnvelope size={20} color="#949494" />
          <MdOutlineCalendarToday size={20} color="#949494" />
          <div className="position-relative ">
            <LuMessageSquare size={20} color="#949494" className="" />
            <div
              className="position-absolute top-0 end-0 d-flex justify-content-center align-items-center"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#f4b556",
                color: "#fff",
                fontSize: "9px",
              }}
            >
              3
            </div>
          </div>
          <div className="position-relative ">
            <IoMdNotificationsOutline size={20} color="#949494" className="" />
            <div
              className="position-absolute top-0 end-0 d-flex justify-content-center align-items-center"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#fc0001",
                color: "#fff",
                fontSize: "9px",
              }}
            >
              3
            </div>
          </div>
          <IoSettingsOutline size={20} color="#949494" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
