import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';

const MainBanner = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="main-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div
              className="banner-text wow fadeInLeft"
              data-wow-duration="1000ms"
            >
              <h2>
                <div data-aos="fade-right">
                  We are in together <span>GDSC-HUST</span>
                </div>
              </h2>
              <div data-aos="fade-right">
                <p>Ha Noi University of Science & Technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="banner-img wow zoomIn" data-wow-duration="1000ms">
              <div data-aos="fade-left">
                <img
                  src="https://i.postimg.cc/Qx8Q5Nwf/banner-img.png"
                  // width={497}
                  // height={586}
                  alt="banner-img"
                />
              </div>
            </div>
            <div
              className="elements-bg wow zoomIn"
              data-wow-duration="1000ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainBanner;
