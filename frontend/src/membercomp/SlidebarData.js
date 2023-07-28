import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Task",
    icon: <AiIcons.AiFillHome />,
    path: '/todo',
    cName: "nav-t"
  },
  
  {
    title: "Projects",
    path: "/reports1",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-t"
  },
  {
    title: "Team  ",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-t"
  },
  {
    title: "Message",
    path: "/chat",
    icon: <IoIcons.IoIosChatbubbles />,
    cName: "nav-t"
  },
  {
    title: "Task Assigned",
    path: "/memh",
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
