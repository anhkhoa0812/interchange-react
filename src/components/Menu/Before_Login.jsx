import { Link } from "react-router-dom";

const Before_Login = () => {
  return (
    <>
      <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
        <Link to="">TÀI KHOẢN</Link>
        <ul className="sub-menu">
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link to="/Dang_Nhap">Đăng nhập </Link>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link to="/Dang_Ky" style={{ marginRight: "15px" }}>
              Đăng ký{" "}
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};
export default Before_Login;
