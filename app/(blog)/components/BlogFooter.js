import Link from 'next/link';

export default function BlogFooter() {
  return (
    <footer className='blog-footer'>
      <div className='blog-footer-content'>
        <div className='blog-footer-grid'>
          <div className='blog-footer-section'>
            <h3>Company</h3>
            <ul className='blog-footer-links'>
              <li>
                <Link href='/about' className='blog-footer-link'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/blog' className='blog-footer-link'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/contact' className='blog-footer-link'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='blog-footer-section'>
            <h3>Product</h3>
            <ul className='blog-footer-links'>
              <li>
                <Link href='/' className='blog-footer-link'>
                  Create Poster
                </Link>
              </li>
              <li>
                <Link href='/search' className='blog-footer-link'>
                  Search Albums
                </Link>
              </li>
              <li>
                <Link href='/faq' className='blog-footer-link'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className='blog-footer-section'>
            <h3>Legal</h3>
            <ul className='blog-footer-links'>
              <li>
                <Link href='/privacy' className='blog-footer-link'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms' className='blog-footer-link'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='blog-footer-copyright'>
          © 2024 Posterfy. All rights reserved. Create stunning album posters
          with music visualization.
        </div>
      </div>
    </footer>
  );
}
