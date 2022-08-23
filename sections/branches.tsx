export function Branches() {
  return (
    <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
      <div className="row py-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="d-flex flex-column shadow-sm rounded-3 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62189.7972275654!2d80.266107!3d13.044434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x602b87440456d416!2sKanaa%20Fertility%20Center%20%7C%20RK%20Salai!5e0!3m2!1sen!2sin!4v1661265013698!5m2!1sen!2sin"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <h2 className="h4 mb-4">RK Salai Branch</h2>
          <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li className="d-flex pb-1 mb-2">
              <i
                className="bx bx-map text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              <address>
                No. 40, Dr Radha Krishnan Salai, Chennai - 600004.
              </address>
            </li>
            <li className="d-flex pb-1 mb-2">
              <i
                className="bx bx-phone-call text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              +91 (044) 4264 8444
            </li>
            <li className="d-flex pb-1 mb-2">
              <i
                className="bx bx-envelope text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              kanaa.fertility@gmail.com
            </li>
            <li className="d-flex">
              <i
                className="bx bx-time-five text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              <div>
                <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00
                am
                <br />
                <strong className="text-nav">Sat - Sun:</strong>: 9:00 am -
                20:00 am
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="d-flex flex-column shadow-sm rounded-3 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.92716737749!2d80.201318!3d13.03799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6869136c766f9ff!2sKanaa%20Fertility%20Center!5e0!3m2!1sen!2sin!4v1661265832500!5m2!1sen!2sin"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <h2 className="h4 mb-4">K.K Nagar Branch</h2>
          <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li className="d-flex pb-1 mb-2">
              <i
                className="bx bx-map text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              No. 453/454, R.K. Shanmugam Salai, K.K. Nagar, Chennai - 600 078.
            </li>
            <li className="d-flex pb-1 mb-2">
              <i
                className="bx bx-phone-call text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              +91 (044) 4353 0444 / 555 / 666 / 777 / 888
            </li>
            <li className="d-flex">
              <i
                className="bx bx-time-five text-primary fs-xl me-2"
                style={{ marginTop: '.125rem' }}
              ></i>
              <div>
                <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00
                am
                <br />
                <strong className="text-nav">Sat - Sun:</strong>: 9:00 am -
                20:00 am
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
