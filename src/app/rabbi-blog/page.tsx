import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const blogPosts = [
  {
    date: 'August 8, 2024',
    title: 'Welcome From Interim Rabbi Schuldenfrei',
    excerpt: 'Welcome to Temple Menorah! We can\'t wait to introduce you to our synagogue community where it will always feel like home. Temple Menorah is a place to gather, it is a place to celebrate and it is a place to seek and experience the blessings and holiness in our lives.',
    content: [
      'Welcome to Temple Menorah!',
      'We can\'t wait to introduce you to our synagogue community where it will always feel like home.',
      'Temple Menorah is a place to gather, it is a place to celebrate and it is a place to seek and experience the blessings and holiness in our lives.',
      'We know that once you walk through our doors you will belong to something bigger.',
      'Hope to see you real soon.',
    ],
    author: 'Rabbi Deborah Schuldenfrei',
    authorTitle: 'Interim Senior Rabbi',
  },
];

export default function RabbiBlogPage() {
  return (
    <div>
      <PageHeader 
        title="Rabbi's Message" 
        subtitle="Words of wisdom and reflection from our spiritual leaders"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={index} className="card mb-8">
                <div className="text-[var(--secondary)] font-semibold mb-2">{post.date}</div>
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">{post.title}</h2>
                <div className="space-y-4">
                  {post.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-[var(--foreground)] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-lg italic text-[var(--text-muted)]">
                    Warmly,
                  </p>
                  <p className="text-xl font-semibold text-[var(--foreground)]">{post.author}</p>
                  <p className="text-base text-[var(--text-muted)]">{post.authorTitle}</p>
                </div>
              </article>
            ))}

            <div className="text-center mt-12">
              <Link href="/clergy" className="btn-primary">
                Meet Our Clergy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
