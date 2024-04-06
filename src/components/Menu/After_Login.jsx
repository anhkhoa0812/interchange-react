import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const After_Login = ({ data }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    navigate("/Dang_Nhap");
  };
  const navigate = useNavigate();
  return (
    <>
      <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
        <Link to="">{data}</Link>
        <ul className="sub-menu">
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link to="/Du_An">Dự án của bạn</Link>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link onClick={handleLogout} style={{ marginRight: "15px" }}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};
export default After_Login;
