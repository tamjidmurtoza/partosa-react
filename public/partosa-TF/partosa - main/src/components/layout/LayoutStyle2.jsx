import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import FooterStyle2 from "../footer/FooterStyle2";

export default function LayoutStyle2() {
  return (
    <>
      <Header logoUrl='/images/logo.svg'/>
      <Outlet />
      <FooterStyle2 className="cs_footer cs_ternary_bg text-center" id="contact" />
    </>
  )
}
