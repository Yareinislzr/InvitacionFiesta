import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Invi  from "./Invi";
import Nombre from "./Nombre";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
       <div className="home">
       <div>
       <Nombre />
        <Invi />
       </div>
        <div className="imagen"><img className="foto" src="https://veiling.com.br/wp-content/uploads/2021/09/MACO-GYPSOPHILA-1-1-scaled.jpg" /></div>
       </div>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
