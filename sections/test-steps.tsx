import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function TestSteps({ items }: { items: string[] }) {
  const [swiperInstance, setSwiperInstance] = useState<any>();
  return (
    <section className="bg-secondary py-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="row pt-2 py-xl-3">
          <div className="col-lg-3 col-md-4">
            <h2
              className="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2"
              style={{ maxWidth: '300px' }}
            >
              What <br className="d-none d-md-inline" /> tests are done?
            </h2>
            <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
              <button
                type="button"
                id="prev-testimonial"
                className="btn btn-prev btn-icon btn-sm me-2"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                type="button"
                id="next-testimonial"
                className="btn btn-next btn-icon btn-sm ms-2"
                onClick={() => swiperInstance?.slideNext()}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <Swiper
              className="mx-n2"
              slidesPerView={1}
              spaceBetween={8}
              loop={true}
              onInit={(ins) => setSwiperInstance(ins)}
              breakpoints={{
                '500': {
                  slidesPerView: 2,
                },
                '1000': {
                  slidesPerView: 2,
                },
                '1200': {
                  slidesPerView: 3,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={item} className="h-auto pt-4">
                  <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4 mb-2">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <span style={{ fontSize: '1.3rem' }}>{index + 1}</span>
                      </span>
                      <div className="card-body pb-3 mb-0">
                        <div
                          className="mb-0"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
