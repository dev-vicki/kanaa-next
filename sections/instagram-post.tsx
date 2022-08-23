export const InstagramPost = () => {
  return (
    <section className="pt-5 pb-5 mb-3 mb-md-4 mb-lg-5">
      <div className="container text-center">
        <h2 className="h1 pt-1 mb-4">Delivering Happiness Everyday</h2>
        <div className="row justify-content-center mb-md-2 mb-lg-5">
          <div className="col-lg-6 col-md-8">
            <p className="fs-lg text-muted mb-lg-0">
              Share your success story and give hope and reassurance to others
              who may be experiencing difficult moments in their own journey to
              parenthood.
            </p>
          </div>
        </div>
        <div className="position-relative rounded-3 overflow-hidden mb-lg-3">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
            <a
              href="https://www.instagram.com/drpriyakalyani.official/"
              className="btn btn-video btn-icon btn-xl stretched-link bg-white"
            >
              <i className="bx bx-play"></i>
            </a>
          </div>
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
          <img
            src="http://kanaafertility.com/assets/images/baby-college.jpg"
            alt="Cover image"
          />
        </div>
      </div>
    </section>
  );
};
