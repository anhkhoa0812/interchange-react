import React from "react";

const Subbanner = (props) => {
  const { subbanner } = props;
  console.log("sb", subbanner);
  return (
    <div className="bigbread subbanner">
      <div className="container">
        <div className="caption">
          <h1 className="archive_title headline" style={{ color: "#fff" }}>
            {subbanner}
          </h1>
        </div>
        <div id="breadcrumbs">
          <ul itemScope itemType="">
            <li itemProp="itemListElement" itemScope itemType="">
              <a itemProp="item" href="" title="Biên Hòa Decor">
                Trang chủ
              </a>{" "}
              »
            </li>
            <li itemProp="itemListElement" itemScope itemType="">
              <a itemProp="item" href="" title="View all posts in Dự án căn hộ">
                <span itemProp="title">{subbanner}</span>
              </a>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subbanner;
