import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { menuResponse } from "../../store/actions";
import styles from "./header_item.module.css";
import Image from "next/image";

const HeaderItem = (props) => {
  // const generationList = props.generationList.map((e, index) => (
  //   <Link href={"/members/gen/" + e} key={index}>
  //     <a>Gen {e}</a>
  //   </Link>
  // ));
  const router = useRouter();
  const pathName = router.pathname;
  const { menuResponse, changeMenuStatus } = props;

  return (
    <header>
      <div className={` ${"container"}`}>
        <div
          className={`${"header-content d-flex flex-row align-items-center"}`}
        >
          <div
            className={`${"container d-flex flex-row justify-content-between"}`}
          >
            <Link href="/">
              <a>
                <Image
                  src="/assets/img/logo.png"
                  width={1280}
                  height={149}
                  alt="GDSCxHUST logo"
                />
              </a>
            </Link>
          </div>
          <div
            className={"d-none d-sm-block d-lg-none"}
            style={{ width: "60%" }}
          />
          {/*logo end*/}
          <ul className="contact-add d-flex flex-wrap">
            <li>
              <div className="contact-info">
                <Image
                  src="/assets/img/icon1.png"
                  width={21}
                  height={21}
                  alt=""
                />
                <div className="contact-tt">
                  <h2>Liên hệ</h2>
                  <span>037 828 3131</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
            <li>
              <div className="contact-info">
                <Image
                  src="/assets/img/icon2.png"
                  width={21}
                  height={21}
                  alt=""
                />
                <div className="contact-tt">
                  <h2>Thời gian hoạt động</h2>
                  <span>Thứ Hai - Thứ Sáu 8 AM - 11 PM</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
            <li>
              <div className="contact-info">
                <Image
                  src="/assets/img/icon3.png"
                  width={16}
                  height={21}
                  alt=""
                />
                <div className="contact-tt">
                  <h2>Địa chỉ</h2>
                  <span>Số 01, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
          </ul>
          {/*contact-information end*/}
          <div
            className={`menu-btn ${menuResponse ? "active" : ""}`}
            onClick={() => changeMenuStatus(!menuResponse)}
          >
            <a href="#">
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </a>
          </div>
          {/*menu-btn end*/}
        </div>
        {/*header-content end*/}
        <div className="navigation-bar d-flex flex-wrap align-items-center">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className={`${pathName === "/" ? "active" : ""}`}>
                    Trang chủ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={`${pathName.includes("about") ? "active" : ""}`}
                  >
                    Về chúng tôi
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/members">
                  <a
                    className={`${
                      pathName.includes("members") ? "active" : ""
                    }`}
                  >
                    Thành viên
                  </a>
                </Link>
                <ul>
                  <li>{generationList}</li>
                </ul>
              </li>
              <li>
                <Link href="/events">
                  <a
                    className={`${pathName.includes("events") ? "active" : ""}`}
                  >
                    Sự kiện
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a
                    className={`${pathName.includes("blogs") ? "active" : ""}`}
                  >
                    Blogs
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/contact">
                  <a
                    className={`${
                      pathName.includes("contact") ? "active" : ""
                    }`}
                  >
                    Liên hệ
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {/*nav end*/}
          <ul className="social-links ml-auto">
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
        {/*navigation-bar end*/}
      </div>
    </header>
  );
};
const mapState = (state) => {
  return state;
};
const mapDispatch = (dispatch) => {
  return {
    changeMenuStatus: (status) => dispatch(menuResponse(status)),
  };
};
export default connect(mapState, mapDispatch)(HeaderItem);
