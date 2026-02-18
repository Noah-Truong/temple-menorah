import PageHeader from '@/components/PageHeader';

const donationOptions = [
  {
    title: 'General Fund',
    description: 'Support the daily operations and programs of Temple Menorah.',
  },
  {
    title: 'Religious School Fund',
    description: 'Help provide quality Jewish education for our youth.',
  },
  {
    title: 'Social Action Fund',
    description: 'Support our community service and social justice initiatives.',
  },
  {
    title: 'Building Fund',
    description: 'Help maintain and improve our facilities.',
  },
  {
    title: 'Rabbi\'s Discretionary Fund',
    description: 'Enable our Rabbi to assist those in need.',
  },
  {
    title: 'Cantor\'s Discretionary Fund',
    description: 'Support special music programs and those in need.',
  },
];

export default function DonatePage() {
  return (
    <div>
      <PageHeader 
        title="Donate" 
        subtitle="Your generosity helps sustain our community"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Support Temple Menorah</h2>
              <p className="text-lg text-[var(--foreground)] leading-relaxed mb-6">
                Your donations help us maintain our beautiful facility, provide meaningful programs, 
                support those in need, and ensure a vibrant Jewish community in the South Bay for 
                generations to come.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                All donations are tax-deductible. Temple Menorah is a 501(c)(3) non-profit organization.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Donation Funds</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {donationOptions.map((option, index) => (
                <div key={index} className="card hover:border-[var(--secondary)] border-2 border-transparent transition-colors">
                  <h4 className="text-xl font-semibold text-[var(--secondary)] mb-3">{option.title}</h4>
                  <p className="text-lg text-[var(--text-muted)]">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="card bg-[var(--primary)] text-white text-center">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-4">Ready to Donate?</h3>
              <p className="text-lg opacity-90 mb-6">
                Contact our office to make a donation or learn about other ways to give.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:3103168444" className="btn-secondary">
                  Call (310) 316-8444
                </a>
                <a href="mailto:info@templemenorah.org" className="inline-block py-4 px-8 border-2 border-white rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
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
