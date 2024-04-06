import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Subbanner from "../Subbanner/Subbanner";

const Gioi_Thieu = () => {
  const [subbanner, setSubbanner] = useState("Giới Thiệu");
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <div className="khungtrang1">
        <div classNameName="container">
          <div
            id="post-2"
            className="post_box top"
            style={{ marginTop: "50px" }}
          >
            <div className="post_content">
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1688198413112 wpb_start_animation animated"
                style={{
                  position: "relative",
                  left: "-159.6px",
                  boxSizing: "border-box",
                  width: "1519px",
                  paddingLeft: "159.6px",
                  paddingRight: "159.4px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner vc_custom_1645728023444">
                    <div className="wpb_wrapper">
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <div className="sec-title">
                            <div className="title">GIỚI THIỆU VỀ</div>
                            <h2>
                              <a title="Biên Hoà Decor">
                                <span className="page-heading-title">
                                  INTERCHANGE
                                </span>
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_text_column wpb_content_element  vc_custom_1688198402841">
                        <div className="wpb_wrapper">
                          <p style={{ textAlign: "justify" }}>
                            <strong>INTERCHANGE</strong> là đơn vị chuyên tư vấn
                            thiết kế và thi công nội thất chuyên nghiệp tại Biên
                            Hòa Đồng Nai và các tỉnh phía nam như Hồ Chí Minh,
                            Bình Dương, Long An, Bà Rịa Vũng Tàu, Bình Thuận,
                            Ninh Thuận.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix"></div>
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1645802317884">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element  vc_custom_1688197853543 khung12">
                        <div className="wpb_wrapper">
                          <p>
                            Bạn đang muốn xây mới hay trang trí cải tạo nội thất
                            cho căn nhà – văn phòng – shop của bạn?
                          </p>
                          <p>Bạn tìm một công ty thiết kế nội thất uy tín?</p>
                          <p>
                            Hãy liên hệ và trải nghiệm với dịch vụ của{" "}
                            <strong>INTERCHANGE</strong>
                          </p>
                          <p>
                            <strong>INTERCHANGE</strong> chỉ làm những việc mình
                            giỏi nhất và quy tụ những đối tác tốt nhất được sàng
                            lọc tỉ mỉ qua nhiều năm.
                          </p>
                          <p>
                            <a>INTERCHANGE</a> với nhiều năm kinh nghiệm cam kết
                            mang đến cho bạn và gia đình không chỉ là những
                            <em>
                              {" "}
                              “
                              <strong>
                                SẢN PHẨM – CHẤT LƯỢNG ĐẢM BẢO mà còn là CHI PHÍ
                                HỢP LÝ NHẤT”
                              </strong>
                            </em>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_rounded  vc_box_border_grey">
                            <img
                              width="619"
                              height="450"
                              src="./image/story-1.jpg"
                              className="vc_single_image-img attachment-medium"
                              alt=""
                              decoding="async"
                              loading="lazy"
                              srcset="./image/story-1.jpg 619w, ./image/story-1-500x363.jpg 500w"
                              sizes="(max-width: 619px) 100vw, 619px"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1599586714473">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_rounded  vc_box_border_grey">
                            <img
                              width="619"
                              height="450"
                              src="./image/story-2.jpg"
                              className="vc_single_image-img attachment-medium"
                              alt=""
                              decoding="async"
                              loading="lazy"
                              srcset="./image/story-2.jpg 619w, ./image/story-2-500x363.jpg 500w"
                              sizes="(max-width: 619px) 100vw, 619px"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element  vc_custom_1688198440533 khung12">
                        <div className="wpb_wrapper">
                          <p>
                            Đến với INTERCHANGE Quý Khách Hàng sẽ được trải
                            nghiệm:
                          </p>
                          <p>
                            <img
                              draggable="false"
                              role="img"
                              className="emoji"
                              alt=""
                              src="./image/1f538.svg"
                            />{" "}
                            Tư vấn tận tình, chu đáo, tỉ mỉ, luôn lắng nghe để
                            nắm bắt được những yêu cầu và những vấn đề đang cần
                            giải quyết&nbsp; sau đó chúng tôi sẽ đưa ra phương
                            án giải quyết tối ưu và tiết kiệm nhất cho Khách
                            Hàng.
                          </p>
                          <p>
                            <img
                              draggable="false"
                              role="img"
                              className="emoji"
                              alt="🔸"
                              src="./image/1f538.svg"
                            />{" "}
                            Quy trình làm việc khoa học rõ ràng, nhiều ý tưởng
                            mới lạ, độc đáo.
                          </p>
                          <p>
                            <img
                              draggable="false"
                              role="img"
                              className="emoji"
                              alt="🔸"
                              src="./image/1f538.svg"
                            />{" "}
                            Lên phương án 3D cụ thể, tham khảo ý kiến khách
                            hàng, chỉnh sửa thận trọng theo ý muốn của khách
                          </p>
                          <p>
                            <img
                              draggable="false"
                              role="img"
                              className="emoji"
                              alt="🔸"
                              src="./image/1f538.svg"
                            />{" "}
                            Hoàn tất dự án đúng tiến độ cam kết, tiết kiệm chi
                            phí tối thiểu cho gia chủ
                          </p>
                          <p>
                            <img
                              draggable="false"
                              role="img"
                              className="emoji"
                              alt="🔸"
                              src="./image/1f538.svg"
                            />{" "}
                            Báo giá nhanh cụ thể&nbsp; và chi tiết tránh phát
                            sinh cho khách hàng. Đặc biệt giá rất cạnh tranh và
                            có nhiều chương trình khuyến mãi.
                          </p>
                          <p>
                            DỊCH VỤ BẢO HÀNH BẢO TRÌ ĐƯỢC DUY TRÌ CHUYÊN NGHIỆP,
                            NHANH CHÓNG. INTERCHANGE CUNG CẤP CHO KHÁCH HÀNG
                            DỊCH VỤ:
                            <span style={{ color: "#ffcc99" }}>
                              <strong>
                                {" "}
                                1 NĂM BẢO HÀNH VÀ BẢO TRÌ TRỌN ĐỜI
                              </strong>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1653501390161 vc_row-has-fill ult-vc-hide-row wpb_start_animation animated"
                style={{
                  position: "relative",
                  left: "-159.6px",
                  boxSizing: "border-box",
                  width: "1519px",
                  paddingLeft: "159.6px",
                  paddingRight: "159.4px",
                }}
                data-rtl="false"
                data-row-effect-mobile-disable="true"
                data-img-parallax-mobile-disable="true"
              >
                <div
                  className="upb_row_bg vcpb-default"
                  data-upb_br_animation=""
                  data-parallax_sense="30"
                  data-bg-override="0"
                  data-bg-animation="left-animation"
                  data-bg-animation-type="h"
                  data-animation-repeat="repeat"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    backgroundImage: "url(./image/22-3-1.jpg)",
                    backgroundAttachment: "scroll",
                    minWidth: "1519px",
                    left: "0px",
                    width: "1518px",
                  }}
                ></div>
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <div className="section-head process_head b-align-center">
                            <span className="large-title">INTERCHANGE</span>
                            <h2 className="head-title">MỤC TIÊU</h2>
                            <br></br>
                            <p>
                              Với mục tiêu mang đến cho khách hàng những không
                              gian sống hoàn hảo cùng khả năng sáng tạo không
                              giới hạn, BienHoaDecor.com luôn không ngừng phát
                              triển và ngày càng khẳng định vị thế tiên phong
                              của mình trên thị trường nội thất tại:
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                <div className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-size-xl vc_icon_element-style- vc_icon_element-background-color-grey">
                                  <i
                                    className="vc_icon_element-icon fa fa-fw fa-diamond"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <div
                                    className=""
                                    style={{ textAlign: "center" }}
                                  >
                                    <span style={{ color: "#ffffff" }}>
                                      <strong>
                                        <span className="elementor-icon-box-title">
                                          <span style={{ fontSize: "18pt" }}>
                                            {" "}
                                            CHUYÊN NGHIỆP
                                          </span>
                                        </span>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                <div className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-size-xl vc_icon_element-style- vc_icon_element-background-color-grey">
                                  <span className="vc_icon_element-icon fa fa-fw fa-list"></span>
                                </div>
                              </div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <div style={{ textAlign: "center" }}>
                                    <span style={{ color: "#ffffff" }}>
                                      <strong>
                                        <span className="elementor-icon-box-title">
                                          <span style={{ fontSize: "18pt" }}>
                                            TRỌN GÓI{" "}
                                          </span>{" "}
                                        </span>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                <div className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-size-xl vc_icon_element-style- vc_icon_element-background-color-grey">
                                  <span className="vc_icon_element-icon fa fa-fw fa-check-circle-o"></span>
                                </div>
                              </div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <div
                                    className=""
                                    style={{ textAlign: "center" }}
                                  >
                                    <span style={{ color: "#ffffff" }}>
                                      <strong>
                                        <span className="elementor-icon-box-title">
                                          <span style={{ fontSize: "18pt" }}>
                                            HIỆU QUẢ{" "}
                                          </span>{" "}
                                        </span>
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix"></div>
              <div className="vc_row wpb_row vc_row-fluid khung11 vc_custom_1687285514282">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html vc_custom_1687852428976">
                        <div className="wpb_wrapper">
                          <div className="sec-title">
                            <div className="inner-title">
                              <div className="title">QUY TRÌNH</div>
                              <h2>10 Bước để triển khai.</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="smile_icon_list_wrap ult_info_list_container ult-adjust-bottom-margin  ">
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-comments-o"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-9536"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-9536 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 1
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-9536 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>
                                  Gặp gỡ, khảo sát &amp; tư vấn cho khách hàng
                                </p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-lightbulb-o"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-6615"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-6615 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 2
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-6615 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>Lên ý tưởng &amp; concept cho khách hàng</p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-clipboard paste"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-7056"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-7056 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 3
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-7056 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>Ký hợp đồng thiết kế</p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-area-chart"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-8573"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-8573 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 4
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-8573 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>
                                  Hoàn thiện thiết kế và bàn giao thiết kế 2D,
                                  3D cho khách hàng
                                </p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-money"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-6750"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-6750 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 5
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-6750 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>
                                  Báo giá thi công chi tiết theo thiết kế 3D
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="vc_row wpb_row vc_row-fluid khung11 vc_custom_1687285751522 ult-vc-hide-row vc_row-has-fill"
                data-rtl="false"
                data-row-effect-mobile-disable="true"
                style={{ position: "relative" }}
              >
                <div
                  className="ult-vc-seperator top_seperator ult-xlarge-triangle uvc-seperator-8782327739274"
                  data-full-width="true"
                  data-border="undefined"
                  data-border-width="undefined"
                >
                  <div className="ult-main-seperator-inner"></div>
                  <div className="separator-icon">
                    <div className="ult-just-icon-wrapper  ">
                      <div
                        className="align-icon"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="aio-icon none "
                          style={{
                            color: "#c7a17a",
                            fontSize: "20px",
                            display: "inline-block",
                          }}
                        >
                          <i className="Defaults-arrow-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="upb_row_bg"
                  data-bg-override="0"
                  style={{ minWidth: "1200px", left: "0px", width: "1200px" }}
                ></div>
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="smile_icon_list_wrap ult_info_list_container ult-adjust-bottom-margin  ">
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-cubes"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-9412"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-9412 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 6
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-9412 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>Sản xuất, hoàn thiện khối tại xưởng</p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-cogs gears"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-5043"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-5043 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 7
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-5043 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>
                                  Thi công, lắp đặt hoàn thiện nội thất tại công
                                  trình
                                </p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-paint-brush"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-9132"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-9132 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 8
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-9132 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>Hoàn thiện &amp; dọn dẹp vệ sinh</p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-building"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-5959"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-5959 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 9
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-5959 .icon_description_text"
                                data-responsive-json-new='{"font-size":"desktop:14px;","line-height":"desktop:18px;"}'
                              >
                                <p>Bàn giao &amp; nghiệm thu công trình.</p>
                              </div>
                            </div>
                            <div
                              className="icon_list_connector animated fadeInLeft delay-03"
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
                                background: "#ffffff",
                                color: "#333333",
                                borderColor: "#c7a17a",
                              }}
                            >
                              <i className="Defaults-shield"></i>
                            </div>
                            <div
                              className="icon_description"
                              id="Info-list-wrap-1830"
                              style={{ fontSize: "40px" }}
                            >
                              <h3
                                className="ult-responsive info-list-heading"
                                data-ultimate-target="#Info-list-wrap-1830 h3"
                                data-responsive-json-new='{"font-size":"desktop:16px;","line-height":"desktop:24px;"}'
                                style={{ fontWeight: "bold" }}
                              >
                                BƯỚC 10
                              </h3>
                              <div
                                className="icon_description_text ult-responsive"
                                data-ultimate-target="#Info-list-wrap-1830 .icon_description_text"
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gioi_Thieu;
