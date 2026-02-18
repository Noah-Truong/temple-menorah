import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const faqs = [
  {
    question: 'Are services open to everyone?',
    answer: 'Yes! Our Shabbat services are open to the entire community. Friday services begin at 6:30 PM with a 6:00 PM Nosh, and Saturday services start at 10:00 AM.',
  },
  {
    question: 'Do I need tickets for High Holy Days?',
    answer: 'Yes, tickets are required for High Holy Days services. Please contact us for more information about registration.',
  },
  {
    question: 'Can I tour the temple?',
    answer: 'Absolutely! Tours are available by appointment. Please contact our office to schedule a visit.',
  },
  {
    question: 'Does Religious School require membership?',
    answer: 'Yes, synagogue membership is required for Religious School enrollment.',
  },
  {
    question: 'Do you have a preschool?',
    answer: 'Yes! Tuvia Preschool is available for children ages 2 years through Pre-K.',
  },
  {
    question: 'Do members receive preschool discounts?',
    answer: 'Yes, temple members receive a tuition reduction for Tuvia Preschool.',
  },
  {
    question: 'Is financial assistance available?',
    answer: 'Yes, dues assistance is available. We believe that finances should never be a barrier to membership.',
  },
];

export default function MembershipPage() {
  return (
    <div>
      <PageHeader 
        title="Membership" 
        subtitle="Join our welcoming community in the South Bay"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            {/* Community Description */}
            <div className="card p-8 md:p-10 mb-14">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Our Community</h2>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-6">
                Temple Menorah serves the Jewish communities of El Segundo, Manhattan Beach, Hermosa Beach, 
                Redondo Beach, Torrance, and the Palos Verdes Peninsula. We are an inclusive congregation that 
                welcomes married and interfaith couples, singles, seniors, and non-traditional families.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                Our members come from diverse backgrounds—from those with extensive Jewish education to recent 
                converts. Whether you&apos;ve been Jewish your whole life or are just beginning your journey, 
                you&apos;ll find a home here.
              </p>
            </div>

            {/* Membership Demographics */}
            <div className="grid md:grid-cols-2 gap-10 mb-14">
              <div className="card p-8 bg-[var(--accent)]">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Our Members</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--secondary)] text-2xl leading-none">•</span>
                    <span>Veterans with over 50 years of membership</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--secondary)] text-2xl leading-none">•</span>
                    <span>Core members with 15+ years</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--secondary)] text-2xl leading-none">•</span>
                    <span>~100 new families (less than 2 years)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[var(--secondary)] text-2xl leading-none">•</span>
                    <span>Many returning members</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 bg-[var(--primary)] text-white">
                <h3 className="text-2xl font-bold text-[var(--secondary)] mb-6">Ready to Join?</h3>
                <p className="text-lg mb-8 opacity-95">
                  Become part of our warm and welcoming community today.
                </p>
                <div className="space-y-5">
                  <Link href="/new-member" className="btn-secondary block text-center py-4">
                    New Member Application
                  </Link>
                  <Link href="/renewal" className="block text-center py-4 px-6 border-2 border-white rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
                    5786 Membership Renewal
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="card p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-8 border-b border-gray-200 last:border-0 last:pb-0">
                    <h4 className="text-xl font-semibold text-[var(--foreground)] mb-4">{faq.question}</h4>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-14 text-center">
              <p className="text-xl text-[var(--foreground)] mb-6">
                Have more questions? We&apos;d love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="tel:3103168444" className="btn-primary px-8 py-4">
                  Call (310) 316-8444
                </a>
                <a href="mailto:info@templemenorah.org" className="btn-secondary px-8 py-4">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
