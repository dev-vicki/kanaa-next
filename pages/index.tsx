import type { NextPage } from 'next';
import { AboutKanaa } from '../sections/about-kanaa';

const Home: NextPage = () => {
  return (
    // <!-- Page wrapper for sticky footer -->
    // <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
    <main className="page-wrapper">
      <AboutKanaa />
    </main>
  );
};

export default Home;
