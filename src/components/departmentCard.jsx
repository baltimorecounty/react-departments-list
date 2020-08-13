import { Card, CardContent } from "@baltimorecounty/dotgov-components";

import Address from "./Address";
import React from "react";

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
    description,
    url,
  } = props;

  return (
    <Card>
      <CardContent className="text-left">
        <h2 className="dg_department-name">
          <a href={url}>{departmentName}</a>
        </h2>
        <div>
          <p>{description}</p>
        </div>

        <div className="mb--large">
          <Address address={address} city={city} zip={zip} />
          <p>
            <strong>{contactTitle}:</strong>&nbsp;{contactName}
            <br></br> <strong>Contact: </strong>
            {phone}
            <br></br>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
