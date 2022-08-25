import Link from 'next/link';

export function Breadcrumbs({
  items,
}: {
  items: Array<{ name: string; href: string }>;
}) {
  return (
    <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>
              <i className="bx bx-home-alt fs-lg me-1"></i>Home
            </a>
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.name} className="breadcrumb-item">
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}

        {/* <li className="breadcrumb-item active" aria-current="page">
        Podcast
      </li> */}
      </ol>
    </nav>
  );
}
