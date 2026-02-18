import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function ShabbatServicesPage() {
  return (
    <div>
      <PageHeader 
        title="Shabbat Services" 
        subtitle="Experience the peace and joy of the Jewish Sabbath"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* What is Shabbat */}
            <div className="card mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">What is Shabbat?</h2>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-6">
                Shabbat, the Jewish Sabbath, is our weekly Day of Rest. It begins on Friday evening at sundown 
                and ends on Saturday evening, traditionally lasting 25 hours. Shabbat is a time for gratitude, 
                community, and spiritual growth.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                The observance of Shabbat is the Fourth of the Ten Commandments, based on the Creation story 
                in which God rested on the seventh day. It invites us to pause from our weekly labors and 
                reconnect with what matters most.
              </p>
            </div>

            {/* Service Times */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card bg-[var(--primary)] text-white">
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-4">Friday Evening</h3>
                <div className="text-4xl font-bold mb-2">6:30 PM</div>
                <p className="text-lg opacity-90 mb-4">
                  Join us at 6:00 PM for our pre-service Nosh
                </p>
                <p className="text-lg opacity-90">
                  Our Friday evening service welcomes Shabbat with prayer, song, and community.
                </p>
              </div>

              <div className="card bg-[var(--secondary)] text-[var(--foreground)]">
                <h3 className="text-2xl font-bold mb-4">Saturday Morning</h3>
                <div className="text-4xl font-bold mb-2">10:00 AM</div>
                <p className="text-lg mb-4">
                  Garden Room
                </p>
                <p className="text-lg">
                  A traditional Shabbat morning service including Torah reading and discussion.
                </p>
              </div>
            </div>

            {/* Shabbat Meals */}
            <div className="card mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Shabbat Traditions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4">Shabbat Meals</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed mb-4">
                    Traditionally, three meals are shared during Shabbat: Friday dinner, Saturday lunch, and 
                    a late afternoon meal. The Friday night dinner is the most popular gathering for Reform Jews.
                  </p>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    Traditional foods include <strong>Challah</strong> (braided bread) and <strong>wine</strong> 
                    for the blessings that mark the beginning of Shabbat.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-4">Havdalah</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    Shabbat concludes with the Havdalah service, a beautiful ceremony marking the separation 
                    between the sacred time of Shabbat and the regular week. The ceremony includes blessings 
                    over wine, spices, and a braided candle.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="card bg-[var(--accent)] mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">Dress Code</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    As a beach cities community, we embrace a casual and comfortable atmosphere. 
                    <strong> No formality required</strong>—come as you are! Men may wear a yarmulke 
                    (kippah), which is available at the entrance for those who wish to wear one.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">Virtual Access</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    Can&apos;t make it in person? Virtual access is available for our services. 
                    Please email{' '}
                    <a href="mailto:info@templemenorah.org" className="text-[var(--primary)] hover:underline font-semibold">
                      info@templemenorah.org
                    </a>{' '}
                    for connection details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">First Time Visitors</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    We warmly welcome visitors to our Shabbat services. Our community is friendly and 
                    inclusive—you&apos;ll find someone happy to help you follow along and feel at home.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Shabbat Programs */}
            <div className="card mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Special Shabbat Programs</h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Family Shabbat Jam</h3>
                  <p className="text-lg text-[var(--text-muted)]">
                    A musical, family-friendly Shabbat experience perfect for young children and their families.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Grade-Specific Shabbat Programs</h3>
                  <p className="text-lg text-[var(--text-muted)]">
                    Special services throughout the year featuring our Religious School students.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Shabbat Across Menorah</h3>
                  <p className="text-lg text-[var(--text-muted)]">
                    Connect with fellow congregants through home-hosted Shabbat dinners.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-xl text-[var(--foreground)] mb-6">
                Join us this Shabbat and experience the warmth of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/calendar" className="btn-primary">
                  View Full Calendar
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
