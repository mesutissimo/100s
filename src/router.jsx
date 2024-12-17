import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import LobbyPage from "./pages/lobby";

const HomePage = React.lazy(() => import("./pages/home"));
const GamePage = React.lazy(() => import("./pages/game"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "game/:sessionId",
        element: (
          <React.Suspense>
            <GamePage />
          </React.Suspense>
        ),
      },
      {
        path: "lobby",
        element: (
          <React.Suspense>
            <LobbyPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </React.StrictMode>
  );
};

export default Router;
