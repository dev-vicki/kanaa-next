import Link from 'next/link';
import socialNetowrks from '../../data/social-networks.json';

export const Footer = () => {
  return (
    <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              Kanaa
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-1">
             <address>
              <b>RK Salai Branch</b>
              <br />
                No. 40, Dr Radha Krishnan Salai, Chennai - 600004.
                <br />
                <a href='tel:+9104442648444'>
                  +91 (044) 4264 8444
                </a>
              </address>
            </p>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">
            <address>
            <b>K.K Nagar Branch</b>
            <br />
              No. 453/454, R.K. Shanmugam Salai, K.K. Nagar, <br /> Chennai - 600 078.
              <br />
              <a href='tel:+9104443530444'>+91 (044) 4353 0444 / 555 / 666 / 777 / 888</a>
            </address>
          </p>
            
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div
                  id="useful-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">
                      <Link href={'/'}>
                        <a className="nav-link d-inline-block px-0 pt-1 pb-2">
                          Home
                        </a>
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link href="/about-us">
                        <a className="nav-link d-inline-block px-0 pt-1 pb-2">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/doctors">
                        <a className="nav-link d-inline-block px-0 pt-1 pb-2">
                          Our doctors
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        News &amp; Insights
                      </a>
                    </li> */}
                  </ul>
                  {/* <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Social
                  </a>
                </h6>
                <div
                  id="social-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    {Object.values(socialNetowrks.items).map((item) => (
                      <li key={item.name} className="nav-item">
                        <a
                          href={item.link}
                          className="nav-link d-inline-block px-0 pt-1 pb-2"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">Contact Us</h6>
                <a href="mailto:care.kanaa@gmail.com " className="fw-medium">
                 care.kanaa@gmail.com 
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">
            &copy; All rights reserved. Made by
          </span>
          <a
            className="nav-link d-inline-block p-0"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            Kanaa
          </a>
        </p>
      </div>
    </footer>
  );
};
