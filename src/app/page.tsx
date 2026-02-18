import Image from 'next/image';
import Link from 'next/link';

const upcomingEvents = [
  { date: '02/19/26', time: '7:30PM', title: 'Board of Trustees Meeting' },
  { date: '02/20/26', time: '6:30PM', title: 'Shabbat Evening Service - Third and Fourth Grade Shabbat Program' },
  { date: '02/21/26', time: '10:00AM', title: 'Shabbat Morning Service' },
  { date: '02/24/26', time: '7:00PM', title: 'Introduction to Judaism' },
];

const connections = [
  'Individuals and Jewish Tradition',
  'Tradition and Modern Life',
  'The Synagogue, Israel and the Broader World',
  'People and All Their Diversity',
  'Every Human Soul and God',
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-28 md:py-36 min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero1.jpg"
            alt="Temple Menorah"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 to-[var(--primary-light)]/80"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              Welcome to Temple Menorah
            </h1>
            <p className="text-xl md:text-2xl mb-14 opacity-95 leading-relaxed">
              We are a Reform Jewish community that cultivates connections between:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {connections.map((connection, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-lg font-medium border border-white/25"
                >
                  {connection}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
              <Link href="/membership" className="btn-primary bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[#b8921f] px-8 py-4">
                New Member Application
              </Link>
              <Link href="/membership" className="btn-primary bg-white/20 hover:bg-white/30 border border-white/40 px-8 py-4">
                5786 Membership Renewal
              </Link>
              <Link href="/high-holy-days" className="btn-primary bg-white/20 hover:bg-white/30 border border-white/40 px-8 py-4">
                High Holy Days Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-24 bg-[var(--accent)]">
        <div className="container mx-auto px-8">
          <h2 className="section-title text-center mx-auto w-fit">What&apos;s New @Temple_Menorah</h2>
          
          <div className="grid lg:grid-cols-2 gap-14 mt-14">
            {/* Upcoming Events */}
            <div className="card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-10">Upcoming February Events</h3>
              <div className="space-y-8">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex gap-6 items-start pb-8 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="bg-[var(--primary)] text-white rounded-lg px-5 py-4 text-center min-w-[100px] flex-shrink-0">
                      <div className="text-sm font-medium opacity-80">{event.date}</div>
                      <div className="text-lg font-bold mt-1">{event.time}</div>
                    </div>
                    <div className="pt-1">
                      <p className="text-xl font-medium text-[var(--foreground)] leading-relaxed">{event.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/calendar" className="inline-block mt-10 text-lg text-[var(--primary)] font-semibold hover:text-[var(--primary-light)]">
                See More Upcoming Events →
              </Link>
            </div>

            {/* Featured Happenings */}
            <div className="space-y-8">
              <div className="card p-8">
                <h4 className="text-xl font-bold text-[var(--secondary)] mb-5">Shabbat Services</h4>
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                  Shabbat Services are held every week on <strong>Fridays at 6:30 PM</strong> and <strong>Saturdays at 10:00 AM</strong>. 
                  Virtual access is also available. Please email{' '}
                  <a href="mailto:info@templemenorah.org" className="text-[var(--primary)] hover:underline">
                    info@templemenorah.org
                  </a>{' '}
                  for more information.
                </p>
              </div>

              <div className="card p-8">
                <h4 className="text-xl font-bold text-[var(--secondary)] mb-5">Introduction to Judaism</h4>
                <p className="text-lg text-[var(--foreground)] leading-relaxed mb-5">
                  Whether you are considering conversion, love someone who is considering conversion, or simply want to 
                  learn more about Jewish life, this engaging 18-week course will open your mind and your heart to the wonders 
                  of Judaism through a Reform lens.
                </p>
                <p className="text-lg font-semibold text-[var(--primary)]">
                  TUESDAYS, BEGINNING DECEMBER 2 | 7:00-8:30 PM
                </p>
              </div>

              <div className="card p-8 bg-gradient-to-br from-[var(--secondary)] to-[#d4af37] text-[var(--foreground)]">
                <h4 className="text-xl font-bold mb-5">Purim 5786: A Must-See Megillah</h4>
                <p className="text-lg leading-relaxed mb-5">
                  Join us to celebrate Purim with all your favorite classic television show characters! Boo for Haman and 
                  cheer for Esther with selections from the Megillah plus a brand-new Purim Shpiel and parody songs!
                </p>
                <p className="text-lg font-semibold">
                  March 1, 2026 | 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rabbi's Message Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-14">
            <div className="card p-8 md:p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                  <Image
                    src="/images/clergy/rabbi-schuldenfrei.jpg"
                    alt="Rabbi Deborah Schuldenfrei"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">Rabbi&apos;s Message</h3>
                  <p className="text-base text-[var(--text-muted)]">Weekly reflections</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[var(--secondary)] mb-5">
                Welcome From Interim Rabbi Schuldenfrei
              </h4>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-5">
                Welcome to Temple Menorah! We can&apos;t wait to introduce you to our synagogue community where it will 
                always feel like home. Temple Menorah is a place to gather, it is a place to celebrate and it is a 
                place to seek and experience the blessings and holiness in our lives.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-5">
                We know that once you walk through our doors you will belong to something bigger.
              </p>
              <p className="text-lg italic text-[var(--text-muted)]">
                Warmly,<br />
                <strong>Rabbi Deborah Schuldenfrei</strong><br />
                Interim Senior Rabbi
              </p>
              <Link href="/rabbi-blog" className="inline-block mt-8 text-lg text-[var(--primary)] font-semibold hover:text-[var(--primary-light)]">
                View Archives →
              </Link>
            </div>

            <div className="card p-8 md:p-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                  <Image
                    src="/images/clergy/cantor.jpg"
                    alt="Cantor Fine"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">Cantor&apos;s Corner</h3>
                  <p className="text-base text-[var(--text-muted)]">Spiritual notes</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[var(--secondary)] mb-5">
                Spiritual Notes by Cantor Fine
              </h4>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-5">
                My first post is coming soon! Please be patient while I begin to put my thoughts together.
              </p>
              <Link href="/cantor-blog" className="inline-block mt-8 text-lg text-[var(--primary)] font-semibold hover:text-[var(--primary-light)]">
                View Archives →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Welcome to Temple Menorah!</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-10 opacity-95">
              We can&apos;t wait to introduce you to our synagogue community where it will always feel like home.
            </p>
            <p className="text-xl leading-relaxed mb-10 opacity-95">
              Temple Menorah is a place to gather, it is a place to celebrate and it is a place to seek and 
              experience the blessings and holiness in our lives. We know that once you walk through our doors 
              you will belong to something bigger.
            </p>
            <p className="text-2xl font-semibold text-[var(--secondary)]">
              Hope to see you real soon.
            </p>
            <div className="mt-14">
              <Link href="/membership" className="btn-secondary px-10 py-5 text-xl">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
