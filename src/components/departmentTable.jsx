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
  const [{ department = [], hasError, isLoading }] = useDepartment();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { records = [] } = department;

  if (hasError) {
    return (
      <p>
        We could not load information for departments. Please try again in a few
        minutes.
      </p>
    );
  }

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
                <div
                  className="filter-table-container"
                  id="department-filter-container"
                >
                  <div className="dg_form-field">
                    <label
                      className="dg_label"
                      htmlFor="service-list-filter-input"
                      style={styles}
                    >
                      Apply
                    </label>
                    <input
                      className="department-list-filter mb--default"
                      id="department-list-filter-input"
                      placeholder="Beging typing to filter departments by name..."
                      type="search"
                    ></input>
                  </div>
                  <div className="table-responsive">
                    <p id="filter-list-no-results" style={{ display: "none" }}>
                      No departments match your filter criteria.
                    </p>
                    <Table className="table department-list">
                      <TableHead>
                        <TableRow>
                          <TableHeadCell>Department Name</TableHeadCell>
                          <TableHeadCell>Contact Information</TableHeadCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {records.map((item, index) => {
                          return (
                            <DepartmentCard
                              key={index}
                              departmentName={item.departmentName}
                              phone={item.phone}
                              address={item.address}
                              city={item.city}
                              zip={item.zip}
                              email={item.email}
                              contactTitle={item.contactTitle}
                              contactName={item.contactName}
                              directionsUrl={item.directionsUrl}
                              description={item.description}
                              url={item.url}
                            />
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
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
