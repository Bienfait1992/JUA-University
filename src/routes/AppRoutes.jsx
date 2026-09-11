// import { createBrowserRouter } from "react-router-dom";

// import MainLayout from "../shared/components/layout/MainLayout";

// import Home from "../features/landing/pages/Home";
// import About from "../features/university/pages/About";
// import Team from "../features/university/pages/Team";

// import Faculties from "../features/academics/pages/Faculties";
// import Programs from "../features/academics/pages/Programs";
// import TuitionFees from "../features/admissions/pages/TuitionFees";

// import News from "../features/news/pages/News";
// import NewsDetails from "../features/news/pages/NewsDetails";

// import Events from "../features/events/pages/Events";
// import EventDetails from "../features/events/pages/EventDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },

//       {
//         path: "universite",
//         children: [
//           {
//             path: "a-propos",
//             element: <About />,
//           },
//           {
//             path: "equipe",
//             element: <Team />,
//           },
//         ],
//       },

//       {
//         path: "academie",
//         children: [
//           {
//             path: "facultes",
//             element: <Faculties />,
//           },
//           {
//             path: "programmes",
//             element: <Programs />,
//           },
//         ],
//       },

//       {
//         path: "admissions",
//         children: [
//           {
//             path: "frais-academiques",
//             element: <TuitionFees />,
//           },
//         ],
//       },

//       {
//         path: "actualites",
//         children: [
//           {
//             index: true,
//             element: <News />,
//           },
//           {
//             path: ":slug",
//             element: <NewsDetails />,
//           },
//         ],
//       },

//       {
//         path: "evenements",
//         children: [
//           {
//             index: true,
//             element: <Events />,
//           },
//           {
//             path: ":slug",
//             element: <EventDetails />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";

import MaintenanceLayout from "../layouts/MaintenanceLayout";
import MaintenancePage from "../pages/MaintenancePage";

const AppRoutes = createBrowserRouter([
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

export default AppRoutes;
