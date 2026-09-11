import { createBrowserRouter } from "react-router-dom";

import MaintenanceLayout from "../layouts/MaintenanceLayout";
import MaintenancePage from "../pages/MaintenancePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MaintenanceLayout />,
    children: [
      {
        index: true,
        element: <MaintenancePage />,
      },
    ],
  },
]);

export default router;
