import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function CantorBlogPage() {
  return (
    <div>
      <PageHeader 
        title="Cantor's Corner" 
        subtitle="Spiritual notes and musical reflections"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="card mb-8">
              <div className="text-[var(--secondary)] font-semibold mb-2">August 16, 2023</div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Spiritual Notes by Cantor Fine</h2>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                My first post is coming soon! Please be patient while I begin to put my thoughts together.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xl font-semibold text-[var(--foreground)]">Cantor Fine</p>
              </div>
            </article>

            <div className="card bg-[var(--accent)]">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Coming Soon</h3>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                Check back soon for reflections on music, spirituality, and Jewish life from our Cantor.
              </p>
            </div>

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
