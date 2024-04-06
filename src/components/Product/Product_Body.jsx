const Product_Body = (props) => {
  const { dataProduct } = props;
  return (
    <>
      {dataProduct.map((data, index) => (
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
                  <div id="price-table-button-wrap-3431" class="ult_price_link">
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
    </>
  );
};
export default Product_Body;
