import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ title, src, Icon }) => {
  return (
    <div className="sidebarItem">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarItem;
