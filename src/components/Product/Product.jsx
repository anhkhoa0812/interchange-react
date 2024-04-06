import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Subbanner from "../Subbanner/Subbanner";
import { getProduct } from "../../service/APIService";
import Product_Body from "./Product_Body";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { dataPro } = location.state || {};
  console.log("id", dataPro);
  const [data, setData] = useState([
    {
      caption: "Khu bếp cao cấp ",
      price: "500k - 900k",
      img: "https://bienhoadecor.com/wp-content/uploads/2022/11/z3909557031795_5f6cf453d6227d9ac33ff27a31483768.jpg",
    },
    {
      caption: "Giường ngủ mộng mơ",
      price: "600k - 700k",
      img: "https://bienhoadecor.com/wp-content/uploads/2024/02/z5097459754429_c76a332f7e765e141efe5a69f04f73d2-900x627.jpg",
    },
    {
      caption: "Phòng khách sang trọng",
      price: "1200k - 1500k",
      img: "https://bienhoadecor.com/wp-content/uploads/2023/01/z4019821722370_877366b0e82edfd5f7b0dee485051dbd-900x675.jpg",
    },
    {
      caption: "Phòng ngủ tinh tế",
      price: "2000k - 2500k",
      img: "https://bienhoadecor.com/wp-content/uploads/2024/01/z5098396376781_9d6f596944fe71bd0e9546d5f3bad3ca.jpg",
    },
  ]);
  return (
    <>
      <Header />
      <Menu />
      <Subbanner subbanner={dataPro.proName} />
      <div class="khungtrang1" style={{ marginTop: "50px" }}>
        <div class="container">
          <div id="post-3346" class="post_box top">
            <div class="post_content">
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                class="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1688198413112 wpb_start_animation animated"
                style={{
                  position: "relative",
                  left: "-159.6px",
                  boxSizing: "border-box",
                  width: "1519px",
                  paddingLeft: "159.6px",
                  paddingRight: "159.4px",
                }}
              >
                <div class="wpb_column vc_column_container vc_col-sm-12">
                  <div class="vc_column-inner vc_custom_1688202172366">
                    <div class="wpb_wrapper">
                      <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div class="wpb_wrapper">
                          <div class="sec-title">
                            <div class="title">
                              GIẢI PHÁP HOÀN HẢO CHO KHÔNG GIAN NỘI – NGOẠI THẤT
                            </div>
                            <h2>
                              <a
                                href="https://bienhoadecor.com/bao-gia-lam-song-nhua/"
                                title="Báo giá Lam Nhựa"
                              >
                                <span class="page-heading-title">
                                  Bang Gia {dataPro.proName}
                                </span>
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                          <p style={{ textAlign: "justify" }}>
                            <strong>{dataPro.proName} la </strong>
                            {dataPro.proDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {data.map((data, index) => (
                <div class="wpb_column vc_column_container vc_col-sm-3">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="ult_pricing_table_wrap ult_design_2 ult_featured ult-cs-custom lamsong ">
                        <div
                          class="ult_pricing_table  "
                          style={{ background: "#fbfbfb" }}
                        >
                          <div
                            id="price-table-wrap-3224"
                            class="ult_pricing_heading"
                            style={{ background: "#176B87" }}
                          >
                            <h5
                              data-ultimate-target="#price-table-wrap-3224 .cust-subhead"
                              data-responsive-json-new='{"font-size":"desktop:12px;","line-height":""}'
                              class="price-subheading ult-responsive cust-subhead"
                              style={{ fontWeight: "bold" }}
                            >
                              {data.caption}
                            </h5>
                          </div>
                          <div class="ult_price_body_block">
                            <div class="ult_price_body">
                              <div id="price-table-wrap-1596" class="ult_price">
                                <span
                                  data-ultimate-target="#price-table-wrap-1596 .ult_price_figure"
                                  data-responsive-json-new='{"font-size":"desktop:22px;","line-height":""}'
                                  class="ult_price_figure ult-responsive"
                                  style={{
                                    fontWeight: "bold",
                                    color: "#dd3333",
                                  }}
                                >
                                  {data.price}
                                </span>
                                <span
                                  data-ultimate-target="#price-table-wrap-1596 .ult_price_term"
                                  data-responsive-json-new='{"font-size":"desktop:18px;","line-height":""}'
                                  class="ult_price_term ult-responsive"
                                  style={{ fontWeight: "normal" }}
                                >
                                  VNĐ/m2
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            id="price-table-button-wrap-3431"
                            class="ult_price_link"
                          >
                            <a
                              data-ultimate-target="#price-table-button-wrap-3431 .ult_price_action_button"
                              data-responsive-json-new='{"font-size":"","line-height":""}'
                              href="#"
                              class="ult_price_action_button ult-responsive"
                              style={{
                                background: "#e9c37a",
                                fontWeight: "normal",
                              }}
                            >
                              Báo giá
                            </a>
                          </div>
                          <div
                            id="price-table-features-wrap-9733"
                            class="ult_price_features ult-responsive"
                            data-ultimate-target="#price-table-features-wrap-9733"
                            data-responsive-json-new='{"font-size":"","line-height":""}'
                            style={{ fontWeight: "normal" }}
                          >
                            <p>
                              <img
                                decoding="async"
                                loading="lazy"
                                class="alignnone size-full wp-image-3640"
                                src={data.img}
                                alt=""
                                width="600"
                                height="600"
                                sizes="(max-width: 600px) 100vw, 600px"
                              />
                            </p>
                          </div>
                          <div class="ult_clr"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div class="vc_row-full-width vc_clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Product;
