import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import WriteUp from "./pages/Writeup/Writeup";
import { ColorModeContext, IColorContext, useMode } from "./theme";
import { Box, Theme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect, useState } from "react";
import { LOCALSTORAGE_VARIABLE } from "./util/constants";
import { ILogindata } from "./store/reducers/authSlice";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";

export const getLocalAuth = (): ILogindata => {
  const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
  const authLocal: ILogindata =
    storedAuth !== null ? JSON.parse(storedAuth) : null;
  return authLocal;
};

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as IColorContext}>
      <ThemeProvider theme={theme as Theme}>
        <ToastContainer theme={"light"} />
        <Routes>
          <Route path="/auth" element={<AuthWrraper />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/" element={<ProtectedRouteWrraper />}>
            <Route path="writeup" element={<WriteUp />} />
            <Route path="*" element={<Navigate to="writeup" replace />} />
          </Route>
          <Route path="/*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

const AuthWrraper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken: ILogindata = getLocalAuth();
    if (userToken && userToken.access_token) {
      setIsLoggedIn(false);
      return navigate("/writeup", { replace: true });
    } else setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

const ProtectedRouteWrraper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = getLocalAuth();
    if (!userToken || !userToken.access_token) {
      setIsLoggedIn(false);
      return navigate("/auth/login", { replace: true });
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  useEffect(() => {
    if (location) {
      if (location.pathname === "/") {
        navigate("/writeup");
      }
    }
  }, [location]);

  return (
    <Box
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
    >
      {isLoggedIn && (
        <ProSidebarProvider>
          <SideBar />
        </ProSidebarProvider>
      )}
      {
        <Box className={"content"}>
          <TopBar />
          <Outlet />
        </Box>
      }
    </Box>
  );
};
