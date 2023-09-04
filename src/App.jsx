import React from "react";
import Nombre from "./Nombre";
import Invi from "./Invi";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nombre />
        <Invi />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
