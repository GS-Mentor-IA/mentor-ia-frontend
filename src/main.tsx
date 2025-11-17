import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";

import App from "./App";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Integrantes from "./pages/Integrantes";
import { TemaProvider } from "./context/ContextoTema";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/integrantes", element: <Integrantes /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TemaProvider>
      <RouterProvider router={router} />
    </TemaProvider>
  </StrictMode>
);
