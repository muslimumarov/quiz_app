import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [{
        index: true,
        element: <Home/>
      },
    {
      path: "quiz/:title",
      element: <Quiz/>
    }]
    }
  ])

  return (
   <RouterProvider router={route}/>
  )
}

export default App
