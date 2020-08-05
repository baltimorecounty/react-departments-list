import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

import DepartmentCard from "./departmentCard";
import DepartmentSidebar from "./departmentSideBar";
import useDepartment from "../hooks/useDepartment";

const DepartmentTable = (props) => {
  const [{ department, hasError, isLoading }] = useDepartment();

  console.log(department);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //   const {
  //     departmentName,
  //     phone,
  //     address,
  //     city,
  //     zip,
  //     email,
  //     contactTitle,
  //     contactName,
  //     directionsUrl,
  //     description,
  //     url,
  //   } = props;

  if (hasError) {
    return (
      <p>
        We could not load information for departments. Please try again in a few
        minutes.
      </p>
    );
  }
  //style="position: absolute !important;height: 1px; width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);white-space: nowrap; /* added line */
  const styles = {
    position: "absolute",
    height: "1px",
    width: "1px",
    overflow: "hidden",
    clip: "rect(1px 1px 1px 1px)",
    whiteSpace: "nowrap",
  };
  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {isLoading ? (
              <p>{`Loading Departments...`}</p>
            ) : (
              <div id="dg_main-content">
                <div class="dg_form-field">
                  <label
                    class="dg_label"
                    for="service-list-filter-input"
                    style={styles}
                  >
                    Apply
                  </label>
                  <input
                    class="department-list-filter mb--default"
                    id="department-list-filter-input"
                    placeholder="Beging typing to filter departments by name..."
                    type="search"
                  ></input>
                </div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell>Department Name</TableHeadCell>
                      <TableHeadCell>Contact Information</TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <DepartmentCard />
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            <DepartmentSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentTable;
