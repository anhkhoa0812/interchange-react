import React, { useEffect, useState } from "react";
import Content_TKNT from "./Content_TKNT";
import Content_TCTT from "./Content_TCTT";
import { getDataBlog } from "../../service/APIService";
import { Link } from "react-router-dom";

const Home = () => {
  const [dataPost, setDataPost] = useState([]);
  const getData = async () => {
    let data = await getDataBlog();
    setDataPost(data.data.data);
    console.log("this is data in alo ", dataPost);
  };
  console.log("this is data in App ", dataPost);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="khungtrang1">
      <div className="container">
        <div id="post-1387" className="post_box top">
          <div className="post_content">
            <div className="vc_row wpb_row vc_row-fluid khung11 vc_custom_1690673792736 vc_row-has-fill">
              <div className="wpb_animate_when_almost_visible wpb_appear appear wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner vc_custom_1690673587776">
                  <div className="wpb_wrapper">
                    <div
                      className="ult_dual_button  vc_custom_1690673601003 ult-adjust-bottom-margin to-center  "
                      data-response="on"
                      id="ult_btn_3118839222"
                    >
                      <div
                        id="dualbtn-4292"
                        className="ulitmate_dual_buttons ult-dual-btn3 ult_main_dualbtn "
                        data-bcolor="#333333"
                        data-bhcolor=""
                      >
                        <div className="ult_dualbutton-wrapper btn-inline place-template bt1 ">
                          <a
                            title="Báo giá thiết kế"
                            className="ult_ivan_button round-square with-icon icon-before with-text place-template ult_dual1"
                            style={{
                              marginRight: "0px",
                              backgroundColor: "#dd3333",
                              borderColor: "#333333",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              borderRadius: "25px",
                              width: "320px",
                            }}
                          >
                            <span
                              className="ult-dual-btn-1 Style 2"
                              data-bgcolor="#dd3333"
                              data-bghovercolor="#dd5858"
                              data-icon_color="#333333"
                              data-icon_hover_color="#333333"
                              data-textcolor="#ffffff"
                              data-texthovercolor="#eeeeee"
                              data-iconbgcolor="transperent"
                              data-iconbghovercolor="transperent"
                              data-iconborder="transperent"
                              data-iconhoverborder="transperent"
                            >
                              <span
                                className="icon-simple icon-left1 ult_btn1span ult-dual-btn-no-icon"
                                style={{ paddingLeft: "0px" }}
                              ></span>
                              <span
                                className="text-btn ult-dual-button-title ult-responsive"
                                data-ultimate-target="#dualbtn-4292 .ult-dual-button-title"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:32px;"}'
                                style={{ fontWeight: "bold", color: "#ffffff" }}
                              >
                                BÁO GIÁ GIÁ THIẾT KẾ NỘI THẤT
                              </span>
                            </span>
                          </a>
                          <span
                            className="middle-text"
                            style={{
                              lineHeight: "1.8em",
                              color: "#ffffff",
                              backgroundColor: "#700000",
                              borderColor: "#eeeeee",
                              borderWidth: "1px",
                              borderStyle: "dashed",
                              borderRadius: "150px",
                            }}
                          >
                            <span className="middle-inner">
                              <i className="Defaults-dollar usd"></i>
                            </span>
                          </span>
                        </div>
                        <div className="ult_dualbutton-wrapper btn-inline place-template btn2 ">
                          <a
                            title="Báo giá thi công"
                            className="ult_ivan_button round-square with-icon icon-after with-text place-template ult_dual2"
                            style={{
                              backgroundColor: "#a80000",
                              borderColor: "#333333",
                              borderStyle: "solid",
                              borderWidth: "0px",
                              borderRadius: "25px",
                              width: "320px",
                            }}
                          >
                            <span
                              className="ult-dual-btn-2 Style 2"
                              data-bgcolor="#a80000"
                              data-bghovercolor="#dd4949"
                              data-icon_color="#333333"
                              data-icon_hover_color="#333333"
                              data-textcolor="#ffffff"
                              data-texthovercolor="#eeeeee"
                              data-iconbgcolor="transperent"
                              data-iconbghovercolor="transperent"
                              data-iconborder="transperent"
                              data-iconhoverborder="transperent"
                            >
                              <span
                                className="text-btn ult-dual-button-title"
                                style={{ fontWeight: "bold", color: "#ffffff" }}
                              >
                                BÁO GIÁ THI CÔNG NỘI THẤT
                              </span>
                              <span
                                className="icon-simple icon-right2 ult_btn1span ult-dual-btn-no-icon"
                                style={{ paddingLeft: "0px" }}
                              ></span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
            <Content_TKNT dataPost={dataPost} />
            <div className="vc_row-full-width vc_clearfix"></div>
            <Content_TCTT dataPost={dataPost} />
            <div className="vc_row-full-width vc_clearfix"></div>
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1687851568217"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_raw_code wpb_content_element wpb_raw_html vc_custom_1687849410899">
                      <div className="wpb_wrapper">
                        <div className="section-head process_head b-align-center">
                          <span className="large-title">interchange</span>
                          <h2 className="head-title">QUY TRÌNH TRIỂN KHAI</h2>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="smile_icon_list_wrap ult_info_list_container ult-adjust-bottom-margin mautrang23 ">
                      <ul className="smile_icon_list top circle with_bg">
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-comments-o"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-5259"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-5259 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 1
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-5259 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>
                                Gặp gỡ, khảo sát &amp; tư vấn cho khách hàng
                              </p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-lightbulb-o"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-1697"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-1697 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 2
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-1697 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Lên ý tưởng &amp; concept cho khách hàng</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-clipboard paste"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-8218"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-8218 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 3
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-8218 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Ký hợp đồng thiết kế</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-area-chart"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-6958"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-6958 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 4
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-6958 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>
                                Hoàn thiện thiết kế và bàn giao thiết kế 2D, 3D
                                cho khách hàng
                              </p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-money"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-3791"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-3791 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 5
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-3791 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Báo giá thi công chi tiết theo thiết kế 3D</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                      </ul>
                    </div>
                    <div className="smile_icon_list_wrap ult_info_list_container ult-adjust-bottom-margin mautrang23 ">
                      <ul className="smile_icon_list top circle with_bg">
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-cubes"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-9012"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-9012 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 6
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-9012 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Sản xuất, hoàn thiện khối tại xưởng</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-cogs gears"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-3491"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-3491 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 7
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-3491 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>
                                Thi công, lắp đặt hoàn thiện nội thất tại công
                                trình
                              </p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-paint-brush"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-7379"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-7379 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 8
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-7379 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Hoàn thiện &amp; dọn dẹp vệ sinh</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-building"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-2300"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-2300 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 9
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-2300 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Bàn giao &amp; nghiệm thu công trình.</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                        <li
                          className="icon_list_item"
                          style={{ fontSize: "120px" }}
                        >
                          <div
                            className="icon_list_icon"
                            data-animation=""
                            data-animation-delay="03"
                            style={{
                              fontSize: "40px",
                              borderWidth: "5px",
                              borderStyle: "outset",
                              backgroundColor: "#ffffff",
                              color: "#333333",
                              borderColor: "#c7a17a",
                            }}
                          >
                            <i className="Defaults-shield"></i>
                          </div>
                          <div
                            className="icon_description"
                            id="Info-list-wrap-1459"
                            style={{ fontSize: "40px" }}
                          >
                            <h3
                              className="ult-responsive info-list-heading"
                              data-ultimate-target="#Info-list-wrap-1459 h3"
                              data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                              style={{ fontWeight: "bold", color: "#ffffff" }}
                            >
                              BƯỚC 10
                            </h3>
                            <div
                              className="icon_description_text ult-responsive"
                              data-ultimate-target="#Info-list-wrap-1459 .icon_description_text"
                              data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                            >
                              <p>Bảo Hành 1 năm và Bảo Trì trọn đời.</p>
                            </div>
                          </div>
                          <div
                            className="icon_list_connector"
                            data-animation="fadeInLeft"
                            data-animation-delay="03"
                            style={{
                              borderTopWidth: "1px",
                              borderTopStyle: "dashed",
                              borderColor: "#333333",
                            }}
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
            <div
              className="upb_bg_img"
              data-ultimate-bg="url('./image/wallpaper-design.jpg')"
              data-image-id="id^3305|url^./image/wallpaper-design.jpg|caption^null|alt^null|title^wallpaper-design|description^null"
              data-ultimate-bg-style="vcpb-default"
              data-bg-img-repeat="repeat"
              data-bg-img-size="cover"
              data-bg-img-position=""
              data-parallx_sense="30"
              data-bg-override="0"
              data-bg_img_attach="scroll"
              data-upb-overlay-color=""
              data-upb-bg-animation=""
              data-fadeout=""
              data-bg-animation="left-animation"
              data-bg-animation-type="h"
              data-animation-repeat="repeat"
              data-fadeout-percentage="30"
              data-parallax-content=""
              data-parallax-content-sense="30"
              data-row-effect-mobile-disable="true"
              data-img-parallax-mobile-disable="true"
              data-rtl="false"
              data-custom-vc-row=""
              data-vc="6.1"
              data-is_old_vc=""
              data-theme-support=""
              data-overlay="false"
              data-overlay-color=""
              data-overlay-pattern=""
              data-overlay-pattern-opacity=""
              data-overlay-pattern-size=""
            ></div>
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              data-vc-stretch-content="true"
              className="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1687851885657 vc_row-has-fill vc_row-no-padding"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner vc_custom_1645728023444">
                  <div className="wpb_wrapper">
                    <div className="wpb_raw_code wpb_content_element wpb_raw_html vc_custom_1687851988556">
                      <div className="wpb_wrapper">
                        <div className="sec-title centered">
                          <div className="sec-title">
                            <h2>
                              <a href="" title="Tư vấn thiết kế">
                                <span
                                  className="page-heading-title"
                                  style={{ color: "#fff" }}
                                >
                                  VẬT LIỆU TRANG TRÍ
                                </span>
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="gallery-1"
                      className="gallery galleryid-1 gallery-columns-5 gallery-size-fg-normal fastgallery brick-masonry fg_smartphone_p_col-2 fg_smartphone_l_col-2 fg_tablet_p_col-5 fg_tablet_l_col-5 fg_desktop_medium_col-5 fg_desktop_small_col-2 fg_style2 off  fg_over_image_on"
                    >
                      <Link to="/San_Nhua" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/sannhua-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Sàn nhựa</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/San_Go" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/sango-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Sàn gỗ</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Rem_2_Lop" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/remcua-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Rèm cửa</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Op_Tuong" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/op-pvc-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">
                              Tấm ốp tường PVC
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Da_Tu_Nhien" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/mau-da-tu-nhien-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Đá tự nhiên</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Lam_Nhua" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/lamnhua-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Lam nhựa</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Da_Vicostone" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/danhantaoviscos-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">
                              Đá nhân tạo Vicostone
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Da_Surface" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/danhantao-solid-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">
                              Đá nhân tạo solid surface
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Da_Nhan_Tao" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/danhantao-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Đá nhân tạo</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/Cua" className="fg-gallery-item">
                        <div className="fastgallery-gallery-icon ">
                          <div className="fg_zoom">
                            <img
                              width="450"
                              height="320"
                              src="./image/5-cuanhua-450x320.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              decoding="async"
                              loading="lazy"
                            />
                            <a href="san-nhua.html" target="_blank">
                              <span className="fg-zoom-icon icon-plus"></span>
                            </a>
                          </div>
                          <div className="fg-wp-caption-text fg-gallery-caption">
                            <div className="caption-container">Cửa nhựa</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="fg_clear"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
            <div
              className="upb_color"
              data-bg-override="0"
              data-bg-color="#232323"
              data-fadeout=""
              data-fadeout-percentage="30"
              data-parallax-content=""
              data-parallax-content-sense="30"
              data-row-effect-mobile-disable="true"
              data-img-parallax-mobile-disable="true"
              data-rtl="false"
              data-custom-vc-row=""
              data-vc="6.1"
              data-is_old_vc=""
              data-theme-support=""
              data-overlay="true"
              data-overlay-color="rgba(17,17,17,0.2)"
              data-overlay-pattern="./image/09.png"
              data-overlay-pattern-opacity="0.8"
              data-overlay-pattern-size=""
              data-overlay-pattern-attachment="scroll"
            ></div>
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid khung11 wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1645730114025"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="sec-title centered">
                      <div className="sec-title">
                        <div className="title">CẨM NANG</div>
                        <h2>
                          <a href="" title="Tư vấn thiết kế">
                            <span className="page-heading-title">
                              Tư vấn thiết kế.
                            </span>
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="news-content main-content">
                      <div className="bordertop-news02 ">
                        <article className="featured">
                          <a
                            className="thumb_link"
                            href=""
                            title="BIENHOADECOR THÔNG BÁO NGHỈ TẾT DƯƠNG LỊCH 2024"
                          >
                            <div className="cover">
                              <img
                                width="450"
                                height="320"
                                src="./image/z5021114506617_a980cb76ac365413b7dd4fd6eac1e718-450x320.jpg"
                                className="wp-post-image wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <header>
                            <p className="by">29, tháng 12/23</p>
                            <div className="news">
                              <a
                                href=""
                                rel="bookmark"
                                title="BIENHOADECOR THÔNG BÁO NGHỈ TẾT DƯƠNG LỊCH 2024"
                              >
                                BIENHOADECOR THÔNG BÁO NGHỈ TẾT DƯƠNG LỊCH 2024
                              </a>
                            </div>
                          </header>
                        </article>
                      </div>
                      <div className="bordertop-news02 tright">
                        <article className="featured">
                          <a
                            className="thumb_link"
                            href=""
                            title="TỦ RƯỢU NHÀ PHỐ TIẾT KIỆM KHÔNG GIAN"
                          >
                            <div className="cover">
                              <img
                                width="450"
                                height="320"
                                src="./image/z4950118298844_72ee499b9963b183ac710eddc46251e5-450x320.jpg"
                                className="wp-post-image wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <header>
                            <p className="by">07, tháng 12/23</p>
                            <div className="news">
                              <a
                                href=""
                                rel="bookmark"
                                title="TỦ RƯỢU NHÀ PHỐ TIẾT KIỆM KHÔNG GIAN"
                              >
                                TỦ RƯỢU NHÀ PHỐ TIẾT KIỆM KHÔNG GIAN
                              </a>
                            </div>
                          </header>
                        </article>
                      </div>
                      <div className="bordertop-news02 ">
                        <article className="featured">
                          <a
                            className="thumb_link"
                            href=""
                            title="THIẾT KẾ THI CÔNG HỆ TỦ VÁCH NGĂN TIVI PHÒNG KHÁCH"
                          >
                            <div className="cover">
                              <img
                                width="450"
                                height="320"
                                src="./image/z4900571514586_4a102b83007239dfb0f4ca92c34c776e-450x320.jpg"
                                className="wp-post-image wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <header>
                            <p className="by">21, tháng 11/23</p>
                            <div className="news">
                              <a
                                href=""
                                rel="bookmark"
                                title="THIẾT KẾ THI CÔNG HỆ TỦ VÁCH NGĂN TIVI PHÒNG KHÁCH"
                              >
                                THIẾT KẾ THI CÔNG HỆ TỦ VÁCH NGĂN TIVI PHÒNG
                                KHÁCH
                              </a>
                            </div>
                          </header>
                        </article>
                      </div>
                      <div className="bordertop-news02 tright">
                        <article className="featured">
                          <a
                            className="thumb_link"
                            href=""
                            title="Đá nhân tạo Solid Surface không thấm ố, độ bền cao và là điểm nhấn tinh tế cho nội thất"
                          >
                            <div className="cover">
                              <img
                                width="450"
                                height="320"
                                src="./image/z4830930040147_0200444acfcd0af42952d634e728e703-450x320.jpg"
                                className="wp-post-image wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <header>
                            <p className="by">30, tháng 10/23</p>
                            <div className="news">
                              <a
                                href=""
                                rel="bookmark"
                                title="Đá nhân tạo Solid Surface không thấm ố, độ bền cao và là điểm nhấn tinh tế cho nội thất"
                              >
                                Đá nhân tạo Solid Surface không thấm ố, độ bền
                                cao và là điểm nhấn tinh tế cho nội thất
                              </a>
                            </div>
                          </header>
                        </article>
                      </div>
                      <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
