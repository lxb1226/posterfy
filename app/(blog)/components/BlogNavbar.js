import Link from 'next/link';

export default function BlogNavbar() {
  return (
    <nav className='blog-navbar'>
      <div className='blog-navbar-content'>
        <Link href='/' className='blog-logo'>
          Posterfy
        </Link>

        <div className='blog-nav'>
          <Link href='/' className='blog-nav-link'>
            Home
          </Link>
          <Link href='/blog' className='blog-nav-link'>
            Blog
          </Link>
          <Link href='/about' className='blog-nav-link'>
            About
          </Link>
          <Link href='/faq' className='blog-nav-link'>
            FAQ
          </Link>
          <Link href='/search' className='blog-nav-link'>
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
