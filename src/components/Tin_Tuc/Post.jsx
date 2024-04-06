import React, { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { dataPost } = props;
  console.log("this is data post", dataPost);
  return (
    <div id="single">
      {dataPost.map((item, index) => (
        <div className="bantin">
          <div id="post-3741" className="post_box post pcat top">
            <div className="postcat">
              <a className="featured_image_link">
                <Image blogId={item.blogId} />
              </a>
              <h2 className="headline">
                <a rel="bookmark"> {item.blogTitle}</a>
              </h2>
              <span className="post_date" title="2023-12-29">
                {item.postTime}
              </span>
              <div className="mota">
                <Link to="/Detail_Blog" state={{ data: item }} className="xem3">
                  Xem thêm
                </Link>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      ))}
      <div className="clear"></div>
    </div>
  );
};
export default Post;
