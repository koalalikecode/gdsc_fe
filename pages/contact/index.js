import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import PagerSection from "../../components/utils/pager_section";

const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Liên hệ | GDSCxHUST</title>
            </Head>
            <PagerSection title={"Liên hệ"}/>
            <section className="page-content">
                {/* section class="page-content"; */}
                <div className="container">
                    {/* <div className="mdp-map">
            <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
          </div>
          mdp-map end */}
                    <div className="mdp-contact">
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="comment-area">
                                    <h3>Đóng góp ý kiến</h3>
                                    <form id="contact-form" method="post" action="#">
                                        <div className="response"/>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="name"
                                                        placeholder="Tên"
                                                        required
                                                    />
                                                </div>
                                                {/*form-group end*/}
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="email"
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>
                                                {/*form-group end*/}
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                          <textarea
                              name="message"
                              placeholder="Tin nhắn"
                              defaultValue={""}
                          />
                                                </div>
                                                {/*form-group end*/}
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-submit">
                                                    <button
                                                        type="button"
                                                        id="submit"
                                                        className="btn-default"
                                                    >
                                                        Gửi <i className="fa fa-long-arrow-alt-right"/>
                                                    </button>
                                                </div>
                                                {/*form-submit end*/}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*comment-area end*/}
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="mdp-our-contacts">
                                    <h3>Thông tin</h3>
                                    <ul>
                                        <li>
                                            <div className="d-flex flex-wrap">
                                                <div className="icon-v">
                                                    <Image
                                                        src="/assets/img/icon15.png"
                                                        width={49}
                                                        height={49}
                                                        alt=""
                                                    />
                                                </div>
                                                <address className="dd-cont">
                                                    <h4>Điện thoại</h4>
                                                    <span>+84 378 283 131</span>
                                                </address>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex flex-wrap">
                                                <div className="icon-v">
                                                    <Image
                                                        src="/assets/img/icon16.png"
                                                        width={49}
                                                        height={50}
                                                        alt=""
                                                    />
                                                </div>
                                                <address className="dd-cont">
                                                    <h4>Email</h4>
                                                    <a href={"mailto:dsc.hust.2020@gmail.com"}>dsc.hust.2020@gmail.com</a>
                                                </address>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex flex-wrap">
                                                <div className="icon-v">
                                                    <Image
                                                        src="/assets/img/icon17.png"
                                                        width={49}
                                                        height={50}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="dd-cont">
                                                    <h4>Địa chỉ</h4>
                                                    <a href={"https://www.google.com/maps?ll=21.005004,105.845588&z=15&t=m&hl=vi&gl=US&mapclient=embed&cid=6625653417409897155"}
                                                       target={"_blank"} rel={"noreferrer"}>Đại học Bách Khoa Hà Nội</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ContactPage;
