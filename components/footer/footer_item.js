import Link from "next/link";

const FooterItem = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-about">
                <p style={{ textAlign: "justify" }}>
                  Google Developer Student Clubs (GDSC) are university-based
                  communities supported by Google Developers. By joining a GDSC,
                  students grow their knowledge in a peer-to-peer learning
                  environment and build solutions for local businesses and their
                  community
                </p>
              </div>
              {/*widget-about end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-contact">
                <ul className="contact-add">
                  <li>
                    <div className="contact-info">
                      <div className="contact-tt">
                        <h4>Liên hệ</h4>
                        <span>037 828 3131</span>
                      </div>
                    </div>
                    {/*contact-info end*/}
                  </li>
                  <li>
                    <div className="contact-info">
                      <div className="contact-tt">
                        <h4>Thời gian hoạt động</h4>
                        <span>Thứ Hai - Thứ Sáu 8 AM - 11 PM</span>
                      </div>
                    </div>
                    {/*contact-info end*/}
                  </li>
                  <li>
                    <div className="contact-info">
                      <div className="contact-tt">
                        <h4>Địa chỉ</h4>
                        <span>Số 01, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                      </div>
                    </div>
                    {/*contact-info end*/}
                  </li>
                </ul>
              </div>
              {/*widget-contact end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-links">
                <h3 className="widget-title">Truy cập nhanh</h3>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>Về chúng tôi</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/members">
                      <a>Thành viên</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Sự kiện</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <a>Blogs </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Liên hệ </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/*widget-links end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6903090912265!2d105.8433993150316!3d21.00504768601128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbf1%3A0x5bf30cadcd91e2c3!2zxJDhuqBJIEjhu4xDIELDgUNIIEtIT0EgQ-G7lE5HIFRS4bqmTiDEkOG6oEkgTkdIxKhB!5e0!3m2!1svi!2s!4v1616154139433!5m2!1svi!2s"
                  title={"Address map"}
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/*widget-iframe end*/}
            </div>
          </div>
        </div>
        {/*top-footer end*/}
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>© Copyrights 2023 GDSC HUST All rights reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <ul className="social-links">
                <li>
                  <Link href="https://www.facebook.com/dsc.hust.2020">
                    <a target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://gdsc.community.dev/hanoi-university-of-science-technology-hust">
                    <a target="_blank">
                      <i className="fab fa-google" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*bottom-footer end*/}
      </div>
    </footer>
  );
};
export default FooterItem;
