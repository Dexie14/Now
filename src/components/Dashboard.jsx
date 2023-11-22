import { Button, Input } from "reactstrap";

const Dashboard = () => {
  return (
    <div className="ps-4 pe-5 py-4">
      <h6 className="fw-bold">NIBSS</h6>
      <section className="d-flex ">
        <div className="col-5">
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
        <div className="d-flex gap-4 col-7">
          <div className="w-50">
            <Input
              placeholder="Enter Money to settle"
              className="bg-transparent border-1"
            />
          </div>
          <div>
            <Button style={{background:"#ffa401"}} className="border-0 text-black">Transfer</Button>
          </div>
        </div>
      </section>
      <hr className="border-2 border-black " />
    </div>
  );
};

export default Dashboard;
