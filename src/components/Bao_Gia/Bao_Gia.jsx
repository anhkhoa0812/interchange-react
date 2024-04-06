import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Body from "./Body";
import "./bao-gia-css/styles.min.css";
import "./bao-gia-css/side-bar.css";
import "./bao-gia-css/table-for-list.css"
import "./bao-gia-css/button.css"
import "./bao-gia-css/form.css"
import "./bao-gia-css/content.css"
import "./bao-gia-css/pagination.css"
import "./bao-gia-css/filter-bar.css"

const Bao_Gia = () => {
  return (
    <>
      <Header />
      <Menu />
      <Body />
      <Footer />
    </>
  );
};
export default Bao_Gia;
