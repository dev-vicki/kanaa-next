import type { GetStaticPropsContext, NextPage } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { AboutKanaa } from '../sections/about-kanaa';
import { InstagramPost } from '../sections/instagram-post';
import { WhyChooseKanaa } from '../sections/why-choose-kanaa';
import { WhyChooseUs } from '../sections/why-choose-us';
import { HeroSlider } from '../components/HeroSlider';

// export async function getStaticProps(context: GetStaticPropsContext) {
//   try {
//     const jsonDirectory = path.join(process.cwd(), '/data');
//     const fileContents = await fs.readFile(
//       jsonDirectory + '/navbar.json',
//       'utf8'
//     );
//     const objectData = JSON.parse(fileContents);

//     return {
//       props: { navbar: objectData },
//     };
//   } catch (e) {
//     console.log(e);
//     return {
//       props: {
//         navbar: {
//           items: [],
//         },
//       },
//     };
//   }
// }

const Home: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    // <!-- Page wrapper for sticky footer -->
    // <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
    <main className="page-wrapper">
      {/* <Script src="/assets/js/bootstrap.min.js" />
      <Script src="/assets/js/theme.min.js" /> */}
      <Navbar />
      <HeroSlider />
      <AboutKanaa />
      <WhyChooseUs />
      <WhyChooseKanaa />
      <InstagramPost />
      <Footer />
    </main>
  );
};

export default Home;
