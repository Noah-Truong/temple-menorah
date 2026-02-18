import PageHeader from '@/components/PageHeader';
import CategoryCard from '@/components/CategoryCard';

const educationPages = [
  {
    title: 'Adult Education',
    description: 'Lifelong learning opportunities including Introduction to Judaism, Torah study, Hebrew classes, and special lecture series.',
    href: '/adult-education',
    image: '/images/education/adult-education.jpg',
  },
  {
    title: "B'nai Mitzvah",
    description: "Our comprehensive B'nai Mitzvah program prepares students to lead services, read from the Torah, and deliver a meaningful D'var Torah.",
    href: '/bnai-mitzvah',
    image: '/images/education/bnai-mitzvah.jpg',
  },
  {
    title: 'JLL - Jewish Living and Learning',
    description: 'Our Religious School provides comprehensive Jewish education for children from kindergarten through 7th grade.',
    href: '/jll',
    image: '/images/education/religious-school.jpg',
  },
  {
    title: 'Tichon Program',
    description: "Post-B'nai Mitzvah education for students in 8th through 12th grade, focusing on social justice, identity, and leadership.",
    href: '/tichon-program',
    image: '/images/education/tichon.jpg',
  },
  {
    title: 'Tuvia Preschool',
    description: 'Early childhood education with a Jewish foundation for children ages 2 years through Pre-K. Temple members receive tuition reduction.',
    href: '/tuvia-preschool',
    image: '/images/education/tuvia-preschool.jpg',
  },
];

export default function EducationPage() {
  return (
    <div>
      <PageHeader 
        title="Education" 
        subtitle="Learning opportunities for all ages"
        heroImage="/images/education/hero.jpg"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-10 mb-14 bg-[var(--accent)]">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                Education is at the heart of Jewish life. Temple Menorah offers comprehensive educational 
                programs for every age, from our award-winning preschool to adult learning opportunities. 
                Whether you&apos;re preparing for a Bar or Bat Mitzvah, exploring Judaism, or deepening your 
                knowledge, we have a program for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationPages.map((page) => (
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
