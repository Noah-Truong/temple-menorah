import PageHeader from '@/components/PageHeader';

const staff = [
  {
    name: 'Ilise Welter',
    title: 'Synagogue Administrator',
    description: 'Ilise Welter serves as our Synagogue Administrator, ensuring the smooth day-to-day operations of Temple Menorah. She is available to assist with membership inquiries, event coordination, and general administrative needs.',
  },
];

export default function StaffPage() {
  return (
    <div>
      <PageHeader 
        title="Staff" 
        subtitle="Our dedicated team working to serve our community"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {staff.map((member, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 bg-gradient-to-br from-[var(--secondary)] to-[#d4af37] rounded-full flex items-center justify-center">
                      <span className="text-5xl text-white font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">{member.name}</h2>
                    <p className="text-xl text-[var(--secondary)] font-semibold mb-6">{member.title}</p>
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-12 card bg-[var(--accent)]">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Contact Our Staff</h3>
              <p className="text-lg text-[var(--foreground)] mb-4">
                For general inquiries, please reach out to us:
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:3103168444" className="text-[var(--primary)] hover:underline">(310) 316-8444</a>
                </p>
                <p className="text-lg">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@templemenorah.org" className="text-[var(--primary)] hover:underline">info@templemenorah.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
