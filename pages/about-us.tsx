import { NextPage } from 'next';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { VisionAndMission } from '../sections/vision-mission';
import { SocialNetworks } from '../sections/social-networks';
import { Values } from '../sections/values';

import valuesData from '../data/values.json';

const AboutUsPage: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    <main className="page-wrapper">
      <Navbar />
      <VisionAndMission />
      <Values items={valuesData.items} />
      <SocialNetworks />
      <Footer />
    </main>
  );
};

export default AboutUsPage;
