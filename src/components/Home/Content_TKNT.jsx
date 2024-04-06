import React, { useEffect, useState } from "react";
import { getDataBlog } from "../../service/APIService";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "./Image";
import { Link } from "react-router-dom";

const Content_TKNT = (props) => {
  const { dataPost } = props;
  console.log("this is ccc", dataPost);
  return (
    <>
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="vc_row wpb_row vc_row-fluid khung11 vc_custom_1645728633604"
      >
        <div className="wpb_animate_when_almost_visible wpb_appear appear wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div class="main_title">
                <div class="cleft">
                  <h2>
                    <a href="" title="Thiết Kế 3D">
                      <span class="page-heading-title">Tin Tức</span>
                    </a>
                  </h2>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div className="clear"></div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataPost.map((item, index) => (
                <SwiperSlide>
                  <div className="item anh222">
                    <Link
                      to="/Detail_Home"
                      state={{ data: item }}
                      style={{ paddingBottom: "2em" }}
                      className="post duntb"
                    >
                      <a className="thumb_link duntb2" href="" title="alo">
                        <Image blogId={item.blogId} />
                      </a>
                      <div className="stext_6">
                        <h3>
                          <a href="" rel="bookmark">
                            {item.blogTitle}
                          </a>
                        </h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div class="clear"></div>
            <div class="clear"></div>
            <div class="wpb_text_column wpb_content_element  vc_custom_1688200135120">
              <div class="wpb_wrapper"></div>
            </div>
            <div class="vc_btn3-container vc_btn3-center vc_custom_1688199835100">
              <Link
                class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                to="/Tin_Tuc"
              >
                XEM THÊM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content_TKNT;
