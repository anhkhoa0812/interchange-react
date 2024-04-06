import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div class="menufooter">
        <div class="content">
          <div class="widget_text widget widget_custom_html" id="custom_html-5">
            <div class="textwidget custom-html-widget">
              <div class="social">
                <a target="_blank" href="" rel="noopener">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="" rel="noopener">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/"
                  rel="noopener"
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a target="_blank" href="https://twitter.com/" rel="noopener">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <p>Thời gian mở cửa: 7:00 - 17:00 từ thứ 2 đến thứ 7.</p>
              <p>Có vị trí đỗ xe ô tô, máy bay trực thăng.</p>
              <p>
                © 2019-2024 - <a href="">Thiết kế Nội thất Interchange</a>. All
                rights reserved.{" "}
              </p>
            </div>
          </div>
          <div class="widget widget_nav_menu" id="nav_menu-4">
            <p class="widget_title">THIẾT KẾ NỘI THẤT</p>
            <div class="menu-footer-2-container">
              <ul id="menu-footer-2" class="menu">
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Tất cả thiết kế</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Tủ bếp</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Phòng ngủ</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Phòng khách</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Phòng thờ</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Phòng giải trí</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="widget widget_nav_menu" id="nav_menu-3">
            <p class="widget_title">Menu</p>
            <div class="menu-footer-1-container">
              <ul id="menu-footer-1" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1387 current_page_item">
                  <Link to="/Home"> Trang chủ</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/Gioi_Thieu">Giới thiệu</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="">Thiết kế nội thất</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Thi công thực tế</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="">Sản phẩm</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="/Bao_Gia">Báo giá</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/Tin_Tuc">Tin tức</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/Tu_Van">Tư vấn</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="widget_text widget widget_custom_html" id="custom_html-4">
            <p class="widget_title">Liên hệ</p>
            <div class="textwidget custom-html-widget">
              <ul class="contact-list">
                <li>
                  Công ty:{" "}
                  <span>Nhà văn hóa sinh viên, Dĩ An, Bình Dương.</span>
                </li>
                <li>
                  Xưởng:{" "}
                  <span>
                    Đại học FPT campus HCM, Khu công nghệ cao, Thủ Đức.
                  </span>
                </li>
                <li>
                  Hotline tư vấn:{" "}
                  <span>
                    <a href="tel:0903208113">070 742 715</a>
                  </span>
                </li>
                <li>
                  Hotline bảo hành & bảo trì:{" "}
                  <span>
                    <a href="tel:0703742715">070 374 2715</a>
                  </span>
                </li>
                <li>
                  Email:{" "}
                  <span>
                    <a href="mailto:decorbienhoa@gmail.com">
                      interchange@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="copy">
        <div class="widget_text widget widget_custom_html" id="custom_html-6">
          <div class="textwidget custom-html-widget">
            <div class="footer-bottom-image">
              <div class="image">
                <img src="./image/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
