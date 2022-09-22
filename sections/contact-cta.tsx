import Link from 'next/link';

export function ContactCTA() {
  return (
    <section className="container mt-n2 mb-5">
      <div className="card border-0 bg-gradient-primary">
        <div
          className="card-body p-md-5 p-4 bg-size-cover"
          style={{ backgroundImage: 'url(/assets/img/contact-bg.png)' }}
        >
          <div className="py-md-5 py-4 text-center">
            <h3 className="h4 fw-normal text-light opacity-75">
              Want to work with us? Let’s talk
            </h3>
            <a href="mailto:care.kanaa@gmail.com " className="display-6 text-light">
              care.kanaa@gmail.com 
            </a>
            <div className="pt-md-5 pt-4 pb-md-2">
              <Link href="/contact-us">
                <a className="btn btn-lg btn-light">Contact us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
