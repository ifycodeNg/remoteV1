import { useRoutes } from "react-router-dom";
import { Login } from "./pages/login";
import { NotFound } from "./pages/404.jsx";
import { Register } from "./pages/register";
// import { ForgotPassword } from "./pages/ForgotPassword";
// import { ResetPassword } from "./pages/ResetPassword";

export const UnauthorizedApp = () => {
  const routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <>
          { routes }
      </>
    </>
  );
}