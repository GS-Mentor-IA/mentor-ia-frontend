import './globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import ThemeProvider from './types/Tema.tsx' 

const router = createBrowserRouter([{
  path:"/", 
  element: <App/>, 
  errorElement: <Error/>, 
  children:[
    {index: true, element: <Home/>}, 
  ]
}])

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);