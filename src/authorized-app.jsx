import { useRoutes } from "react-router-dom";

import { Home } from "./pages/home.jsx";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";

export const AuthorizedApp = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    
  ]);

  return (
    <>
      <Header />
        <div>
          {routes}
        </div>
      <Footer />
    </>
  );
}
