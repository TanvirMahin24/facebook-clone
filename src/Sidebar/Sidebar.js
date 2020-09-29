import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
//Icons
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem
        src="https://tanvirmahin24.github.io/images/Mahin.png"
        title="Tanvir Mahin"
      />
      <SidebarItem
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarItem title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarItem title="Friends" Icon={PeopleIcon} />
      <SidebarItem title="Messenger" Icon={ChatIcon} />
      <SidebarItem title="Marcketplace" Icon={StorefrontIcon} />
      <SidebarItem title="Videos" Icon={VideoLibraryIcon} />
      <SidebarItem title="Marcketplace" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
};

export default Sidebar;
