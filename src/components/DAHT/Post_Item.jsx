import { timers } from "jquery";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Post_Item = ({ dataPost }) => {
  console.log("ttt", dataPost);
  return (
    <>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataPost?.map((item, index) => (
          <SwiperSlide>
            <div className="post_box post duntb item post type-post status-publish format-standard has-post-thumbnail category-du-an-can-ho category-du-an-thiet-ke">
              <div className="duannghiduong2">
                <Link
                  to="/Detail_TKNT"
                  state={{ data: item }}
                  className="thumb_link duntb2"
                >
                  <figure>
                    <Image blogId={item.blogId} />
                  </figure>
                </Link>
                <div className="stext_6">
                  <h3>
                    <a href="" rel="bookmark">
                      {item.blogTitle}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="container">
        <div className="sanpham24 sanpham2422">
          {dataPost?.map((item, index) => (
            <div className="post_box post duntb item post type-post status-publish format-standard has-post-thumbnail category-du-an-can-ho category-du-an-thiet-ke">
              <div className="duannghiduong2">
                <Link
                  to="/Detail_TKNT"
                  state={{ data: item }}
                  className="thumb_link duntb2"
                >
                  <figure>
                    <Image blogId={item.blogId} />
                  </figure>
                </Link>
                <div className="stext_6">
                  <h3>
                    <a href="" rel="bookmark">
                      {item.blogTitle}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
          <div className="clear"></div>
          <div className="phantrang">
            <div className="wp-pagenavi" role="navigation">
              <span className="pages">Trang 1 trên 2</span>
              <span aria-current="page" className="current">
                1
              </span>
              <a className="page larger" title="Page 2" href="">
                2
              </a>
              <a
                className="nextpostslink"
                rel="next"
                aria-label="Trang sau"
                href=""
              >
                »
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post_Item;
