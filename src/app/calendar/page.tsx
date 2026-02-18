import PageHeader from '@/components/PageHeader';

const events = [
  {
    date: 'February 17, 2026',
    day: 'Monday',
    events: [
      { time: '7:00 PM - 8:30 PM', title: 'Introduction to Judaism', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 18, 2026',
    day: 'Tuesday',
    events: [
      { time: '12:00 PM - 1:00 PM', title: 'Lunchtime Learning', location: 'Zoom' },
      { time: '7:00 PM - 8:30 PM', title: 'Introduction to Judaism', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 19, 2026',
    day: 'Wednesday',
    events: [
      { time: '7:30 PM', title: 'Board of Trustees Meeting', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 20, 2026',
    day: 'Friday',
    events: [
      { time: '5:45 PM - 7:00 PM', title: 'Family Shabbat Jam', location: 'Garden Room' },
      { time: '6:30 PM', title: 'Shabbat Evening Service - Third and Fourth Grade Shabbat Program', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 21, 2026',
    day: 'Saturday',
    events: [
      { time: '10:00 AM', title: 'Shabbat Morning Service', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 22, 2026',
    day: 'Sunday',
    events: [
      { time: '10:00 AM', title: 'Intergenerational Challah Baking', location: 'Temple Kitchen' },
      { time: '2:00 PM', title: 'Creative Aging Program', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 24, 2026',
    day: 'Tuesday',
    events: [
      { time: '7:00 PM', title: 'Introduction to Judaism', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 27, 2026',
    day: 'Friday',
    events: [
      { time: '6:30 PM', title: 'Shabbat Evening Service', location: 'Garden Room' },
    ],
  },
  {
    date: 'February 28, 2026',
    day: 'Saturday',
    events: [
      { time: '10:00 AM', title: 'Shabbat Morning Service', location: 'Garden Room' },
      { time: '7:00 PM', title: 'Movie Night', location: 'Social Hall' },
    ],
  },
];

const recurringEvents = [
  {
    title: 'Shabbat Evening Service',
    schedule: 'Every Friday at 6:30 PM',
    description: 'Join us for a meaningful Shabbat service. Nosh begins at 6:00 PM.',
  },
  {
    title: 'Shabbat Morning Service',
    schedule: 'Every Saturday at 10:00 AM',
    description: 'A traditional Shabbat morning service with Torah reading.',
  },
  {
    title: 'Introduction to Judaism',
    schedule: 'Tuesdays, 7:00 - 8:30 PM',
    description: 'An 18-week course exploring Judaism through a Reform lens.',
  },
  {
    title: 'Lunchtime Learning',
    schedule: 'Tuesdays, 12:00 - 1:00 PM',
    description: 'Virtual learning session via Zoom.',
  },
];

export default function CalendarPage() {
  return (
    <div>
      <PageHeader 
        title="Calendar" 
        subtitle="Stay connected with upcoming events and programs"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Recurring Events */}
            <div className="mb-16">
              <h2 className="section-title">Regular Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recurringEvents.map((event, index) => (
                  <div key={index} className="card">
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{event.title}</h3>
                    <p className="text-lg text-[var(--secondary)] font-semibold mb-3">{event.schedule}</p>
                    <p className="text-lg text-[var(--text-muted)]">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Events */}
            <div>
              <h2 className="section-title">February 2026</h2>
              <div className="space-y-8">
                {events.map((day, index) => (
                  <div key={index} className="card">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      <div className="flex-shrink-0 md:w-48">
                        <div className="text-xl font-bold text-[var(--primary)]">{day.date}</div>
                        <div className="text-lg text-[var(--text-muted)]">{day.day}</div>
                      </div>
                      <div className="flex-grow space-y-4">
                        {day.events.map((event, eventIndex) => (
                          <div 
                            key={eventIndex} 
                            className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-lg font-semibold text-[var(--secondary)] min-w-[150px]">
                                {event.time}
                              </span>
                              <span className="text-xl font-medium text-[var(--foreground)]">
                                {event.title}
                              </span>
                            </div>
                            <div className="text-base text-[var(--text-muted)] mt-1 sm:ml-[166px]">
                              📍 {event.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtual Access */}
            <div className="mt-12 card bg-[var(--accent)]">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Virtual Access Available</h3>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                Many of our programs are available virtually via Zoom. For virtual access information, 
                please email{' '}
                <a href="mailto:info@templemenorah.org" className="text-[var(--primary)] hover:underline font-semibold">
                  info@templemenorah.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
