import React from "react";
import { TableCell, TableRow } from "@baltimorecounty/dotgov-components";

const DepartmentCard = (props) => {
  const {
    departmentName,
    phone,
    address,
    city,
    zip,
    email,
    contactTitle,
    contactName,
    directionsUrl,
    description,
    url,
  } = props;

  return (
    <TableRow>
      <TableCell colspan="1" rowspan="1">
        <h2 className="dg_department-name">
          <a href={url}>{departmentName}</a>
        </h2>
        <div>
          <p>{description}</p>
          <div>&nbsp;</div>
        </div>
      </TableCell>
      <TableCell colspan="1" rowspan="1">
        <p>
          {address} <br></br> {city}, Maryland {zip}
          <br></br>
          {directionsUrl ? <a href={directionsUrl}>Get Directions</a> : null}
        </p>
        <p>
          <strong>{contactTitle}:</strong>&nbsp;{contactName}
          <br></br> {phone}
          <br></br>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </TableCell>
    </TableRow>
  );
};

export default DepartmentCard;
