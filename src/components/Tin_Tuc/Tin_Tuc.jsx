import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Post from "./Post";
import Subbanner from "../Subbanner/Subbanner";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import { getDataBlog } from "../../service/APIService";
import { useParams } from "react-router-dom";
const Tin_Tuc = () => {
  const [subbanner, setSubbanner] = useState("Tin Tức");
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await getDataBlog();
    setDataPost(data.data.data);
  };
  console.log(dataPost);
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <div className="container">
        <div className="clear"></div>
        <div id="columns" className="columns">
          <Post dataPost={dataPost} />
          <Sidebar />
        </div>
        <div className="clear"></div>
      </div>
      <Footer />
    </>
  );
};
export default Tin_Tuc;
