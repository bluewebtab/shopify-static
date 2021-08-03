export default function Footer(props) {
  const { children, className, ...rest } = props;
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-9"}>
            <div className={"row"}>
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer__links">
                  <span className="footer__column-title">Get Help</span>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                  <a href="#" className="footer__link">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-md-3"}>
            <div className="footer__extra">
              <span className="footer__column-title">
                Sign Up For Our Newsletter
              </span>
              <input type="text" name="email_newsletter" className="footer__input" placeholder="youremail@company.com" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. 
              </p>
              <div className="footer__social-icons">
                <a href="#" className="footer__social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        © 2021 E-Commerce Shop, LLC All Rights Reserved
                    </div>
                    <div className="footer__extra-links">
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
