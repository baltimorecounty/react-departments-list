import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import DepartmentTable from "./components/departmentTable";

Run();

function App(props) {
  return <DepartmentTable />;
}

export default App;
