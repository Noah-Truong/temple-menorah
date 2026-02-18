import Link from 'next/link';
import PageHeader from './PageHeader';

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PlaceholderPage({ title, subtitle, description }: PlaceholderPageProps) {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card p-10 md:p-12">
              <p className="text-xl text-[var(--foreground)] leading-relaxed mb-10">
                {description || `Information about ${title} will be available soon. Please contact us for more details.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Contact Us
                </Link>
                <a href="tel:3103168444" className="btn-secondary px-8 py-4">
                  Call (310) 316-8444
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
