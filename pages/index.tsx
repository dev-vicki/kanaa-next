import type { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { AboutKanaa } from '../sections/about-kanaa';
import { InstagramPost } from '../sections/instagram-post';
import { WhyChooseKanaa } from '../sections/why-choose-kanaa';
import { WhyChooseUs } from '../sections/why-choose-us';

const Home: NextPage = () => {
  return (
    // <!-- Page wrapper for sticky footer -->
    // <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
    <main className="page-wrapper">
      <AboutKanaa />
      <WhyChooseUs />
      <WhyChooseKanaa />
      <InstagramPost />
      <Footer />
    </main>
  );
};

export default Home;
