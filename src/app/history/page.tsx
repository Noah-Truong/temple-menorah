import PageHeader from '@/components/PageHeader';

const timeline = [
  {
    year: '1946',
    title: 'The Beginning',
    description: 'Isaac H. Grancell\'s letter to South Bay Jewish families sparked the formation of our community. On August 21, 1946, a meeting created the South Bay Jewish Community Center.',
  },
  {
    year: '1946',
    title: 'Religious School Founded',
    description: 'In September 1946, the Religious School was formed with 17 children, marking the beginning of our educational mission.',
  },
  {
    year: '1947',
    title: 'Sisterhood & Name',
    description: 'The Sisterhood was formed, followed by a Youth Group. In March 1947, the congregation adopted the name "Temple Menorah."',
  },
  {
    year: '1951',
    title: 'First Home',
    description: 'Temple Menorah found its first home on Catalina Avenue, purchased by Isaac and Anna Grancell. The temple acquired a rescued Torah Scroll from the Holocaust—a sacred artifact that remains with us today.',
  },
  {
    year: '1954',
    title: 'Land Acquisition',
    description: 'A three-acre site was purchased in Torrance for future expansion (later sold).',
  },
  {
    year: '1957',
    title: 'First Full-Time Rabbi',
    description: 'Rabbi Henry Front became Temple Menorah\'s first full-time spiritual leader, serving until 1963.',
  },
  {
    year: '1961',
    title: 'Construction Begins',
    description: 'Construction began on the current land, establishing a permanent home for our growing community.',
  },
  {
    year: '1963-1973',
    title: 'Rabbi Jerome Unger',
    description: 'Rabbi Jerome Unger served the congregation for a decade, continuing to build our community.',
  },
  {
    year: '1969',
    title: 'Sanctuary Dedication',
    description: 'The sanctuary was added and dedicated to Isaac and Anna Grancell, honoring the founders who made our community possible.',
  },
  {
    year: '1973-1987',
    title: 'Rabbi Leon Kahane',
    description: 'Rabbi Leon Kahane led the congregation for fourteen years, strengthening our traditions and community bonds.',
  },
  {
    year: '1987-2017',
    title: 'Rabbi Steven Silver',
    description: 'Rabbi Steven Silver served as spiritual leader for 30 years, bringing significant growth in membership and expanding educational offerings.',
  },
  {
    year: '2017-Present',
    title: 'Continuing the Legacy',
    description: 'Temple Menorah continues to thrive as a welcoming Reform Jewish community in the South Bay, honoring our past while embracing the future.',
  },
];

export default function HistoryPage() {
  return (
    <div>
      <PageHeader 
        title="Our History" 
        subtitle="Nearly 80 years of Jewish life in the South Bay"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-[var(--foreground)] leading-relaxed">
                Temple Menorah&apos;s story began with a single letter. In 1946, Isaac H. Grancell reached out to Jewish 
                families in the South Bay with a vision of creating a Jewish community center. That vision has 
                grown into nearly eight decades of worship, education, and community building.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[var(--primary)] hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="relative flex gap-8">
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[var(--secondary)] rounded-full items-center justify-center z-10">
                      <span className="text-sm font-bold text-[var(--foreground)]">{event.year}</span>
                    </div>
                    <div className="card flex-grow">
                      <div className="md:hidden text-[var(--secondary)] font-bold text-lg mb-2">{event.year}</div>
                      <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">{event.title}</h3>
                      <p className="text-lg text-[var(--foreground)] leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 card bg-[var(--accent)]">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Our Sacred Torah</h3>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                Among our most treasured possessions is a rescued Torah Scroll from the Holocaust. This sacred 
                artifact serves as a powerful reminder of Jewish resilience and the importance of preserving 
                our traditions for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
