export function Values({
  items,
}: {
  items: { title: string; description: string; icon: string }[];
}) {
  console.log(items);

  return (
    <section className="container pt-4 pb-5 py-lg-5">
      <h2 className="h1 text-center pt-1 pt-md-3 pt-lg-4 pb-3 pb-md-4 mb-0 mb-lg-3">
        Our Values
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 g-xl-4 pb-md-3 pb-lg-5">
        {items.map((item) => (
          <div key={item.title} className="col">
            <div className="card h-100 card-hover bg-light border-0">
              <div className="bg-secondary rounded-3 w-auto lh-1 p-2 mt-4 ms-4 me-auto">
                <i
                  className={`bx bx-${item.icon} fs-2 text-gradient-primary`}
                  style={{ padding: '0.375rem' }}
                ></i>
              </div>
              <div className="card-body">
                <h3 className="h6">{item.title}</h3>
                <p className="fs-sm mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
