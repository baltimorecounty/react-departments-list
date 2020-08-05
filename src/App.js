import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import { Config } from "@baltimorecounty/javascript-utilities";

import React from "react";
import { Run } from "./startup";
import DepartmentTable from "./components/departmentTable";

const { getValue } = Config;

Run();
function App(props) {
  return (
  
  <DepartmentTable />)
}

export default App;
