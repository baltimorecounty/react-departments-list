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
      <h2 className="dg_department-name text-left">
        <a href={url}>{departmentName}</a>
      </h2>
      <CardContent className="text-left">
        <div>
          <p>{description}</p>
        </div>
        {contactTitle ? (
          <div className="dg_department_title">
            <p>
              <strong>{contactTitle}:</strong>&nbsp;{contactName}
            </p>
          </div>
        ) : null}
        <div className="mb--large">
          <Address address={address} city={city} zip={zip} />
          <div className="dg_department_contact">
            <strong>Contact: </strong>
            <a style={{ display: "inline" }} href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
          {email ? (
            <div className="dg_department_email">
              <strong>Email: </strong>
              <a style={{ display: "inline" }} href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
