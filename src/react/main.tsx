import { createRoot } from 'react-dom/client';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { AnimalsPage } from "./animalList/AnimalsPage";
import { LocationPage } from './location/locationPage';
import { Home } from './home/home';
import Layout from './layout/layout';
import { Global, css } from '@emotion/react'
import { theme } from './styles/theme';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/main_window",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "animals",
          element: <AnimalsPage />,
        },
        {
          path: "locations",
          element: <LocationPage />,
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
          <Global styles={{'body': theme}}></Global>
          <Global styles={css`body {
            margin: 0;
            height: 100%;
          }`}>
          </Global>
          <App />
        </>
      );