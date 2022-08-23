import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';

interface Faq {
  question: string;
  answer: string;
}
interface Treatment {
  title: string;
  description: string;
  image: string;
  faq: Faq[];
}

const treatmentsDirectory = path.join(process.cwd(), '/data/treatments');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = await fs.readdir(treatmentsDirectory);
  console.log({ filenames });

  return {
    paths: filenames.map((filename) => ({
      params: { slug: filename.replace('.json', '') },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ data: Treatment }> = async (
  context
) => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const fileContents = await fs.readFile(
      treatmentsDirectory + `/${params.slug}.json`,
      'utf8'
    );
    const objectData = JSON.parse(fileContents) as Treatment;

    return {
      props: { data: objectData },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({ data });

  return (
    <main className="page-wrapper">
      <Navbar />
      <section className="container pt-4 pb-5 mb-lg-5">
        <nav className="d-md-none pb-3 mb-2 mb-lg-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>
                  <i className="bx bx-home-alt fs-lg me-1"></i>Home
                </a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Services</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {data.title}
            </li>
          </ol>
        </nav>

        <div className="row row-cols-1 row-cols-md-2 g-0 pb-2">
          <div
            className="col order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
            style={{
              backgroundImage: `url(/assets/img${data.image})`,
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
                  <Link href="/">
                    <a>
                      <i className="bx bx-home-alt fs-lg me-1"></i>Home
                    </a>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Services</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data.title}
                </li>
              </ol>
            </nav>

            <div className="bg-secondary rounded-3 p-4 p-lg-5 mt-n2 mt-md-0 me-md-n2">
              <div className="px-sm-3 px-xl-4 pt-4 py-md-3 py-lg-4 py-xl-5">
                <h1 className="pb-2 pb-xxl-3">{data.title}</h1>
                <div
                  className="pb-2 mb-4 mb-xxl-5"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
                {/* <div className="d-xxl-flex align-items-center">
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
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
