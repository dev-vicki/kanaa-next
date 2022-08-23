import { GetStaticPropsContext, NextPage } from 'next';
import navbarData from '../../data/navbar.json';

/* // Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    treatments: navbarData.items.map((item) => ({ params: { slug: item.}}))[{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
} */

const TreatmentPage: NextPage = () => {
  return (
    <section className="container pt-4 pb-5 mb-lg-5">
      <nav className="d-md-none pb-3 mb-2 mb-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="bx bx-home-alt fs-lg me-1"></i>Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Services</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Dental Care
          </li>
        </ol>
      </nav>

      <div className="row row-cols-1 row-cols-md-2 g-0 pb-2">
        <div
          className="col order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
          style={{
            backgroundImage: 'url(assets/img/services/single/dental.jpg)',
            borderRadius: '.5rem .5rem .5rem 0',
          }}
        >
          <div style={{ height: 250 }}></div>
        </div>

        <div className="col order-md-1">
          <nav
            className="d-none d-md-block py-3 mb-2 mb-lg-3"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="bx bx-home-alt fs-lg me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Services</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dental Care
              </li>
            </ol>
          </nav>

          <div className="bg-secondary rounded-3 p-4 p-lg-5 mt-n2 mt-md-0 me-md-n2">
            <div className="px-sm-3 px-xl-4 pt-4 py-md-3 py-lg-4 py-xl-5">
              <h1 className="pb-2 pb-xxl-3">Dental Care</h1>
              <p className="pb-2 mb-4 mb-xxl-5">
                Vestibulum nunc lectus auctor quis natoque lectus tortor lacus,
                eu nunc feugiat nisl maecenas nulla hac morbi. Sollicitudin
                cursus in habitasse adipiscing sed aenean sapien maecenas lectus
                auctor. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                elementum dolor ullamcorper sodales ultrices eros.
              </p>
              <div className="d-xxl-flex align-items-center">
                <a href="#" className="btn btn-primary shadow-primary btn-lg">
                  Make an appointment
                </a>
                <ul className="list-unstyled ps-xxl-4 pt-4 pt-xxl-0 ms-xxl-2">
                  <li>
                    <strong>Mon &mdash; Fri:</strong> 9:00 am &mdash; 22:00 am
                  </li>
                  <li>
                    <strong>Sat &mdash; Sun:</strong> 9:00 am &mdash; 20:00 am
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentPage;
