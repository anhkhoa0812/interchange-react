import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Image from "./Image";
const Detail_Home = (props) => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  return (
    <>
      <Header />
      <Menu />
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
                          class="uvc-main-heading ult-responsive blog-title"
                          data-ultimate-target=".uvc-heading.ultimate-heading-921865b67d315d601 h3"
                          data-responsive-json-new='{"font-size":"","line-height":""}'
                        >
                          <h1 class="card-title fw-semibold mb-4">
                            {data.blogTitle}
                          </h1>
                        </div>
                        <div
                          class="uvc-heading-spacer line_only blog-dash"
                          style={{
                            marginTop: "15px",
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
                        class="gf_browser_chrome gform_wrapper blog-content"
                        id="gform_wrapper_3"
                      >
                        <div class="date">{data.postTime}</div>
                        <Image blogId={data.blogId} />
                        <div class="content">{data.blogContent}</div>
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
export default Detail_Home;
