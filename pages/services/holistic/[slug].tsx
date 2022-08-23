import { NextPage } from 'next';
import { Footer } from '../../../components/Footer';
import { Navbar } from '../../../components/Navbar';
import { Holistic } from '../../../sections/holistic';

const Page: NextPage = () => {
  return (
    <main className="page-wrapper">
      <Navbar />
      <Holistic />
      <Footer />
    </main>
  );
};

export default Page;
