'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: scrolled ? -6 : 0,
      boxShadow: scrolled
        ? '0 6px 20px rgba(0,0,0,0.08)'
        : '0 0px 0px rgba(0,0,0,0)',
    });
  }, [scrolled, controls]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="fixed top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-sm"
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl">🍯</span>
            <span className="text-xl font-extrabold tracking-tight">MH</span>
          </Link>
        </div>

        {/* Search (desktop) */}
        <div className="mx-6 hidden flex-1 items-center gap-3 md:flex">
          <div className="relative w-full max-w-md">
            <input
              aria-label="Search products"
              placeholder="Search honey, pollen, gift packs..."
              className="w-full rounded-full border border-gray-200 py-2 pr-28 pl-4 shadow-sm focus:ring-2 focus:ring-yellow-300 focus:outline-none"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold text-black transition hover:bg-yellow-600">
              Search
            </button>
          </div>
        </div>

        {/* Links & icons */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-lg md:flex">
            <Link href="/" className="transition hover:text-yellow-600">
              Home
            </Link>
            <Link href="/product" className="transition hover:text-yellow-600">
              Shop
            </Link>
            <Link href="/category" className="transition hover:text-yellow-600">
              Categories
            </Link>
            <Link href="/about" className="transition hover:text-yellow-600">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-yellow-600">
              Contact
            </Link>
          </div>

          {/* Account (desktop) */}
          <Link
            href="auth/register"
            className="hidden items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100 md:inline-flex"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.761 0 5.303.88 7.379 2.368M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">Account</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v9"
              />
            </svg>
            <span className="sr-only">Cart</span>
            {/* placeholder count */}
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-yellow-500 px-2 py-0.5 text-xs font-bold text-black">
              2
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`transition-max-height overflow-hidden bg-white duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="space-y-2 px-4 py-3">
          <Link href="/" className="block rounded px-3 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link
            href="/shop"
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
