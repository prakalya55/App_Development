import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  // {
  //   title: "Dashboard",
  //   icon: <AiIcons.AiFillHome />,
  //   path: '/orders',
  //   cName: "nav-t"
  // },
  {
    title: "Projects",
    path: "/reports",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-t"
  },
  {
    title: "Team Members",
    path: "/add",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-t"
  },
  
  {
    title: "Workflow",
    path: "/assign",
    icon: <IoIcons.IoIosApps />,
    cName: "nav-t"
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <IoIcons.IoIosApps />,
    cName: "nav-t"
  },
 

  {
    title: "LogOut",
    icon: <AiIcons.AiFillHome />,
    path: '/hive',
    cName: "nav-t"
  }
  
];
