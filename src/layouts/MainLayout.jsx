import { Outlet } from "react-router-dom";
import Header from "../components/header_and_footer/header.jsx";
import Footer from "../components/header_and_footer/Footer.jsx";

const MainLayout = () => {
  return (
    < >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
