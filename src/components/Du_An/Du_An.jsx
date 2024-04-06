import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./customer-project.css";
import Subbanner from "../Subbanner/Subbanner";

const Du_An = () => {
  const [subbanner, setSubbanner] = useState("Dự án của bạn");
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={subbanner} />
      <div class="khungtrang1_Du_An">
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
                          <h3 style={{ fontWeight: "normal" }}>
                            Dự án của bạn
                          </h3>
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
                      <div class="card-body">
                        <div class="card no-shadow">
                          <div class="customer-project-display">
                            <div class="project-image">
                              <img src="./image/0007-450x320.jpg" alt="" />
                            </div>
                            <div class="project-content">
                              <h5 class="card-title fw-semibold mb-4">
                                DỰ ÁN 2
                              </h5>
                              <div class="project-buttons">
                                <a class="btn btn-primary m-1" href="#">
                                  Xem chi tiet
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card no-shadow">
                          <div class="customer-project-display">
                            <div class="project-image">
                              <img
                                src="./image/z3385549894247_0f119524aedd8b97e44dcd5706770c4f-450x320.jpg"
                                alt=""
                              />
                            </div>
                            <div class="project-content">
                              <h5 class="card-title fw-semibold mb-4">
                                DỰ ÁN 1
                              </h5>
                              <div class="project-buttons">
                                <a class="btn btn-primary m-1" href="#">
                                  Xem chi tiet
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pagination">
                          <ul></ul>
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
export default Du_An;
