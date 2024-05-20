import AccountingIcon from "./icons/AccountingIcon";
import AdminIcon from "./icons/AdminIcon";
import AgentsIcon from "./icons/AgentsIcon";
import BillingIcon from "./icons/BillingIcon";
import CarrierIcon from "./icons/CarrierIcon";
import LogoutIcon from "./icons/LogoutIcon";
import ReportingIcon from "./icons/ReportingIcon";
import RoutingIcon from "./icons/RoutingIcon";

const size = 40;
export const navigation = [
  {
    name: "Accounting",
    icon: <AccountingIcon size={size} />,
    link: "/accounting",
    children: [
      {
        name: "Account Dashboard",
        link: "/account-dashboard",
      },
      {
        name: "Account Rate Deck",
        link: "/account-rate-deck",
      },
      {
        name: "Account Hosts",
        link: "/account-hosts",
      },
      {
        name: "Suspend Limits",
        link: "/suspend-limits",
      },
      {
        name: "Input Value",
        link: "/input-value",
      },
    ],
  },
  {
    name: "Carriers",
    icon: <CarrierIcon size={size} />,
    link: "/carriers",
  },
  {
    name: "Routing",
    icon: <RoutingIcon size={size} />,
    link: "/routing",
  },
  {
    name: "Agents",
    icon: <AgentsIcon size={size} />,
    link: "/agents",
  },
  {
    name: "Billing",
    icon: <BillingIcon size={size} />,
    link: "/billing",
  },
  {
    name: "Reporting",
    icon: <ReportingIcon size={size} />,
    link: "/reporting",
  },
  {
    name: "Admin",
    icon: <AdminIcon size={size} />,
    link: "/admin",
  },
  // {
  //   name: "Logout",
  //   icon: <LogoutIcon size={size} />,
  //   link: "/logout",
  // },
];
