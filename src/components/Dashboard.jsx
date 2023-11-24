import { Button, Card, Input } from "reactstrap";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import wave from "../assets/wavee.png";
import { FiCalendar } from "react-icons/fi";
import BarCharts from "./charts/BarCharts";
import LineCharts from "./charts/LineCharts";

const Dashboard = () => {
  return (
    <div className="ps-4 pe-5 py-4">
      <h6 className="fw-bold">NIBSS</h6>
      <section className="d-md-flex">
        <div className="col-md-5 col-12 mb-2 mb-md-0 ">
          <p className="fw-normal mb-0">Bank Account Number : 0001631199</p>
          <p className="fw-normal d-flex align-items-center gap-2">
            Main Wallet Balance:
            <div
              className=""
              style={{
                width: "40px",
                height: "15px",
                borderRadius: "3px",
                background: "#ffaa12",
              }}
            ></div>
          </p>
        </div>
        <div className="d-flex gap-4 col-md-7 col-12 ">
          <div className="col-md-6">
            <Input
              placeholder="Enter Money to settle"
              className="bg-transparent border-1"
            />
          </div>
          <div>
            <Button
              style={{ background: "#ffa401" }}
              className="border-0 text-black"
            >
              Transfer
            </Button>
          </div>
        </div>
      </section>
      <hr className="border-2 border-black " />
      <section className="d-block justify-content-between flex-wrap gap-1 d-md-flex ">
        <Card
          className="border-0 px-2 py-2 mb-2 mb-md-0 "
          style={{ background: "#ffaa12", minWidth: "32%" }}
        >
          <div className="d-flex align-items-center gap-1">
            <div className="bg-black px-1 py-1 rounded bg-opacity-10">
              <MdOutlineAccountBalanceWallet size={24} color="white" />
            </div>
            <div>
              <h6 className="text-white mb-0">₦7636</h6>
              <p className="text-white mb-0" style={{ fontSize: "12px" }}>
                Main Wallet Balance
              </p>
            </div>
          </div>
          <div className="pt-2 d-flex justify-content-between">
            <div>
              <img src={wave} alt="wave" height={40} width={120} />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <FiCalendar color="white" />
              <p className=" text-white mb-0">16 Dec, 2021</p>
            </div>
          </div>
        </Card>
        <Card
          className="border-0 px-2 py-2 mb-2 mb-md-0 "
          style={{ background: "#353a40", minWidth: "32%" }}
        >
          <div className="d-flex align-items-center gap-1">
            <div className="bg-black px-1 py-1 rounded bg-opacity-10">
              <MdOutlineAccountBalanceWallet size={24} color="white" />
            </div>
            <div>
              <h6 className="text-white mb-0">₦7636</h6>
              <p className="text-white mb-0" style={{ fontSize: "12px" }}>
                Main Wallet Balance
              </p>
            </div>
          </div>
          <div className="pt-2 d-flex justify-content-between">
            <div>
              <img src={wave} alt="wave" height={40} width={120} />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <FiCalendar color="white" />
              <p className=" text-white mb-0">16 Dec, 2021</p>
            </div>
          </div>
        </Card>
        <Card
          className="border-0 px-2 py-2 mb-2 mb-md-0 "
          style={{ background: "#ffaa12", minWidth: "32%" }}
        >
          <div className="d-flex align-items-center gap-1">
            <div className="bg-black px-1 py-1 rounded bg-opacity-10">
              <MdOutlineAccountBalanceWallet size={24} color="white" />
            </div>
            <div>
              <h6 className="text-white mb-0">₦7636</h6>
              <p className="text-white mb-0" style={{ fontSize: "12px" }}>
                Main Wallet Balance
              </p>
            </div>
          </div>
          <div className="pt-2 d-flex justify-content-between">
            <div>
              <img src={wave} alt="wave" height={40} width={120} />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <FiCalendar color="white" />
              <p className=" text-white mb-0">16 Dec, 2021</p>
            </div>
          </div>
        </Card>
      </section>
      <section className="mt-3 d-md-flex justify-content-between gap-3">
        <Card className="col-md-6 col-12 px-3 py-2 bg-white border-1 border-black mb-2 mb-md-0 ">
          <p className="" style={{ fontSize: "12px" }}>
            Transaction History
          </p>
          <BarCharts />
        </Card>
        <Card className="col-md-6 col-12 px-3 py-2 bg-white border-1 border-black ">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="mb-0" style={{ fontSize: "12px" }}>
              Net Value History
            </p>
            <section className="d-flex gap-2 align-items-center ">
            <div className="d-flex gap-1 align-items-center ">
              <span
                className=""
                style={{
                  width: "15px",
                  height: "15px",
                borderRadius: "50%",
                  background: "#8abfeb",
                }}
              ></span>
              <p className="mb-0" style={{ fontSize: "12px" }}>High - 2013</p>
            </div>
            <div className="d-flex gap-1 align-items-center ">
              <span
                className=""
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "#696969",
                }}
              ></span>
              <p className="mb-0" style={{ fontSize: "12px" }}>Low - 2013</p>
            </div>
            </section>
          </div>
          <LineCharts />
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
