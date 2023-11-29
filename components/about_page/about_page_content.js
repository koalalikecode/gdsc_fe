import Image from 'next/image';
import Link from 'next/link';

const AboutPageContent = () => {
  return (
    <>
      <section className="about-page-content">
        <div className="container">
          <div className="abt-page-row">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-title">
                  <h2>
                    Giới thiệu về <br /> <span>GDSC</span>
                  </h2>
                  <p className="mw-100">
                    🎓 <strong>Google Developer Student Clubs</strong> là một
                    cộng đồng dành cho sinh viên các trường Đại học có niềm đam
                    mê với công nghệ, muốn tiếp cận những sự đổi mới công nghệ
                    trên toàn thế giới.
                  </p>
                  <p>
                    💁‍♂️ Được hỗ trợ bởi <strong>Google</strong> với mục tiêu xây
                    dựng câu lạc bộ tại các trường Đại học, và tìm ra giải pháp
                    cho các vấn đề cộng đồng.
                  </p>
                  {/* <a href="classes.html" className="btn-default">
                    Classes <i className="fa fa-long-arrow-alt-right" />
                  </a> */}
                </div>
                {/*section-title end*/}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <img
                    src="https://i.postimg.cc/cHrsPb9q/img-1.png"
                    width={476}
                    height={536}
                    alt="img-1"
                  />
                </div>
                {/*avt-img end*/}
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <img
                    src="https://i.postimg.cc/7YTk3zcV/img-2.png"
                    alt="img-2"
                    width={513}
                    height={356}
                  />
                </div>
                {/*avt-img end*/}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="act-inffo">
                  <span>GDSC</span>
                  <h2>Sứ mệnh</h2>
                  <p>
                    <strong>Google Developer Student Clubs</strong> Là cầu nối
                    giúp sinh viên thu hẹp khoảng cách giữa Lý thuyết và Thực
                    tiễn.
                  </p>
                  <ul>
                    <li>
                      Sinh Viên: Nâng cao kiến thức, kĩ năng và mở rộng tầm nhìn
                      về công nghệ
                    </li>
                    <li>
                      {' '}
                      Cộng Đồng: Sinh viên sử dụng các kỹ năng được hỗ trợ mạnh
                      mẽ từ Google để giải quyết các vấn đề về mà doanh nghiệp,
                      địa phương đang gặp phải
                    </li>
                    {/* <li>Sed at urna at massa viverra feugiat non </li> */}
                  </ul>
                </div>
                {/*act-inffo end*/}
              </div>
            </div>
          </div>
          {/*abt-page-row end*/}
        </div>
      </section>
      {/*about-page-content end*/}
      <section className="benifit-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Lợi ích</h2>
                  <p>
                    👩‍💻 Làm việc trong môi trường <strong>chuyên nghiệp</strong>
                  </p>
                  <p>
                    🤝 Mở rộng <strong>kết nối</strong>, làm việc cùng với cộng
                    động và các chuyên gia của Google (GDG, GDE,...)
                  </p>
                  <p>
                    ⚙️ Tìm hiểu các hoạt động về chủ đề{' '}
                    <strong>kỹ thuật</strong> (Web, App, AI/ML, Cloud) thông qua
                    hội thảo, workshop và hoạt động xây dựng dự án
                  </p>
                  <p>
                    ✅ Áp dụng những kiến thức và kết nối mới của bạn để{' '}
                    <strong>xây dựng các giải pháp</strong> tuyệt vời cho các
                    vấn đề doanh nghiệp.
                  </p>
                  <p>
                    👨‍💼 Nâng cao <strong>kỹ năng công nghệ</strong>: Code, giải
                    quyết vấn đề, quản lý dự án,...
                  </p>
                  <p>
                    🎨 Nâng cao <strong>kỹ năng mềm</strong>: làm việc nhóm,
                    giao tiếp, tư duy thiết kế,...
                  </p>
                <Link href="/contact">
                  <a className="btn-default">
                    Contacts <i className="fa fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              {/*section-title end*/}
            </div>
            <div className="col-lg-6">
              <div className="about-us-section p-0">
                <div className="about-sec">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/assets/img/icon5.png"
                          width={56}
                          height={39}
                          alt="icon5"
                        />
                        <h3>Community</h3>
                        <p>Chia sẻ công nghệ trong cộng đồng sinh viên HUST</p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/assets/img/icon7.png"
                          width={39}
                          height={39}
                          alt="icon7"
                        />
                        <h3>Events</h3>
                        <p>
                          Tổ chức các buổi workshop, hackathon cho sinh viên
                        </p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/assets/img/icon9.png"
                          width={40}
                          height={39}
                          alt="icon9"
                        />
                        <h3>Technology</h3>
                        <p>Tiếp thu sự tiến bộ công nghệ</p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/assets/img/icon8.png"
                          width={35}
                          height={39}
                          alt=""
                        />
                        <h3>Activities</h3>
                        <p>
                          Tổ chức các hoạt động vui chơi, gắn bó trong câu lạc
                          bộ
                        </p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                  </div>
                </div>
                {/*about-rw end*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPageContent;
