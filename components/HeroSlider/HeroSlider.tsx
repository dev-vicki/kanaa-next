import { Jarallax, JarallaxImage } from '../Jarallax';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { ReactNode, useState } from 'react';
import Image from 'next/image';

function SwiperTab({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Jarallax
      className={`position-absolute top-0 start-0 w-100 h-100 swiper-tab ${
        active ? 'active' : ''
      }`}
      data-jarallax
      data-speed="0.4"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10" />
      {children}
    </Jarallax>
  );
}

export function HeroSlider() {
  const [swiper, setSwiper] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Jarallax
      className="dark-mode bg-dark py-xxl-5"
      data-jarallax
      data-speed="0.4"
    >
      <div className="swiper-tabs position-absolute top-0 start-0 w-100 h-100">
        {Array.from({ length: 3 }, (_, index) => (
          <SwiperTab key={index} active={activeIndex === index}>
            <JarallaxImage
              src={`/assets/img/hero-slider/${activeIndex + 1}.jpeg`}
              alt={`slider image ${index + 1}`}
            />
          </SwiperTab>
        ))}
      </div>
      <div className="container position-relative zindex-5 py-5">
        <div className="row py-2 py-md-3">
          <div className="col-xl-5 col-lg-7 col-md-9">
            <div className="d-flex justify-content-center justify-content-md-start pb-3 mb-3">
              <button
                type="button"
                id="case-study-prev"
                className="btn btn-prev btn-icon btn-sm bg-white me-2"
                onClick={() => swiper.slidePrev()}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                type="button"
                id="case-study-next"
                className="btn btn-next btn-icon btn-sm bg-white ms-2"
                onClick={() => swiper.slideNext()}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>

            {/* <!-- Card --> */}
            <div className="card bg-white shadow-sm p-3">
              <div className="card-body">
                <Swiper
                  spaceBetween={30}
                  loop
                  pagination
                  slidesPerView={1}
                  onSlideChange={(instance) => {
                    setActiveIndex(instance.realIndex);
                  }}
                  modules={[Pagination]}
                  onInit={(ins) => setSwiper(ins)}
                >
                  <SwiperSlide>
                    <Image
                      src="/assets/img/hero-slider/care.png"
                      className="d-block"
                      width={64}
                      height={64}
                      alt="care"
                    />
                    <h3 className="mb-2">Your health in (Y)OUR hands!</h3>
                    <p className="fs-sm text-muted border-bottom pb-3 mb-3">
                      Prevention rather than treatment is the way forward
                    </p>
                    <p className="pb-2 pb-lg-3 mb-3">
                      With our holistic approach, let us show you the right way
                      to prevent disease or treat the cause rather than the
                      symptoms.
                    </p>
                    {/* <!-- <a href="#" className="btn btn-primary">View case study</a> --> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/img/hero-slider/broken-heart.png"
                      className="d-block"
                      width={64}
                      height={64}
                      alt="broken heart icon"
                    />
                    <h3 className="mb-2">Are you 1 in 8?</h3>
                    <p className="fs-sm text-muted border-bottom pb-3 mb-3">
                      Let us help!
                    </p>
                    <p className="pb-2 pb-lg-3 mb-3">
                      Did you know that 1 in 8 couples report difficulty in
                      getting pregnant.
                    </p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/img/hero-slider/mother.png"
                      className="d-block"
                      width={64}
                      height={64}
                      alt="Adolescence to Menopause and beyond"
                    />
                    <h3 className="mb-2">
                      Adolescence to Menopause and beyond…
                    </h3>
                    <p className="fs-sm text-muted border-bottom pb-3 mb-3">
                      we are there to care!
                    </p>
                    <p className="pb-2 pb-lg-3 mb-3">
                      We deal with women&apos;s health problems across all ages.
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Jarallax>
  );
}
