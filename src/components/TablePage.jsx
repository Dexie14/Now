// import { Table } from "reactstrap";

const TablePage = () => {
  return (
    <section className="overflow-x-scroll">
    <div className="ps-4 pe-5 py-5 ">
      <table className="w-100">
        <thead className="text-white" style={{background: "#323232"}}>
          <tr className="">
            <th className="px-2 pt-2 col-2"><input type="checkbox"/>{" "}All</th>
            <th className="px-2 pt-2 col-2">Sr. No.</th>
            <th className="px-2 pt-2 col-2">File Name</th>
            <th className="px-2 pt-2 col-3">Status</th>
            <th className="px-2 pt-2 c0l-3">Action</th>
          </tr>
        </thead>
        <tbody className="border-1 border-black ">
          <tr className="border-1 border-black ">
            <th scope="row" className="px-2 py-1"><input type="checkbox" className=""/></th>
            <td className="border-1 border-black px-2 ">1</td>
            <td className="border-1 border-black px-2">Test Demo 45</td>
            <td className="border-1 border-black  px-2">Verification Completed</td>
            <td className="border-1 border-black  px-2">Verification Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default TablePage;
