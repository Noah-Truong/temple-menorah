import PageHeader from '@/components/PageHeader';
import CategoryCardHorizontal from '@/components/CategoryCardHorizontal';

const MembershipIcon = () => (
  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const ChavurotIcon = () => (
  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const communityPages = [
  {
    title: 'Membership',
    description: 'Join our warm and welcoming community. Learn about membership benefits, dues, and how to become part of the Temple Menorah family.',
    href: '/membership',
    icon: <MembershipIcon />,
  },
  {
    title: 'Calendar',
    description: 'Stay connected with upcoming services, events, classes, and community gatherings. View our full schedule of activities.',
    href: '/calendar',
    image: '/images/community/calendar.jpg',
  },
  {
    title: "What's New?",
    description: 'Keep up with the latest news, announcements, and happenings at Temple Menorah.',
    href: '/whats-new',
    image: '/images/community/news.jpg',
  },
  {
    title: 'Chavurot',
    description: 'Connect with fellow congregants through small friendship groups organized around shared interests and life stages.',
    href: '/chavurot',
    icon: <ChavurotIcon />,
  },
  {
    title: 'Volunteers',
    description: 'Temple Menorah thrives because of our dedicated volunteers. Discover how you can give back to your community.',
    href: '/volunteers',
    image: '/images/community/volunteer.jpg',
  },
  {
    title: 'Social Action',
    description: 'Live your Jewish values through Tikkun Olam. Join our efforts to repair the world through service and advocacy.',
    href: '/social-action',
    image: '/images/community/social-action.jpg',
  },
  {
    title: 'Banquet Facility',
    description: "Host your special celebrations at Temple Menorah. Our beautiful facilities are available for B'nai Mitzvah, weddings, and more.",
    href: '/banquet-facility',
    image: '/images/community/banquet.jpg',
  },
  {
    title: 'Donate',
    description: 'Support Temple Menorah with a tax-deductible donation. Your generosity helps sustain our programs and community.',
    href: '/donate',
    image: '/images/community/donations.jpg',
  },
];

export default function CommunityPage() {
  return (
    <div>
      <PageHeader 
        title="Community" 
        subtitle="A welcoming home for Jewish life in the South Bay"
        heroImage="/images/community/hero.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 mb-14 bg-[var(--accent)]">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                Temple Menorah serves the Jewish communities of El Segundo, Manhattan Beach, Hermosa Beach, 
                Redondo Beach, Torrance, and the Palos Verdes Peninsula. We are a welcoming Reform Jewish 
                congregation that embraces diversity and creates meaningful connections.
              </p>
            </div>

            <div className="space-y-8">
              {communityPages.map((page, index) => (
                <CategoryCardHorizontal
                  key={page.title}
                  title={page.title}
                  description={page.description}
                  href={page.href}
                  image={page.image}
                  icon={page.icon}
                  imageOnRight={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
