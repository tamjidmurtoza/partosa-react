import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
export default function Layout() {
  return (
    <>
      <Header logoUrl='/images/logo.svg' />
      <Outlet />
      <Footer className="cs_footer" id="contact" />
    </>
  )
}
