import PageHeader from '@/components/PageHeader';
import CategoryCard from '@/components/CategoryCard';

const worshipPages = [
  {
    title: 'High Holy Days',
    description: 'Join us for meaningful Rosh Hashanah and Yom Kippur services. Registration required for members and guests.',
    href: '/high-holy-days',
    image: '/images/worship/high-holy-days.jpg',
  },
  {
    title: 'Weekly Parsha',
    description: 'Explore the weekly Torah portion with our community. Join us for Shabbat morning services where we read and discuss the Parsha.',
    href: '/weekly-parsha',
    image: '/images/worship/weekly-parsha.jpg',
  },
  {
    title: 'Shabbat Services',
    description: 'Experience the peace and joy of the Jewish Sabbath. Friday evening services at 6:30 PM, Saturday morning services at 10:00 AM.',
    href: '/shabbat-services',
    image: '/images/worship/shabbat-services.jpg',
  },
  {
    title: 'Special Services',
    description: 'Throughout the year, we offer unique worship experiences including musical Shabbats, outdoor services, and holiday celebrations.',
    href: '/special-services',
    image: '/images/worship/special-services.jpg',
  },
];

export default function WorshipPage() {
  return (
    <div>
      <PageHeader 
        title="Worship" 
        subtitle="Meaningful spiritual experiences for our community"
        heroImage="/images/worship/hero.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 mb-14 bg-[var(--accent)]">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                At Temple Menorah, worship is at the center of our community life. Our services blend 
                beautiful music, meaningful prayer, and engaging teaching to create spiritual experiences 
                that inspire and connect us. As a beach cities congregation, we embrace a casual, 
                welcoming atmosphere—come as you are.
              </p>
            </div>

            <div className="card p-8 md:p-10 mb-14 bg-[var(--primary)] text-white">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-6">Weekly Service Schedule</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Friday Evening</h4>
                  <p className="text-lg opacity-95">6:30 PM (Nosh at 6:00 PM)</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Saturday Morning</h4>
                  <p className="text-lg opacity-95">10:00 AM</p>
                </div>
              </div>
              <p className="text-lg opacity-90 mt-6">
                Virtual access available. Email{' '}
                <a href="mailto:info@templemenorah.org" className="text-[var(--secondary)] hover:text-white underline">
                  info@templemenorah.org
                </a>{' '}
                for connection details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {worshipPages.map((page) => (
                <CategoryCard
                  key={page.title}
                  title={page.title}
                  description={page.description}
                  href={page.href}
                  image={page.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
