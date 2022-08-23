export function ContactForm() {
  return (
    <section className="position-relative bg-secondary pt-5">
      <div className="container position-relative zindex-2 pt-5">
        <nav className="pt-lg-4 pb-3 mb-2 mb-sm-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="bx bx-home-alt fs-lg me-1"></i>Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0">
            <div className="pe-lg-4 pe-xl-0">
              <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
              <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="ps-3 ps-sm-4">
                  <h2 className="h4 pb-1 mb-2">Email us</h2>
                  <p className="mb-2">
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                  <div className="btn btn-link btn-lg px-0">
                    Leave a message
                    <i className="bx bx-right-arrow-alt lead ms-2"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                  <i className="bx bx-group"></i>
                </div>
                <div className="ps-3 ps-sm-4">
                  <h2 className="h4 pb-1 mb-2">Careers</h2>
                  <p className="mb-2">
                    Sit ac ipsum leo lorem magna nunc mattis maecenas non
                    vestibulum.
                  </p>
                  <div className="btn btn-link btn-lg px-0">
                    Send an application
                    <i className="bx bx-right-arrow-alt lead ms-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-7 offset-xl-2">
            <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
              <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
              <div className="card-body position-relative zindex-2">
                <h2 className="card-title pb-3 mb-4">
                  Get Online Consultation
                </h2>
                <form className="row g-4 needs-validation" noValidate>
                  <div className="col-12">
                    <label htmlFor="fn" className="form-label fs-base">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fn"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your full name!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label fs-base">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provid a valid email address!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="specialist" className="form-label fs-base">
                      Specialist
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="specialist"
                      required
                    >
                      <option value="" selected disabled>
                        Choose a specialist
                      </option>
                      <option value="Therapist">Therapist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="Cardiologist">Cardiologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Surgeon">Surgeon</option>
                    </select>
                    <div className="invalid-feedback">
                      Choose a specialist from the list!
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="date" className="form-label fs-base">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="date"
                      data-format='{"date": true, "datePattern": ["m", "d"]}'
                      placeholder="mm/dd"
                      required
                    />
                    <div className="invalid-feedback">Enter a date!</div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="time" className="form-label fs-base">
                      Time
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="time"
                      data-format='{"time": true, "timePattern": ["h", "m"]}'
                      placeholder="hh:mm"
                      required
                    />
                    <div className="invalid-feedback">Enter a time!</div>
                  </div>
                  <div className="col-12 pt-2 pt-sm-3">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary w-100 w-sm-auto"
                    >
                      Make an appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute bottom-0 start-0 w-100 bg-light"
        style={{ height: '8rem' }}
      ></div>
    </section>
  );
}
