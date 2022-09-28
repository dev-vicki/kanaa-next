import Image from 'next/image';
import Link from 'next/link';
import navbarData from '../data/navbar.json';
import { Routes, slugify } from '../utils';
const { items } = navbarData;
export function LandingServices() {
  const [services] = items;
  const colOne = services.items.slice(0, 2);
  const colTwo = services.items.slice(3, 6);
  return (
    <section className="container pb-5 mb-md-2 mb-lg-5">
      <div className="row">
        <div className="col-lg-4 text-center text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
          <h2 className="h1 mb-lg-4">
            Highly Innovative Technology &amp; Services
          </h2>
          <p className="pb-4 mb-0 mb-lg-3">
            We appreciate your trust greatly. Our patients choose us and our
            services because they know we are the best. We offer complete health
            care to individuals with various health concerns.
          </p>
          {/* <a href="#" className="btn btn-primary shadow-primary btn-lg">
            All services
          </a> */}
        </div>
        <div className="col-xl-7 col-lg-8 offset-xl-1">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              {colOne.map((item) => {
                const [subItem] = item.subItems;
                return (
                  <div
                    key={item.name}
                    className="card card-hover bg-secondary border-0 mb-4"
                  >
                    <div className="card-body d-flex align-items-start">
                      <div className="flex-shrink-0 bg-light rounded-3 p-3">
                        <Image
                          src="/assets/img/cardiology.svg"
                          width="28"
                          height={28}
                          alt="Icon"
                        />
                      </div>
                      <div className="ps-4">
                        <h3 className="h5 pb-2 mb-1">{item.name}</h3>
                        <p className="pb-2 mb-1">
                          Id mollis consectetur congue egestas egestas
                          suspendisse blandit justo.
                        </p>
                        <Link
                          href={Routes.services(
                            item.slug ?? item.name,
                            subItem.name
                          )}
                        >
                          <a className="btn btn-link stretched-link px-0">
                            Learn more
                            <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col">
              {colTwo.map((item) => {
                const [subItem] = item.subItems;
                return (
                  <div
                    key={item.name}
                    className="card card-hover bg-secondary border-0 mb-4"
                  >
                    <div className="card-body d-flex align-items-start">
                      <div className="flex-shrink-0 bg-light rounded-3 p-3">
                        <Image
                          src="/assets/img/cardiology.svg"
                          width="28"
                          height={28}
                          alt="Icon"
                        />
                      </div>
                      <div className="ps-4">
                        <h3 className="h5 pb-2 mb-1">{item.name}</h3>
                        <p className="pb-2 mb-1">
                          Id mollis consectetur congue egestas egestas
                          suspendisse blandit justo.
                        </p>
                        <Link
                          href={Routes.services(
                            item.slug ?? item.name,
                            subItem.name
                          )}
                        >
                          <a className="btn btn-link stretched-link px-0">
                            Learn more
                            <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
