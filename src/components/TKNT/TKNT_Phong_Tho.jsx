import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Subbanner from "../Subbanner/Subbanner";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Post_Item from "./Post_Item";
import { getDataBlog } from "../../service/APIService";

const TKNT_Phong_Tho = () => {
  const [subbanner, setSubbanner] = useState("Phòng thờ");
  const [dataPost, setDataPost] = useState([]);
  const getData = async () => {
    console.log("alo");
    let data = await getDataBlog();
    setDataPost(data.data.data);
    console.log("this is data in alo ", dataPost);
  };
  console.log("this is aaa ", dataPost);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <Post_Item dataPost={dataPost} />
      <Footer />
    </>
  );
};
export default TKNT_Phong_Tho;
