import { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import {
  MdDoubleArrow,
  MdHome,
  MdDelete,
  MdCategory,
  MdAdd,
} from "react-icons/md";
import logo from "../../assets/logo.png";
export default function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <header className="absolute min-h-screen w-1/4 bg-[#FFF8E5] dark:bg-[#221D10] text-black dark:text-white">
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse} className="h-full w-full">
        <SidebarHeader className="">
          <div className="font-bold py-0 px-5">
            {/* small and big change using menucollapse state */}
            {!menuCollapse ? (
              <img src={logo} alt="logo" className="p-4 w-full h-auto" />
            ) : (
              <img src={logo} alt="logo" className="w-full h-auto" />
            )}
          </div>
          <div className="absolute top-0 right-0 z-50" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? (
              <MdDoubleArrow />
            ) : (
              <MdDoubleArrow className="rotate-180" />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<MdHome />} active={true}>
              Home
            </MenuItem>
            <MenuItem icon={<MdDelete />}>Trash</MenuItem>
            <MenuItem icon={<MdCategory />}>Your Category</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <MenuItem icon={<MdAdd />}>Add New Task</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </header>
  );
}
