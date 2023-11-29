const JoinUs = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-sec">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="newsz-ltr-text">
                <h2>
                  Tham gia <br />
                  Cùng chúng mình
                </h2>
                {/* <Link to="/" className="btn-default">
                  Tham gia <i className="fa fa-long-arrow-alt-right" />
                </Link> */}
              </div>
              {/*newsz-ltr-text end*/}
            </div>
            <div className="col-lg-8">
              <form className="newsletter-form">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Tên" />
                    </div>
                    {/*form-group end*/}
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                    {/*form-group end*/}
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Facebook" />
                    </div>
                    {/*form-group end*/}
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Tin nhắn"
                        defaultValue={""}
                      />
                    </div>
                    {/*form-group end*/}
                  </div>
                </div>
              </form>
              {/*newsletter-form end*/}
            </div>
          </div>
        </div>
        {/*newsletter-sec end*/}
      </div>
    </section>
  );
};
export default JoinUs;
