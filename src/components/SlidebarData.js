import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <AiIcons.AiFillHome />,
    path: '/orders',
    cName: "nav-text"
  },
  {
    title: "Goals",
    path: "/reports",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "My Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Apps",
    path: "/support",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
 
];
