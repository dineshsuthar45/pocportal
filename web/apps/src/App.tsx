import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Unauthorize from "./pages/unAuthorize";
import WriteUp from "./pages/Writeup/Writeup";
import { ColorModeContext, IColorContext, useMode } from "./theme";
import { Theme, ThemeProvider } from "@mui/material";

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
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as IColorContext}>
      <ThemeProvider theme={theme as Theme}>
        {/* <SideBar /> */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
