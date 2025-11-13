import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";

import App from "./App";
import Error from "./routes/Error";
import Home from "./routes/Home";
import { TemaProvider } from "./context/ContextoTema";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [{ path: "/", element: <Home /> }],
    },
  ],
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TemaProvider>
      <RouterProvider router={router} />
    </TemaProvider>
  </StrictMode>
);
