import { NextPage } from 'next';

import { VisionAndMission } from '../sections/vision-mission';
import { SocialNetworks } from '../sections/social-networks';
import { Values } from '../sections/values';

import valuesData from '../data/values.json';

const AboutUsPage: NextPage<{ navbar: any }> = ({ navbar }) => {
  return (
    <>
      <VisionAndMission />
      <Values items={valuesData.items} />
      <SocialNetworks />
    </>
  );
};

export default AboutUsPage;
