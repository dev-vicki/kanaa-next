import { NextPage } from 'next';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Branches } from '../sections/branches';
import { ContactForm } from '../sections/contact-form';
import { SocialNetworks } from '../sections/social-networks';

const ContactUsPage: NextPage = () => {
  return (
    <main className="page-wrapper">
      <Navbar />
      <ContactForm />
      <Branches />
      <SocialNetworks />
      <Footer />
    </main>
  );
};

export default ContactUsPage;
