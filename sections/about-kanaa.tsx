export const AboutKanaa = () => (
  <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
    <div className="row pt-xl-3">
      <div className="col-md-5 text-center text-md-start pb-5">
        <h1 className="mb-4">Kanaa Fertility Center</h1>
        <p className="fs-lg pb-lg-3 mb-4">
          We provide you with the highest quality of care that results in a
          healthy happy family. Our team—includes board-certified reproductive
          and infertility specialists, nurses, and lab professionals who are
          solely focused on the needs of people dealing with fertility-related
          issues, questions, or concerns.
        </p>
        <a
          href="about-v2.html"
          className="btn btn-primary shadow-primary btn-lg"
        >
          More About Us
        </a>
        <div className="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5">
          <div className="mx-3 mx-md-0">
            <div className="display-3 text-dark mb-1">3500+</div>
            <span>Successful conceptions and deliveries after treatment</span>
          </div>
          <div className="mx-3 mx-md-0">
            <div className="display-3 text-dark mb-1">15+</div>
            <span>Years of team experience in reproductive medicine</span>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
        <img
          src="/assets/img/baby-01.jpg"
          className="rounded-3 shadow-sm"
          alt="Image"
        />
      </div>
    </div>
  </section>
);
