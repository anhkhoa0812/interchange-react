import { useState } from "react";
import { useLocation } from "react-router-dom";
import { postOTP } from "../../service/APIService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTP = () => {
  const location = useLocation();
  const responseData = location.state.response;
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const handleChangeOTP = (e) => {
    setOTP(e.target.value);
  };
  const handleSubmit = async () => {
    const updatedData = {
      ...responseData,
      otp: OTP,
    };
    const userId = updatedData.userId;
    const password = updatedData.password;
    const rePassword = updatedData.rePassword;
    const phoneNumber = updatedData.phoneNumber;
    const email = updatedData.email;
    const firstName = updatedData.firstName;
    const lastName = updatedData.lastName;
    const birthDate = updatedData.birthDate;
    const province = updatedData.province;
    const district = updatedData.district;
    const ward = updatedData.ward;
    const streetAddress = updatedData.streetAddress;
    const otp = updatedData.otp;
    console.log("this is data have otp ", { updatedData });
    try {
      const response = await postOTP(
        userId,
        password,
        rePassword,
        phoneNumber,
        email,
        firstName,
        lastName,
        birthDate,
        province,
        district,
        ward,
        streetAddress,
        otp
      );
      console.log("this is api response after enter OTP", response.data);
      toast.success("Đăng ký thành công vui lòng đăng nhập");
      navigate("/Dang_Nhap");
    } catch (error) {
      console.error("Registration error", error);
      toast.error("OTP đã sai vui lòng nhập lại");
    }
  };
  return (
    <>
      <div class="khungtrang1">
        <div class="container" style={{ marginTop: "30px" }}>
          <div id="post-88" class="post_box top">
            <div class="post_content">
              <div class="vc_row wpb_row vc_row-fluid vc_custom_1599629333435">
                <div class="wpb_column vc_column_container">
                  <div class="vc_column-inner">
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
                          <h3 style={{ fontWeight: "normal" }}>Nhập mã OTP:</h3>
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
                                <label
                                  class="gfield_label"
                                  style={{ display: "none" }}
                                >
                                  OTP
                                </label>
                                <div class="ginput_container">
                                  <input
                                    name="input_2"
                                    type="text"
                                    class="large"
                                    tabindex="11"
                                    placeholder="Nhập mã OTP"
                                    onChange={handleChangeOTP}
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="gform_footer top_label">
                            <div class="vc_btn3-container vc_btn3-left vc_custom_1688199835100">
                              <a
                                class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                                onClick={handleSubmit}
                              >
                                Gửi
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
    </>
  );
};
export default OTP;
