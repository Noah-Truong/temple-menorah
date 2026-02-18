import PageHeader from '@/components/PageHeader';
import CategoryCard from '@/components/CategoryCard';

const leadershipPages = [
  {
    title: 'Clergy',
    description: 'Meet our dedicated spiritual leaders including our Interim Senior Rabbi, Rabbi-Educator, and Rabbi Emeritus who guide our community with wisdom and compassion.',
    href: '/clergy',
    image: '/images/leadership/clergy.jpg',
  },
  {
    title: 'Staff',
    description: 'Our committed staff members work tirelessly to ensure the smooth operation of Temple Menorah and support our vibrant community programs.',
    href: '/staff',
    image: '/images/leadership/staff.jpg',
  },
  {
    title: 'History',
    description: 'Discover the rich history of Temple Menorah, from its founding in 1946 to becoming the welcoming Reform Jewish community we are today.',
    href: '/history',
    image: '/images/leadership/history.jpg',
  },
];

export default function LeadershipPage() {
  return (
    <div>
      <PageHeader 
        title="Leadership" 
        subtitle="Meet the dedicated leaders who guide our community"
        heroImage="/images/leadership/hero.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 mb-14 bg-[var(--accent)]">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                Temple Menorah is blessed with exceptional leadership. Our clergy, staff, and lay leaders 
                work together to create a welcoming, inclusive community where everyone can connect with 
                Jewish tradition, find meaning, and build lasting relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadershipPages.map((page) => (
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
