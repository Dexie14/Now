/* eslint-disable react/prop-types */
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const SideBar = ({ close, setOpen }) => {
  const [employee, setEmployee] = useState(false);
  const [pay, setPay] = useState(false);
  const [receive, setReceive] = useState(false);

  return (
    <div className="d-flex justify-content-between flex-column min-vh-100">
      <section>
        <div className="d-flex flex-column  justify-content-center align-items-center my-3">
          {close && (
            <button
              type="button"
              className="btn-close pt-3 flex justify-content-center"
              aria-label="Close"
              onClick={() => setOpen(false)}
            ></button>
          )}
          <img src={Logo} alt="Logo" className="w-75" />
        </div>
        <hr className="" />

        <section className="mt-4">
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <p className="mb-0">Dashboard</p>
          </NavLink>
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2 ">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <p className="mb-0">Reports</p>
          </NavLink>
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <p className="mb-0">Transaction History</p>
          </NavLink>
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <div
              className="d-flex align-items-center gap-3"
              onClick={() => setEmployee(!employee)}
            >
              <p className="mb-0">Employee Management</p>
              {employee ? (
                <SlArrowDown size={12} />
              ) : (
                <SlArrowRight size={12} />
              )}
            </div>
          </NavLink>
          {employee && (
            <div className="px-4" style={{ background: "#e6e6e6" }}>
              <p className="px-1">Manage Employee</p>
              <p className="px-1">Modify Permission</p>
            </div>
          )}
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2 ">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <div
              className="d-flex align-items-center gap-3"
              onClick={() => setPay(!pay)}
            >
              <p className="mb-0">Payment Outward</p>
              {pay ? <SlArrowDown size={12} /> : <SlArrowRight size={12} />}
            </div>
          </NavLink>
          {pay && (
            <div className="px-4" style={{ background: "#e6e6e6" }}>
              <p className="px-1">Manage Employee</p>
              <p className="px-1">Modify Permission</p>
            </div>
          )}
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <div
              className="d-flex align-items-center gap-3"
              onClick={() => setReceive(!receive)}
            >
              <p className="mb-0">Receive Money</p>
              {receive ? <SlArrowDown size={12} /> : <SlArrowRight size={12} />}
            </div>
          </NavLink>
          {receive && (
            <div className="px-4" style={{ background: "#e6e6e6" }}>
              <p className="px-1">Manage Employee</p>
              <p className="px-1">Modify Permission</p>
            </div>
          )}
          <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
            <span
              className=""
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#dbdbdb",
              }}
            ></span>
            <p className="mb-0">Chat Support</p>
          </NavLink>
        </section>
      </section>

      <section className="">
        <hr />
        <NavLink className="d-flex gap-2 align-items-center mb-3 text-decoration-none text-black px-2">
          <span
            className=""
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: "#fea400",
            }}
          ></span>
          <p className="mb-0" style={{ color: "#fea400" }}>
            Logout
          </p>
        </NavLink>
      </section>
    </div>
  );
};

export default SideBar;
