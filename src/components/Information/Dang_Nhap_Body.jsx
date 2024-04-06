import { event } from "jquery";
import React, { useState } from "react";
import { postLogin } from "../../service/APIService";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./authentication.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Dang_Nhap_Body = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const storeToken = (data) => {
    console.log("dit me fpt", data);
    localStorage.setItem("authToken", data.token);
    console.log("dit me fpt 1 lan", data.token);
    localStorage.setItem("userID", data.userId);
    console.log("dit me fpt 2 lan", data.userId);
    localStorage.setItem("name", data.name);
    console.log("dit me fpt 3 lana", data.name);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warn("Email and password cannot be empty.");
      return;
    }
    const emailRegex = /^[^\s@]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
      toast.error("Email must be a @gmail.com address.");
      return;
    }
    try {
      const response = await postLogin(email, password);
      const token = response.data;
      console.log("This is check", token.data);
      storeToken(token.data[0]);
      toast.success("Login successful!"); // Display success toast
      navigate("/Home");
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      toast.error("Login failed. Please try again."); // Display error toast
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.095)",
          opacity: "0.9",
          marginTop: "-30px",
        }}
        class=".khungtrang1_Dang_Ky"
      >
        <div class="container" style={{ marginTop: "30px" }}>
          <div id="post-88" class="post_box top">
            <div class="post_content">
              <div class="vc_row wpb_row vc_row-fluid vc_custom_1599629333435">
                <div class="wpb_column vc_column_container">
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    class="vc_column-inner"
                  >
                    <div class="authentication-form">
                      <div class="wpb_wrapper">
                        <div
                          id="ultimate-heading-921865b67d315d601"
                          class="uvc-heading ult-adjust-bottom-margin ultimate-heading-921865b67d315d601 uvc-7573 "
                          data-hspacer="line_only"
                          data-halign="left"
                          style={{ textAlign: "left" }}
                        >
                          <div
                            class="uvc-main-heading ult-responsive"
                            data-ultimate-target=".uvc-heading.ultimate-heading-921865b67d315d601 h3"
                            data-responsive-json-new='{"font-size":"","line-height":""}'
                          >
                            <h3 style={{ fontWeight: "normal" }}>Đăng nhập</h3>
                          </div>
                          <div
                            class="uvc-heading-spacer line_only"
                            style={{
                              marginTop: "7px",
                              marginBottom: "12px",
                              height: "2px",
                            }}
                          >
                            <span
                              class="uvc-headings-line"
                              style={{
                                borderStyle: "solid",
                                borderBottomWidth: "2px",
                                borderColor: "#176B87",
                                width: "50px",
                                float: "left",
                              }}
                            ></span>
                          </div>
                        </div>
                        <div
                          class="gf_browser_chrome gform_wrapper"
                          id="gform_wrapper_3"
                        >
                          <form
                            method="post"
                            enctype="multipart/form-data"
                            target="gform_ajax_frame_3"
                            id="gform_3"
                            action=""
                          >
                            <div class="gform_body">
                              <ul
                                id="gform_fields_3"
                                class="gform_fields top_label description_below"
                              >
                                <li id="field_3_8" class="gfield gform_hidden">
                                  <input
                                    name="input_8"
                                    id="input_3_8"
                                    type="hidden"
                                    class="gform_hidden"
                                    value=""
                                  />
                                </li>
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Email</label>
                                  <div class="ginput_container">
                                    <input
                                      id="input-login"
                                      name="input_2"
                                      type="text"
                                      class="large"
                                      onChange={handleEmailChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Mật khẩu</label>
                                  <div
                                    class="ginput_container"
                                    style={{ position: "relative" }}
                                  >
                                    <input
                                      id="input-login"
                                      name="input_11"
                                      type={
                                        isShowPassword ? "text" : "password"
                                      }
                                      class="large"
                                      onChange={handlePasswordChange}
                                    />
                                    {isShowPassword ? (
                                      <span
                                        className="icons-eye-dang-nhap"
                                        onClick={() => setIsShowPassword(false)}
                                      >
                                        <VscEye />
                                      </span>
                                    ) : (
                                      <span
                                        className="icons-eye-dang-nhap"
                                        onClick={() => setIsShowPassword(true)}
                                      >
                                        <VscEyeClosed />
                                      </span>
                                    )}
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="gform_footer top_label">
                              <div class="vc_btn3-container vc_btn3-left vc_custom_1688199835100">
                                <a
                                  class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                                  onClick={handleLogin}
                                >
                                  Đăng nhập
                                </a>
                              </div>
                              <input
                                type="hidden"
                                name="gform_ajax"
                                value="form_id=3&amp;title=&amp;description=&amp;tabindex=11"
                              />

                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="is_submit_3"
                                value="1"
                              />
                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="gform_submit"
                                value="3"
                              />
                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="gform_unique_id"
                                value=""
                              />
                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="state_3"
                                value="WyJbXSIsIjA1ZDQ0NzBmMDk3NDRmOWIyMDkzNjVhNTk2ZWE1MDdmIl0="
                              />
                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="gform_target_page_number_3"
                                id="gform_target_page_number_3"
                                value="0"
                              />
                              <input
                                type="hidden"
                                class="gform_hidden"
                                name="gform_source_page_number_3"
                                id="gform_source_page_number_3"
                                value="1"
                              />
                              <input
                                type="hidden"
                                name="gform_field_values"
                                value=""
                              />
                            </div>
                            <div>
                              <span>Chưa có tài khoản?</span>
                              <span>
                                <Link to="/Dang_Ky">Đăng ký tại đây</Link>
                              </span>
                            </div>
                          </form>
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
    </>
  );
};
export default Dang_Nhap_Body;
