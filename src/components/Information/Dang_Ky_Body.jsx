import React, { useState } from "react";
import { postRegister } from "../../service/APIService";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./authentication.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Dang_Ky_Body = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const handleUsernameChange = (e) => setUserId(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setRePassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleProvinceChange = (e) => setProvince(e.target.value);
  const handleDistrictChange = (e) => setDistrict(e.target.value);
  const handleWardChange = (e) => setWard(e.target.value);
  const handleAddressChange = (e) => setStreetAddress(e.target.value);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("userId", userId);
    console.log("email", email);
    console.log("password", password);
    console.log("rePassword", rePassword);
    console.log("phoneNumber", phoneNumber);
    console.log("birthDate", birthDate);
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("province", province);
    console.log("district", district);
    console.log("streetAddress", streetAddress);
    console.log("ward", ward);
    if (!userId.trim()) {
      toast.warn("Vui lòng nhập ID tài khoản");
      return;
    }
    if (!email.trim()) {
      toast.warn("Vui lòng nhập email");
      return;
    }
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Email must be a @gmail.com address.");
      return;
    }
    if (!password.trim()) {
      toast.warn("Vui lòng nhập mật khẩu");
      return;
    }
    if (password.length < 8) {
      toast.error("Mật khẩu phải có tối tiểu 8 kí tự");
      return;
    }
    if (!rePassword.trim()) {
      toast.warn("Vui lòng nhập lại mật khẩu");
      return;
    }
    if (password !== rePassword) {
      toast.error("Mật khẩu và mật khẩu nhập lại không khớp.");
      return;
    }
    if (!phoneNumber.trim()) {
      toast.warn("Vui lòng nhập sdt");
      return;
    }
    if (!birthDate.trim()) {
      toast.warn("Vui lòng chọn ngày sinh");
      return;
    }
    const birthDateObj = new Date(birthDate);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    if (birthDateObj > eighteenYearsAgo) {
      toast.error("You must be at least 18 years old.");
      return;
    }
    if (!firstName.trim()) {
      toast.warn("Vui lòng nhập họ");
      return;
    }
    if (!lastName.trim()) {
      toast.warn("Vui lòng nhập tên");
      return;
    }
    if (!province.trim()) {
      toast.warn("Vui lòng nhập tỉnh");
      return;
    }
    if (!district.trim()) {
      toast.warn("Vui lòng nhập quận");
      return;
    }
    if (!ward.trim()) {
      toast.warn("Vui lòng nhập quận");
      return;
    }
    if (!streetAddress.trim()) {
      toast.warn("Vui lòng nhập địa chỉ");
      return;
    }

    try {
      const response = await postRegister(
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
        streetAddress
      );
      console.log("this is api response", response.data);
      navigate("/OTP", { state: { response: response.data } });
      toast.success("Vui lòng nhập mã OTP để tiếp tục");
    } catch (error) {
      console.error("Registration error", error);
      toast.error("Registration failed. Please try again.");
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isReShowPassword, setIsReShowPassword] = useState(false);
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
                            <h3 style={{ fontWeight: "normal" }}>Đăng Ký</h3>
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
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Họ*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="text"
                                      class="large"
                                      tabindex="12"
                                      onChange={handleFirstNameChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_right_half">
                                  <label class="gfield_label">Tên*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="text"
                                      class="large"
                                      tabindex="12"
                                      onChange={handleLastNameChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">
                                    Tên tài khoản*
                                  </label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_2"
                                      type="text"
                                      class="large"
                                      onChange={handleUsernameChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_right_half">
                                  <label class="gfield_label">Email*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_2"
                                      type="text"
                                      class="large"
                                      onChange={handleEmailChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Mật khẩu*</label>
                                  <div
                                    class="ginput_container"
                                    style={{ position: "relative" }}
                                  >
                                    <input
                                      name="input_11"
                                      type={
                                        isShowPassword ? "text" : "password"
                                      }
                                      class="large"
                                      onChange={handlePasswordChange}
                                    />
                                    {isShowPassword ? (
                                      <span
                                        className="icons-eye"
                                        onClick={() => setIsShowPassword(false)}
                                      >
                                        <VscEye />
                                      </span>
                                    ) : (
                                      <span
                                        className="icons-eye"
                                        onClick={() => setIsShowPassword(true)}
                                      >
                                        <VscEyeClosed />
                                      </span>
                                    )}
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_right_half">
                                  <label class="gfield_label">
                                    Nhập lại mật khẩu*
                                  </label>
                                  <div
                                    class="ginput_container"
                                    style={{ position: "relative" }}
                                  >
                                    <input
                                      name="input_11"
                                      type={
                                        isReShowPassword ? "text" : "password"
                                      }
                                      class="large"
                                      onChange={handleConfirmPasswordChange}
                                    />
                                    {isReShowPassword ? (
                                      <span
                                        className="icons-eye"
                                        onClick={() =>
                                          setIsReShowPassword(false)
                                        }
                                      >
                                        <VscEye />
                                      </span>
                                    ) : (
                                      <span
                                        className="icons-eye"
                                        onClick={() =>
                                          setIsReShowPassword(true)
                                        }
                                      >
                                        <VscEyeClosed />
                                      </span>
                                    )}
                                  </div>
                                </li>
                                <li
                                  id="field_3_11"
                                  class="gfield gfap_placeholder gf_left_half"
                                >
                                  <label class="gfield_label">
                                    Điện thoại*<span class="Điện thoại"></span>
                                  </label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      id="input_3_11"
                                      type="text"
                                      class="large"
                                      onChange={handlePhoneNumberChange}
                                    />
                                  </div>
                                </li>
                                <li
                                  id="field_3_4"
                                  class="gfield gfap_placeholder gf_right_half gfield_contains_required"
                                >
                                  <label class="gfield_label">Ngày sinh*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_4"
                                      id="input_3_4"
                                      type="date"
                                      class="large"
                                      onChange={handleBirthDateChange}
                                    />
                                  </div>
                                </li>

                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Tỉnh*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="text"
                                      class="large"
                                      onChange={handleProvinceChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_right_half">
                                  <label class="gfield_label">Quận*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="text"
                                      class="large"
                                      onChange={handleDistrictChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_left_half">
                                  <label class="gfield_label">Phường*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="text"
                                      class="large"
                                      onChange={handleWardChange}
                                    />
                                  </div>
                                </li>
                                <li class="gfield gfap_placeholder gf_right_half">
                                  <label class="gfield_label">Địa chỉ*</label>
                                  <div class="ginput_container">
                                    <input
                                      name="input_11"
                                      type="password"
                                      class="text"
                                      onChange={handleAddressChange}
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="gform_footer top_label">
                              <div class="vc_btn3-container vc_btn3-center vc_custom_1688199835100">
                                <a
                                  class="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-3d vc_btn3-color-orange"
                                  onClick={handleRegister}
                                >
                                  Đăng ký
                                </a>
                              </div>
                              <div
                                style={{
                                  textAlign: "center",
                                  marginTop: "30px",
                                }}
                              >
                                <span>Đã có tài khoản?</span>
                                <span>
                                  <Link to="/Dang_Nhap">Đăng nhập tại đây</Link>
                                </span>
                              </div>
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
      </div>
    </>
  );
};
export default Dang_Ky_Body;
