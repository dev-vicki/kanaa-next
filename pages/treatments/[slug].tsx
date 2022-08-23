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
  return <div>Hello</div>;
};
