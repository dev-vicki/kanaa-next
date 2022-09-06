import { NextPage } from 'next';
import { Branches } from '../sections/branches';
import { ContactForm } from '../sections/contact-form';
import { SocialNetworks } from '../sections/social-networks';

const ContactUsPage: NextPage = () => {
  return (
    <>
      <ContactForm />
      <Branches />
      <SocialNetworks />
    </>
  );
};

export default ContactUsPage;
