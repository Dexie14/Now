
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FormPage from "./components/FormPage";
import TablePage from "./components/TablePage";
import DashboardLayout from "./layout/dashboardLayout";

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="form" element={<FormPage />} />
          <Route path="table" element={<TablePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
