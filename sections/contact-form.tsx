import Link from 'next/link';
import { FormEventHandler, useRef } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  mobile: HTMLInputElement;
  date: HTMLInputElement;
  time: HTMLInputElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function ContactForm() {
  const formRef = useRef<ContactFormElement>(null);

  const handleOnSubmit: FormEventHandler<ContactFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const mobile = event.currentTarget.elements.mobile.value;
    if (!name || !mobile) {
      return;
    }

    // Get data from the form.
    const data = {
      name,
      mobile,
      date: event.currentTarget.elements.date.value,
      time: event.currentTarget.elements.time.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/contact';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    formRef.current?.reset();
    alert(`Thanks for booking an appointment: ${result.data.name} on ${result.data.date}`);
  };
  return (
    <section className="position-relative bg-secondary pt-5">
      <div className="container position-relative zindex-2 pt-5">
        <Breadcrumbs
          className="pt-lg-4 pb-3 mb-2 mb-sm-3"
          items={[{ href: '/contact-us', name: 'Contact Us' }]}
        />
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
                  <a
                    href="mailto:shajansheriff@gmail.com"
                    className="btn btn-link btn-lg px-0"
                  >
                    Leave a message
                    <i className="bx bx-right-arrow-alt lead ms-2"></i>
                  </a>
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
                  <a
                    href="mailto:shajansheriff@gmail.com"
                    className="btn btn-link btn-lg px-0"
                  >
                    Send an application
                    <i className="bx bx-right-arrow-alt lead ms-2"></i>
                  </a>
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
                <form
                  ref={formRef}
                  className="row g-4 needs-validation"
                  noValidate
                  onSubmit={handleOnSubmit}
                >
                  <div className="col-12">
                    <label htmlFor="fn" className="form-label fs-base">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fn"
                      required
                      name="name"
                    />
                    <div className="invalid-feedback">
                      Please enter your full name!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label fs-base">
                      Mobile number
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      id="mobile"
                      required
                      name="mobile"
                    />
                    <div className="invalid-feedback">
                      Please provid a valid mobile number!
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
                      name="date"
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
                      name="time"
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
