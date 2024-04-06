import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="content">
        <div className="bentrai">
          <h1 id="site_title" className="has-logo">
            <a href="/Home">Trang chủ</a>
          </h1>
        </div>
        <div
          className="widget_text widget widget_custom_html menuchinh"
          id="custom_html-2"
        >
          <div className="textwidget custom-html-widget">
            <ul className="tp_wrap_topicons">
              <li>
                <span className="tp_topinfo tp_phone">
                  <a href="tel:0903208113" title="0903 208 113">
                    <span className="top_ifonicon">
                      <i className="fa fa-phone"></i>
                    </span>
                    <span className="wrap_pa_text">
                      <span className="pa_label">HOTLINE</span>
                      <span className="pa_text">070 374 2715</span>
                    </span>
                  </a>
                </span>
              </li>
              <li>
                <span className="tp_topinfo tp_phone">
                  <a href="tel:0827267777" title="0827 267 777">
                    <span className="top_ifonicon">
                      <i className="fa fa-fax"></i>
                    </span>
                    <span className="wrap_pa_text">
                      <span className="pa_label">HOTLINE</span>
                      <span className="pa_text">070 374 2715</span>
                    </span>
                  </a>
                </span>
              </li>
              <li className="anmobi"> 
                <span className="tp_topinfo tp_phone">
                  <a
                    href="mailto:decorbienhoa@gmail.com"
                    title="decorbienhoa@gmail.com"
                  >
                    <span className="top_ifonicon">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <span className="wrap_pa_text">
                      <span className="pa_label">EMAIL</span>
                      <span className="pa_text">interchange@gmail.com</span>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Header;
