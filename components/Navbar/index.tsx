export const Navbar = () => {
  return (
    // <!-- Navbar -->
    //   <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
    <header className="header navbar navbar-expand-lg bg-light navbar-sticky">
      <div className="container px-3">
        <a href="index.html" className="navbar-brand pe-3">
          <img
            src="http://kanaafertility.com/assets/images/logo.png"
            alt="Kanaa Logo"
            width="96px"
          />
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu">
                  <div className="d-lg-flex pt-lg-3">
                    <div className="mega-dropdown-column">
                      <h6 className="px-3 mb-2">Treatments</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a
                            href="about-v1.html"
                            className="dropdown-item py-1"
                          >
                            Ovulation Induction
                          </a>
                        </li>
                        <li>
                          <a
                            href="about-v2.html"
                            className="dropdown-item py-1"
                          >
                            IUI
                          </a>
                        </li>
                        <li>
                          <a
                            href="about-v2.html"
                            className="dropdown-item py-1"
                          >
                            IVF & ICSI
                          </a>
                        </li>
                        <li>
                          <a
                            href="about-v2.html"
                            className="dropdown-item py-1"
                          >
                            IUI
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column">
                      <h6 className="px-3 mb-2">360 Women Health care</h6>
                      <ul className="list-unstyled mb-3">
                        <li>
                          <a
                            href="holistic.html"
                            className="dropdown-item py-1"
                          >
                            Lifestyle coaching
                          </a>
                        </li>
                        <li>
                          <a
                            href="portfolio-list.html"
                            className="dropdown-item py-1"
                          >
                            Sexual Health
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  About us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="account-details.html" className="dropdown-item">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="account-details.html" className="dropdown-item">
                      Our Doctors
                    </a>
                  </li>
                  <li>
                    <a href="account-security.html" className="dropdown-item">
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-notifications.html"
                      className="dropdown-item"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="components/typography.html" className="nav-link">
                  Health Assessments
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                  A-Z of Fertility
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top">
            <a
              href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"
              className="btn btn-primary w-100"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bx bx-paper-plane fs-4 lh-1 me-1"></i>
              &nbsp;Contact us
            </a>
          </div>
        </div>
        {/* <!-- <div
            className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
            data-bs-toggle="mode"
          >
            <input type="checkbox" className="form-check-input" id="theme-mode" />
            <label className="form-check-label d-none d-sm-block" for="theme-mode"
              >Light</label
            >
            <label className="form-check-label d-none d-sm-block" for="theme-mode"
              >Dark</label
            >
          </div> --> */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="bx bx-paper-plane fs-5 lh-1 me-1"></i>
          &nbsp;Contact us
        </a>
      </div>
    </header>
  );
};
