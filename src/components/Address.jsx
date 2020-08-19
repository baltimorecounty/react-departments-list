import React from "react";

const Address = ({ address: street, city, zip }) => {
  const newAddress = `${street} ${city}, Maryland, ${zip}`;
  const cityStateZip = `${city}, Maryland, ${zip}`;

  return street ? (
    <div className="dg_department_address">
      <strong>Address: </strong>
      <a
        style={{ display: "inline" }}
        href={`https://www.google.com/maps/search/?api=1&query=${street} ${cityStateZip}`}
      >
        {` ${newAddress}`}
      </a>
    </div>
  ) : null;
};

export default Address;
