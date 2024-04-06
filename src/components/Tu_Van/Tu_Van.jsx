import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Subbanner from "../Subbanner/Subbanner";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LienHe = () => {
  const [subbanner, setSubbanner] = useState("Tư Vấn");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [loaiPhong, setLoaiPhong] = useState("");
  const [yeuCau, setYeuCau] = useState("");
  console.log("dit mia ", loaiPhong, yeuCau);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);
  }, []);
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <div className="khungtrang1">
        <div className="container" style={{ marginTop: "30px" }}>
          <div id="post-88" className="post_box top">
            <div className="post_content">
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1599629333435">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div
                        id="ultimate-heading-921865b67d315d601"
                        className="uvc-heading ult-adjust-bottom-margin ultimate-heading-921865b67d315d601 uvc-7573 "
                        data-hspacer="line_only"
                        data-halign="left"
                        style={{ textAlign: "left" }}
                      >
                        <div
                          className="uvc-main-heading ult-responsive"
                          data-ultimate-target=".uvc-heading.ultimate-heading-921865b67d315d601 h3"
                          data-responsive-json-new='{"font-size":"","line-height":""}'
                        >
                          <h3 style={{ fontWeight: "normal" }}>
                            KIẾN TRÚC NỘI THẤT INTERCHANGE
                          </h3>
                        </div>
                        <div
                          className="uvc-heading-spacer line_only"
                          style={{
                            marginTop: "7px",
                            marginBottom: "12px",
                            height: "2px",
                          }}
                        >
                          <span
                            className="uvc-headings-line"
                            style={{
                              borderStyle: "solid",
                              borderBottomWidth: "2px",
                              borderColor: "#2D99AE",
                              width: "50px",
                              float: "left",
                            }}
                          ></span>
                        </div>
                      </div>
                      <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                          <p>
                            <strong>Office &amp; Showroom : </strong>Nhà văn hóa
                            sinh viên, Dĩ An, Bình Dương
                          </p>
                          <p>
                            <strong>Nhà xưởng:</strong> Đại học FPT campus HCM,
                            Khu công nghệ cao, Thủ Đức
                          </p>
                          <div className="textwidget">
                            <p>
                              <strong>Hotline</strong> :{" "}
                              <a href="tel:0703742715">070 374 2715</a> –{" "}
                              <a href="tel:0847911068">084 791 1068</a>
                            </p>
                            <p>
                              <strong>Email</strong> : interchange@gmail.com
                            </p>
                            <p>
                              <strong>Website</strong> : interchange.com
                            </p>
                          </div>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                      <div
                        className="gf_browser_chrome gform_wrapper"
                        id="gform_wrapper_3"
                      >
                        <form
                          method="post"
                          encType="multipart/form-data"
                          target="gform_ajax_frame_3"
                          id="gform_3"
                          action="/lien-he/"
                        >
                          <input
                            type="hidden"
                            className="gforms-pum"
                            value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}'
                          />
                          <div className="gform_body">
                            <ul
                              id="gform_fields_3"
                              className="gform_fields top_label description_below"
                            >
                              <li
                                id="field_3_8"
                                className="gfield     gform_hidden"
                              >
                                <input
                                  name="input_8"
                                  id="input_3_8"
                                  type="hidden"
                                  className="gform_hidden"
                                  value=""
                                />
                              </li>
                              <li
                                id="field_3_2"
                                class="gfield    gfap_placeholder gf_left_half"
                              >
                                <div class="ginput_container">
                                  <input
                                    name="input_2"
                                    id="input_3_2"
                                    type="text"
                                    placeholder="Loại phòng"
                                    onChange={(e) => {
                                      setLoaiPhong(e.target.value);
                                    }}
                                  />
                                </div>
                              </li>
                              <li
                                id="field_3_10"
                                className="gfield    gfap_placeholder"
                              >
                                <label
                                  className="gfield_label"
                                  htmlFor="input_3_10"
                                  style={{ display: "none" }}
                                >
                                  Yêu cầu
                                </label>
                                <div className="ginput_container">
                                  <textarea
                                    name="input_10"
                                    id="input_3_10"
                                    className="textarea small"
                                    tabIndex="15"
                                    rows="10"
                                    cols="50"
                                    placeholder="Yêu cầu"
                                    onChange={(e) => {
                                      setYeuCau(e.target.value);
                                    }}
                                  ></textarea>
                                </div>
                              </li>
                              <li
                                id="field_3_12"
                                className="gfield     gform_hidden"
                              >
                                <input
                                  name="input_12"
                                  id="input_3_12"
                                  type="hidden"
                                  className="gform_hidden"
                                  value=""
                                />
                              </li>
                            </ul>
                          </div>
                          {loggedIn ? (
                            <Link
                              class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                              onClick={(e) => {
                                console.log("m da login roi");
                              }}
                            >
                              Đăng ký tư vấn
                            </Link>
                          ) : (
                            <Link
                              class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                              to="/Dang_Nhap"
                              onClick={() => {
                                toast.warn(
                                  "Vui lòng đăng nhập trước khi đăng ký tư vấn"
                                );
                              }}
                            >
                              Đăng ký tư vấn
                            </Link>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div className="wpb_wrapper">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6589.539751340744!2d106.79940766235255!3d10.875144928131968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbiBUUC5IQ00!5e0!3m2!1svi!2s!4v1706585158920!5m2!1svi!2s"
                            width="100%"
                            height="480"
                          ></iframe>
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
      <Footer />
    </>
  );
};

export default LienHe;
