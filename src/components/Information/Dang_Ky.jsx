import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Dang_Ky_Body from "./Dang_Ky_Body";
import Subbanner from "../Subbanner/Subbanner";

const Dang_Ky = () => {
  const [subbanner, setSubbanner] = useState("Đăng ký");
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <Dang_Ky_Body />
      <Footer />
    </>
  );
};
export default Dang_Ky;
