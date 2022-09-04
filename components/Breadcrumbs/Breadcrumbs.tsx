import Link from 'next/link';

export function Breadcrumbs({
  items,
  className,
}: {
  items: Array<{ name: string; href: string }>;
  className?: string;
}) {
  return (
    <nav
      className={`container pt-4 mt-lg-3 ${className}`}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>
              <i className="bx bx-home-alt fs-lg me-1"></i>Home
            </a>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.name}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
            >
              {isLast ? (
                item.name
              ) : (
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              )}
            </li>
          );
        })}

        {/* <li className="breadcrumb-item active" aria-current="page">
        Podcast
      </li> */}
      </ol>
    </nav>
  );
}
