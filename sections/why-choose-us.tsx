export const WhyChooseUs = () => {
  return (
    <section className="bg-secondary pb-md-2 pb-lg-5">
      <div
        className="d-none d-lg-block"
        style={{ marginTop: '-60px', paddingTop: '60px' }}
      ></div>
      <div className="container pb-4 pt-5">
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          Our medical center provides a wide range of fertility care services.
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <img
                src="assets/img/landing/software-company/features/03.svg"
                width="32"
                alt="Icon"
              />
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Results that speak for themselves
            </h3>
          </div>
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <img
                src="assets/img/landing/software-company/features/02.svg"
                width="32"
                alt="Icon"
              />
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Decades of experience, at your service
            </h3>
          </div>
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <img
                src="assets/img/landing/software-company/features/01.svg"
                width="32"
                alt="Icon"
              />
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              With you, at every step of the way
            </h3>
          </div>
          <div className="col text-center">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <img
                src="assets/img/landing/software-company/features/04.svg"
                width="32"
                alt="Icon"
              />
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Individualized Management Plan for each couple
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
