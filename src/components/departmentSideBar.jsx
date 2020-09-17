import React from "react";
import {
  SideBarSection,
  SummaryList,
} from "@baltimorecounty/dotgov-components";

const departmentSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "",
    content: "<p> Quickly report problems or request a service.</p>",
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content: "<a href='tel:311'>311</a>",
  },
  {
    id: 3,
    icon: "fas fa-link",
    heading: "Website:",
    content:
      "<p><a href='https://baltimorecountymd.gov/report-problem#/'>Report a problem</a></p>",
  },
  {
    id: 4,
    icon: "fa-fw fas fa-download",
    heading: "Download",
    content:
      "<p><a href='https://play.google.com/store/apps/details?id=com.citysourced.baltimorecountymd&hl=en'>Google Play</a></p><p><a href='https://itunes.apple.com/us/app/baltcogo/id1200046300'>Apple</a></p>",
  },
];

const departmentSidebar = () => {
  const sideBar = <SummaryList items={departmentSummaryItems} />;

  return (
    <div className="dg_sidebar">
      <SideBarSection title="BALTCO 311">{sideBar}</SideBarSection>
    </div>
  );
};

export default departmentSidebar;
