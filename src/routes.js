import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdLogout,
  MdOutlineShoppingCart,
  MdLogin,
  MdAdminPanelSettings,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import SignIn from "views/auth/signIn/index.jsx";
import SignUp from "views/auth/signUp/index.jsx";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    role: "all",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Send Request",
    layout: "/admin",
    path: "/send-request",
    role: "Employee",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Approve Request",
    layout: "/admin",
    role: "Admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/approve-request",
    component: DataTables,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   role: "all",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Signin",
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <Icon as={MdLogin} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
    hide: true
  },
  {
    name: "Sign up",
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <Icon as={MdLock} width='16px' height='16px' color='inherit' />
    ),
    component: SignUp,
    hide: true
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdAdminPanelSettings} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export const Logout = [
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-out",
    icon: (
      <Icon as={MdLogout} width='16px' height='16px' color='inherit' />
    ),
    component: SignIn,
  }
];
export default routes;
