import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AnimalsPage } from "./ui/pages/animalList/AnimalsPage";
import { CallPage } from './ui/pages/call/callPage';
import { LocationPage } from './ui/pages/location/locationPage';
import Layout from './layout/layout';
import { Global, css } from '@emotion/react'
import { theme } from './styles/theme';
import { LunarPhasePage } from './ui/pages/lunar/lunarPhasePage/lunarPhasePage';
import { LunarVisibilityPage } from './ui/pages/lunar/lunarVisibilityPage/lunarVisibilityPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/main_window",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <CallPage />,
        },
        {
          path: "animals",
          element: <AnimalsPage />,
        },
        {
          path: "locations",
          element: <LocationPage />,
        },
        {
          path: "lunar_phase",
          element: <LunarPhasePage />,
        },
        {
          path: "lunar_visibility",
          element: <LunarVisibilityPage />,
        },
      ]
    },
  ]);

  return <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
}

const root = createRoot(document.getElementById('app'));
      root.render(
        <>
          <Global styles={css`body {
            background-color: ${theme.background};
            color: ${theme.primary};
            margin: 0;
            height: 100%;
          }`}>
          </Global>
          <App />
        </>
      );