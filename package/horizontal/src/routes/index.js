import { lazy } from "react";
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const BlankLayout = lazy(() => import("../layouts/BlankLayout.js"));

var IndexRoutes = [
  { path: "/authentication", name: "Athentication", component: BlankLayout },
  { path: "/", name: "Dashboard", component: FullLayout },
];

export default IndexRoutes;
