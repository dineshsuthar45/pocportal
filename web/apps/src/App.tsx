import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Unauthorize from "./pages/unAuthorize";
import SideBar from "./pages/sideBar";
import WriteUp from "./pages/Writeup/Writeup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/writeup/*",
    element: <WriteUp />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorize />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

const App = () => {
  return (
    <>
      {/* <SideBar /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
