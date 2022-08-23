export function Steps({
  items,
}: {
  items: { title?: string; description: string }[];
}) {
  return (
    <>
      <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">
        Treatment steps
      </h2>
      <div className="steps steps-sm">
        {items.map((step, index) => (
          <div key={step.description} className="step">
            <div className="step-number">
              <div className="step-number-inner">{index + 1}</div>
            </div>
            <div className="step-body">
              {step.title && <h4 className="mb-2">{step.title}</h4>}
              <div
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: step.description }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
