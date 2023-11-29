import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="section-title text-center d-flex flex-column align-items-center">
          <h2>
            Welcome to <span>GDSC-HUST</span>
          </h2>
          <div data-aos="fade-up">
            <p>Google Developer Student Club</p>
          </div>
        </div>
        {/*section-title end*/}
        <div className="about-sec">
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="abt-col wow fadeInUp"
                  // data-wow-duration="1000ms"
                  // style={{
                  //   visibility: "visible",
                  //   animationDuration: "1000ms",
                  //   animationName: "E",
                  // }}
                >
                  <div data-aos="fade-down-right">
                    <img
                      src="/assets/img/icon5.png"
                      width={56}
                      height={39}
                      alt=""
                    />
                    <h3>Community</h3>
                    <p>Chia sẻ công nghệ trong cộng đồng sinh viên HUST</p>
                  </div>
                </div>
                {/*abt-col end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="abt-col wow fadeInUp"
                  // data-wow-duration="1000ms"
                  // data-wow-delay="200ms"
                  // style={{
                  //   visibility: "visible",
                  //   animationDuration: "1000ms",
                  //   animationDelay: "200ms",
                  //   animationName: "E",
                  // }}
                >
                  <div data-aos="fade-down-right">
                    <img
                      src="/assets/img/icon7.png"
                      width={39}
                      height={39}
                      alt=""
                    />
                    <h3>Events</h3>
                    <p>Tổ chức các buổi workshop, hackathon cho sinh viên</p>
                  </div>
                </div>
                {/*abt-col end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="abt-col wow fadeInUp"
                  // data-wow-duration="1000ms"
                  // data-wow-delay="400ms"
                  // style={{
                  //   visibility: "visible",
                  //   animationDuration: "1000ms",
                  //   animationDelay: "400ms",
                  //   animationName: "E",
                  // }}
                >
                  <div data-aos="fade-down-left">
                    <img
                      src="/assets/img/icon8.png"
                      width={35}
                      height={39}
                      alt=""
                    />
                    <h3>Technology</h3>
                    <p>Tiếp thu sự tiến bộ công nghệ</p>
                  </div>
                </div>
                {/*abt-col end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="abt-col wow fadeInUp"
                  // data-wow-duration="1000ms"
                  // data-wow-delay="600ms"
                  // style={{
                  //   visibility: "visible",
                  //   animationDuration: "1000ms",
                  //   animationDelay: "600ms",
                  //   animationName: "E",
                  // }}
                >
                  <div data-aos="fade-down-left">
                    <img
                      src="/assets/img/icon9.png"
                      width={40}
                      height={39}
                      alt=""
                    />
                    <h3>Activities</h3>
                    <p>
                      Tổ chức các hoạt động vui chơi, gắn bó trong câu lạc bộ
                    </p>
                  </div>
                </div>
                {/*abt-col end*/}
              </div>
            </div>
          </div>
        </div>
        {/*about-rw end*/}
        <div className="abt-img">
          <ul
            className="masonary"
            style={{ position: 'relative', height: '588px' }}
          >
            <li
              className="width1 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '0px',
                top: '0px',
              }}
            >
              <div data-aos="zoom-in-right">
                <img
                  src="https://i.postimg.cc/2SGLDgw3/img-1414.png"
                  width={943}
                  height={1414}
                  alt="img-1414"
                />
              </div>
            </li>
            <li
              className="width2 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '199px',
                top: '0px',
              }}
            >
              <div data-aos="zoom-in-right">
                <img
                  src="https://i.postimg.cc/ncYC4NNT/img-1440.png"
                  width={961}
                  height={1440}
                  alt="img-1440"
                />
              </div>
            </li>
            <li
              className="width3 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '496px',
                top: '0px',
              }}
            >
              <div data-aos="zoom-in-right">
                <img
                  src="https://i.postimg.cc/prBRjMyF/img-2064.png"
                  width={1376}
                  height={2064}
                  alt="img-2064"
                />
              </div>
            </li>
            <li
              className="width4 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '693px',
                top: '0px',
              }}
            >
              <div data-aos="zoom-in-right">
                <img
                  src="https://i.postimg.cc/T1QvwjHj/imng-1504.png"
                  width={1504}
                  height={1004}
                  alt="imng-1504"
                />
              </div>
            </li>
            <li
              className="width5 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '873px',
                top: '0px',
              }}
            >
              <div data-aos="zoom-out-up">
                <img
                  src="https://i.postimg.cc/Dwx0DLvX/img-1440x960.png"
                  width={1440}
                  height={960}
                  alt="img-1440x960"
                />
              </div>
            </li>
            <li
              className="width6 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '693px',
                top: '211px',
              }}
            >
              <div data-aos="zoom-out-up">
                <img
                  src="https://i.postimg.cc/dtFbyf2q/img-1393.png"
                  width={929}
                  height={1393}
                  alt="img-1393"
                />
              </div>
            </li>
            <li
              className="width7 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '891px',
                top: '211px',
              }}
            >
              <div data-aos="zoom-out-down">
                <img
                  src="https://i.postimg.cc/vZZHWTrH/img-1840.png"
                  width={1228}
                  height={1840}
                  alt="img-1840"
                />
              </div>
            </li>
            <li
              className="width8 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '1089px',
                top: '211px',
              }}
            >
              <div data-aos="zoom-out-up">
                <img
                  height={64}
                  width={64}
                  src="https://i.postimg.cc/5Nv8ZPTF/img-1404x936.png"
                  alt="img-1404x936"
                />
              </div>
            </li>
            <li
              className="width9 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '199px',
                top: '450px',
              }}
            >
              <div data-aos="zoom-in-right">
                <img
                  height={190}
                  width={180}
                  src="https://i.postimg.cc/t4qGLcJr/img-750.jpg"
                  alt="img-750"
                />
              </div>
            </li>
            <li
              className="width10 wow zoomIn"
              style={{
                visibility: 'visible',
                position: 'absolute',
                left: '496px',
                top: '329px',
              }}
            >
              <div data-aos="zoom-out-left">
                <img
                  src="https://i.postimg.cc/SRLNGz1j/img-1500.png"
                  width={1500}
                  height={1000}
                  alt="img-1500"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
