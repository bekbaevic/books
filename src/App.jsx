import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Container from "./Components/Container"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import HomePage from "./Pages/HomePage"
import Layout from "./Layout/Layout"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "register",
          element: <SignUp />
        },
        {
          path: "login",
          element: <SignIn />
        }
      ]
    }
  ])
  return (
    <div className="min-h-[100vh] w-full">
      <div className="fixed bg-[#333] w-[1400px] h-[1400px] rotate-45 -z-10 left-[-40%] top-[-80%] rounded-[54px]"></div>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  )
}

export default App
