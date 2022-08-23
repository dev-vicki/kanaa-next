import { GetStaticPropsContext, NextPage } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { VisionAndMission } from '../sections/vision-mission';
import { SocialNetworks } from '../sections/social-networks';
export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const jsonDirectory = path.join(process.cwd(), '/data');
    const fileContents = await fs.readFile(
      jsonDirectory + '/navbar.json',
      'utf8'
    );
    const objectData = JSON.parse(fileContents);

    return {
      props: { navbar: objectData },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        navbar: {
          items: [],
        },
      },
    };
  }
}

const AboutUsPage: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    <main className="page-wrapper">
      <Navbar items={navbar.items} />
      <VisionAndMission />
      <SocialNetworks />
      <Footer />
    </main>
  );
};

export default AboutUsPage;
