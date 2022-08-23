import socialNetowrks from '../data/social-networks.json';
export function SocialNetworks() {
  return (
    <section className="container text-center py-5 my-2 my-md-4 my-lg-5">
      <h2 className="h1 mb-4">We Have Social Networks</h2>
      <p className="fs-lg text-muted pb-2 mb-5">
        Follow us and keep up to date with the freshest news!
      </p>
      <div className="row">
        <div className="col position-relative text-center border-end mx-n1">
          <a
            href={socialNetowrks.items.facebook.link}
            className="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <div className="pt-4">
            <h6 className="mb-1">Facebook</h6>
            {/* <p className="fs-sm text-muted mb-0">silicon</p> */}
          </div>
        </div>
        <div className="col position-relative text-center border-end mx-n1">
          <a
            href={socialNetowrks.items.instagram.link}
            className="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <div className="pt-4">
            <h6 className="mb-1">Instagram</h6>
          </div>
        </div>
        <div className="col position-relative text-center border-end mx-n1">
          <a
            href={socialNetowrks.items.youTube.link}
            className="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <div className="pt-4">
            <h6 className="mb-1">YouTube</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
