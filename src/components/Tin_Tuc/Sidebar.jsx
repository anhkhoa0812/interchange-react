import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [Data, setData] = useState([
    { name: "Tủ bếp", link: "/DAHT_Tu_Bep" },
    { name: "Phòng ngủ", link: "/DAHT_Phong_Ngu" },
    { name: "Phòng khách", link: "/DAHT_Phong_Khach" },
    { name: "Phòng thờ", link: "/DAHT_Phong_Tho" },
    { name: "Phòng giải trí", link: "/DAHT_Phong_Giai_Tri" },
  ]);
  return (
    <>
      <div className="duannoibat2">
        <div className="main-title-2 main-title-22">
          <h2>
            <span>DỰ ÁN</span> ĐÃ THỰC HIỆN
          </h2>
        </div>
        {Data.map((item, index) => (
          <div classNameName="ke22" key={index}>
            <Link to={item.link} title={item.name}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Sidebar;
