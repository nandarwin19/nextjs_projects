import React from "react";
import SidebarHeader from "./SidebarHeader";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <SidebarHeader />
        <NavLinks />
      </div>
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
