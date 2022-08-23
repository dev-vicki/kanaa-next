export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="container pt-1 pt-lg-3 mb-5">
      <div className="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">
        <div className="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
          <img
            src="/assets/img/patterns/pattern-1.svg"
            className="position-absolute top-0 start-100 translate-middle ms-n4"
            alt="Pattern"
          />
          <img
            src="/assets/img/patterns/pattern-2.svg"
            className="position-absolute top-50 start-0 mt-n5 ms-n5"
            alt="Pattern"
          />
          <img
            src="/assets/img/patterns/pattern-3.svg"
            className="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5"
            alt="Pattern"
          />
        </div>

        <div className="row justify-content-center position-relative zindex-2 py-lg-4">
          <div className="col-xl-8 col-lg-9 col-md-10 py-2">
            <h2 className="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">
              Frequently Asked Questions
            </h2>
            <div className="accordion" id="faq">
              {items.map(({ answer, question }, index) => (
                <div
                  key={question}
                  className="accordion-item border-0 rounded-3 shadow-sm mb-3"
                >
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button shadow-none rounded-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#q-${index + 1}`}
                      aria-controls={`q-${index + 1}`}
                    >
                      {question}
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id={`q-${index + 1}`}
                    data-bs-parent="#faq"
                  >
                    <div
                      className="accordion-body fs-sm pt-0"
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
