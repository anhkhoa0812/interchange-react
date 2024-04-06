import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Dang_Nhap_Body from "./Dang_Nhap_Body";
import Subbanner from "../Subbanner/Subbanner";

const Dang_Nhap = () => {
  const [subbanner, setSubbanner] = useState("Đăng Nhập");
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <Dang_Nhap_Body />
      <Footer />
    </>
  );
};
export default Dang_Nhap;
