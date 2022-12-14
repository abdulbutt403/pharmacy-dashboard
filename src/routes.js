import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import History from "layouts/history";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Verify from "layouts/authentication/verify-up";
import Icon from "@mui/material/Icon";
import Pharmacies from "layouts/Pharmacies";
import AddForm from "layouts/AddForm";
import EditProfile from "layouts/EditProfile";
import Prescripted from "layouts/Prescripted";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Current Orders",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Order history",
    margin: false,
    key: "order-history",
    icon: <Icon fontSize="small">Order History</Icon>,
    route: "/order-history",
    component: <History />,
  },
  {
    type: "collapse",
    name: "Medicines",
    key: "medicines",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/medicines",
    component: <Pharmacies />,
  },
  {
    type: "collapse",
    name: "Add Medcine",
    key: "add_medicines",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/form",
    component: <AddForm />,
  },
  {
    type: "collapse",
    name: "Edit Profile",
    key: "edit_profile",
    icon: <Icon fontSize="small">Edit</Icon>,
    route: "/edit_profile",
    component: <EditProfile />,
  },
  {
    type: "collapse",
    name: "Prescripted Orders",
    key: "prescripted",
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/prescripted",
    component: <Prescripted />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Verify User",
    margin: false,
    key: "verify-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/verify",
    component: <Verify />,
  },
];

export default routes;
