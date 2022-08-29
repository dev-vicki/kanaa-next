import Link from 'next/link';

export function OnlineConsultation() {
  return (
    <section
      className="pb-5 mb-2 mb-md-4 mb-lg-5"
      style={{ paddingTop: '80px' }}
    >
      <div className="bg-secondary pb-lg-4 pb-xl-5">
        <div className="container pb-4 pb-md-5">
          <div className="row">
            <div className="col-xl-5 col-lg-6" style={{ marginTop: '-80px' }}>
              <div
                className="swiper-tabs mx-auto"
                style={{ maxWidth: '526px' }}
              >
                <div id="image-1" className="swiper-tab active">
                  <img
                    src="/assets/img/online-consultation.jpeg"
                    className="rounded-3"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1 pt-2 pt-md-4 pt-lg-5 mt-4">
              <div
                className="swiper mx-0 mb-md-n2 mb-xxl-n3"
                data-swiper-options='{
                  "spaceBetween": 30,
                  "loop": true,
                  "tabs": true,
                  "navigation": {
                    "prevEl": "#prev",
                    "nextEl": "#next"
                  }
                }'
              >
                <div className="swiper-wrapper text-center text-lg-start">
                  <div className="swiper-slide pb-4" data-swiper-tab="#image-1">
                    <h2 className="h1 mb-4">
                      New Service — Start Your Care{' '}
                      <span className="text-success">Online</span> Now
                    </h2>
                    <div className="pb-2 pb-xl-0 mb-4 mb-xl-5">
                      <p>
                        For those who are unable to visit in person or live in a
                        different place, we offer virtual online consultation
                        options. This is definitely not your typical five-minute
                        consult. It takes place in two steps:
                      </p>
                      <ul>
                        <li>
                          First, our junior doctor will get in touch with you to
                          fill up our usual history questionnaire over a video
                          call and ask you to send your relevant test results
                          which you may have done elsewhere over WhatsApp or
                          email.
                        </li>
                        <li>
                          After reviewing this, you will again be connecting
                          with our senior gynaecologists in the second step who
                          will be able to advise you and clear your concerns
                          patiently.
                        </li>
                      </ul>
                    </div>
                    <Link href="/contact-us">
                      <a className="btn btn-success btn-lg shadow-success">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
