import Image from 'next/image';
import { useRouter } from 'next/router';
import holisticData from '../data/holistic.json';
import { slugify } from '../utils';

const { items, title } = holisticData;
const TabId = (slug: string) => `${slug}-tab`;

export function Holistic() {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug);

  return (
    <section className="container pt-2 pb-2 mt-3 mb-5 mt-sm-4 mt-xl-3">
      <h2 className="h1 text-center pb-3 pb-lg-4">{title}</h2>

      <ul
        className="nav nav-tabs flex-nowrap justify-content-lg-center overflow-auto pb-2 mb-3 mb-lg-4"
        role="tablist"
      >
        {items.map((item) => {
          const slug = slugify(item.title);
          return (
            <li key={slug} className="nav-item" role="presentation">
              <button
                className={`nav-link text-nowrap ${
                  query.slug === slug ? 'active' : ''
                }`}
                id={TabId(slug)}
                data-bs-toggle="tab"
                data-bs-target={`#${slug}`}
                type="button"
                role="tab"
                aria-controls={slug}
                aria-selected="true"
              >
                <i className="bx bx-star fs-lg opacity-60 me-2"></i>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="tab-content bg-secondary rounded-3 py-4">
        {items.map((item) => {
          const slug = slugify(item.title);
          return (
            <div
              key={slug}
              className={`tab-pane fade show ${
                query.slug === slug ? 'active' : ''
              }`}
              id={slug}
              role="tabpanel"
              aria-labelledby={TabId(slug)}
            >
              <div className="row align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                <div className="col-lg-4 col-md-5 offset-lg-1 text-center text-md-start">
                  <h3 className="mb-lg-4">{item.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <div className="col-lg-6 col-md-7 mt-md-4">
                  <Image
                    src={item.image}
                    className="d-block my-lg-2 mx-auto me-md-0"
                    width={500}
                    height={500}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
