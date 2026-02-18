import Link from 'next/link';

const footerLinks = {
  Leadership: [
    { name: 'Clergy', href: '/clergy' },
    { name: 'Staff', href: '/staff' },
    { name: 'History', href: '/history' },
  ],
  Community: [
    { name: 'Membership', href: '/membership' },
    { name: 'Calendar', href: '/calendar' },
    { name: "What's New?", href: '/whats-new' },
    { name: 'Chavurot', href: '/chavurot' },
    { name: 'Volunteers', href: '/volunteers' },
    { name: 'Social Action', href: '/social-action' },
    { name: 'Banquet Facility', href: '/banquet-facility' },
    { name: 'Donate', href: '/donate' },
  ],
  Youth: [
    { name: 'Camp Menorah', href: '/camp-menorah' },
    { name: 'Kids Night Out', href: '/kids-night-out' },
    { name: 'SBJT', href: '/sbjt' },
    { name: 'Madrichim', href: '/madrichim' },
  ],
  Education: [
    { name: 'Adult Education', href: '/adult-education' },
    { name: "B'nai Mitzvah", href: '/bnai-mitzvah' },
    { name: 'JLL', href: '/jll' },
    { name: 'Tichon Program', href: '/tichon-program' },
    { name: 'Tuvia Preschool', href: '/tuvia-preschool' },
  ],
  Worship: [
    { name: 'High Holy Days', href: '/high-holy-days' },
    { name: 'Weekly Parsha', href: '/weekly-parsha' },
    { name: 'Shabbat Services', href: '/shabbat-services' },
    { name: 'Special Services', href: '/special-services' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{marginTop: '30px'}}>
              <h3 className="text-xl font-bold mb-6 text-[var(--secondary)]">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lg text-gray-300 hover:text-white transition-colors leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold mb-3">Temple Menorah</p>
              <p className="text-lg text-gray-300">of the South Bay in Redondo Beach</p>
            </div>
            
            <div className="text-center md:text-right">
              <a
                href="tel:3103168444"
                className="text-2xl font-bold text-[var(--secondary)] hover:text-white transition-colors"
              >
                (310) 316-8444
              </a>
              <p className="text-lg text-gray-300 mt-3">
                <a href="mailto:info@templemenorah.org" className="hover:text-white transition-colors">
                  info@templemenorah.org
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-14 pt-10 border-t border-gray-600">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Temple Menorah - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
