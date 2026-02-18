'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigationItems = [
  {
    title: 'Leadership',
    href: '/leadership',
    items: [
      { name: 'Clergy', href: '/clergy' },
      { name: 'Staff', href: '/staff' },
      { name: 'History', href: '/history' },
    ],
  },
  {
    title: 'Community',
    href: '/community',
    items: [
      { name: 'Membership', href: '/membership' },
      { name: 'Calendar', href: '/calendar' },
      { name: "What's New?", href: '/whats-new' },
      { name: 'Chavurot', href: '/chavurot' },
      { name: 'Banquet Facility', href: '/banquet-facility' },
    ],
  },
  {
    title: 'Youth',
    href: '/youth',
    items: [
      { name: 'Camp Menorah', href: '/camp-menorah' },
      { name: 'Kids Night Out', href: '/kids-night-out' },
      { name: 'SBJT', href: '/sbjt' },
      { name: 'Madrichim', href: '/madrichim' },
    ],
  },
  {
    title: 'Education',
    href: '/education',
    items: [
      { name: 'Adult Education', href: '/adult-education' },
      { name: "B'nai Mitzvah", href: '/bnai-mitzvah' },
      { name: 'JLL', href: '/jll' },
      { name: 'Tichon Program', href: '/tichon-program' },
      { name: 'Tuvia Preschool', href: '/tuvia-preschool' },
    ],
  },
  {
    title: 'Worship',
    href: '/worship',
    items: [
      { name: 'High Holy Days', href: '/high-holy-days' },
      { name: 'Weekly Parsha', href: '/weekly-parsha' },
      { name: 'Shabbat Services', href: '/shabbat-services' },
      { name: 'Special Services', href: '/special-services' },
    ],
  },
  {
    title: 'Blogs',
    href: '/rabbi-blog',
    items: [
      { name: 'Rabbi', href: '/rabbi-blog' },
      { name: 'Cantor', href: '/cantor-blog' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/logos/logo.png"
              alt="Temple Menorah"
              width={180}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={category.href}
                  className="px-3 py-2 text-base font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                >
                  {category.title}
                  <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 min-w-[220px] transform transition-all duration-200 ${
                    activeDropdown === category.title
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2.5 text-base text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[var(--primary)] text-white rounded-lg text-base font-medium hover:bg-[var(--primary-light)] transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-6">
            {navigationItems.map((category) => (
              <div key={category.title} className="border-b border-gray-100">
                <div className="flex items-center">
                  <Link
                    href={category.href}
                    className="flex-grow px-4 py-4 text-xl font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.title}
                  </Link>
                  <button
                    className="px-4 py-4"
                    onClick={() => setActiveDropdown(activeDropdown === category.title ? null : category.title)}
                    aria-label={`Expand ${category.title} submenu`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform ${activeDropdown === category.title ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {activeDropdown === category.title && (
                  <div className="bg-[var(--accent)] py-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-8 py-3 text-lg text-[var(--foreground)] hover:text-[var(--primary)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-4 px-6 py-4 bg-[var(--primary)] text-white rounded-lg text-xl font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>

      <div className="bg-[var(--primary)] text-white py-2">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4 md:gap-8 text-base">
          <Link href="/login" className="hover:text-[var(--secondary)] transition-colors">LOGIN</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/shulcloud" className="hover:text-[var(--secondary)] transition-colors">SHULCLOUD</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/calendar" className="hover:text-[var(--secondary)] transition-colors">CALENDAR</Link>
          <span className="hidden md:inline">|</span>
          <a href="tel:3103168444" className="hover:text-[var(--secondary)] transition-colors">(310) 316-8444</a>
        </div>
      </div>
    </header>
  );
}
