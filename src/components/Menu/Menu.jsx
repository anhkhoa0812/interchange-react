import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import After_Login from "./After_Login";
import Before_Login from "./Before_Login";
import { getProduct } from "../../service/APIService";
import { ToastContainer, toast } from "react-toastify";

const Menu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [userId, setUserID] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setUserID(localStorage.getItem("userID"));
    setName(localStorage.getItem("name"));
    setLoggedIn(!!token);
    getDataProduct();
  }, []);
  const getDataProduct = async () => {
    let data = await getProduct();
    setDataProduct(data.data.data);
  };
  console.log("a", dataProduct);

  return (
    <div className="bigmenu">
      <div className="container">
        <div className="widget widget_nav_menu menuchinh" id="nav_menu-2">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home">
                <a href="/Home">Trang chủ</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/Gioi_Thieu">Giới thiệu</Link>
              </li>

              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <a>Thiết Kế Nội Thất</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_ALL">Tất cả thiết kế</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_Tu_Bep">Tủ bếp</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_Phong_ngu">Phòng ngủ</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_Phong_Khach">Phòng khách</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_Phong_Tho">Phòng thờ</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/TKNT_Phong_Gia_Tri">Phòng giải trí</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <a>Dự Án Hoàn Thiện</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_ALL">Tất cả dự án</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_Tu_Bep">Tủ bếp</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_Phong_Ngu">Phòng ngủ</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_Phong_Khach">Phòng khách</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_Phong_Tho">Phòng thờ</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to="/DAHT_Phong_Giai_Tri">Phòng giải trí</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <Link to="">Sản phẩm</Link>
                <ul className="sub-menu">
                  {dataProduct?.map((items) => (
                    <li className="menu-item menu-item-type-post_type menu-item-object-post">
                      <Link
                        onClick={() => {
                          console.log("b", items.proId);
                        }}
                        to={{
                          pathname: "/Product",
                        }}
                        state={{ dataPro: items }}
                      >
                        {items.proName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                {loggedIn ? (
                  <a href={`http://localhost:8080/bao-gia/${userId}`}>
                    Báo giá
                  </a>
                ) : (
                  <Link
                    to="/Dang_Nhap"
                    onClick={() => {
                      toast.warn(
                        "Vui lòng đăng nhập trước khi đăng ký báo giá"
                      );
                    }}
                  >
                    Báo giá
                  </Link>
                )}
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                <Link to="/Tin_Tuc">Tin tức</Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/Tu_Van">Tư vấn</Link>
              </li>
              {loggedIn ? <After_Login data={name} /> : <Before_Login />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
