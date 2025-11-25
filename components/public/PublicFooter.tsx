'use client';

export default function PublicFooter() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-bold">Mountain Honey</h4>
          <p className="mt-2 text-gray-300">
            Pure, natural honey straight from the mountains.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-2 text-gray-300">support@mountainhoney.example</p>
          <p className="mt-1 text-gray-300">+250 000 000</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} Mountain Honey — All rights reserved
      </div>
    </footer>
  );
}
