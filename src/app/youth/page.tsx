import PageHeader from '@/components/PageHeader';
import CategoryCard from '@/components/CategoryCard';

const youthPages = [
  {
    title: 'Camp Menorah',
    description: 'Our summer day camp combines fun activities, Jewish learning, and lasting friendships in a safe, nurturing environment.',
    href: '/camp-menorah',
    image: '/images/youth/camp-menorah.jpg',
  },
  {
    title: 'Kids Night Out',
    description: 'Fun evenings for kids while parents enjoy a well-deserved night off. Games, activities, and supervised fun!',
    href: '/kids-night-out',
    image: '/images/youth/kids-night-out.jpg',
  },
  {
    title: 'SBJT - South Bay Jewish Teens',
    description: 'Our teen youth group brings together Jewish teens from across the South Bay for social events, community service, and leadership development.',
    href: '/sbjt',
    image: '/images/youth/youth-groups.jpg',
  },
  {
    title: 'Madrichim',
    description: 'High school students serve as teaching assistants in our Religious School, developing leadership skills while giving back to the community.',
    href: '/madrichim',
    image: '/images/youth/madrichim.jpg',
  },
];

export default function YouthPage() {
  return (
    <div>
      <PageHeader 
        title="Youth" 
        subtitle="Engaging programs for children and teens"
        heroImage="/images/youth/hero.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 mb-14 bg-[var(--accent)]">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                Temple Menorah offers vibrant youth programming that helps children and teens build 
                Jewish identity, develop leadership skills, and create lifelong friendships. From 
                summer camp to teen groups, there&apos;s something for every age.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {youthPages.map((page) => (
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
