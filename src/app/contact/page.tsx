import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="card mb-8">
                  <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">Phone</h3>
                      <a 
                        href="tel:3103168444" 
                        className="text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                      >
                        (310) 316-8444
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">Email</h3>
                      <a 
                        href="mailto:info@templemenorah.org" 
                        className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                      >
                        info@templemenorah.org
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">Website Support</h3>
                      <a 
                        href="mailto:websupport@templemenorah.org" 
                        className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                      >
                        websupport@templemenorah.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card bg-[var(--accent)]">
                  <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Location</h2>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed mb-4">
                    Temple Menorah of the South Bay
                  </p>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed">
                    Redondo Beach, California
                  </p>
                  <p className="text-base text-[var(--text-muted)] mt-4">
                    Serving El Segundo, Manhattan Beach, Hermosa Beach, Redondo Beach, Torrance, and the Palos Verdes Peninsula
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card">
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                      placeholder="(310) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="education">Education Programs</option>
                      <option value="events">Events</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary text-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 card">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">Office Hours</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--secondary)]">Monday - Thursday</h3>
                  <p className="text-xl text-[var(--foreground)]">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--secondary)]">Friday</h3>
                  <p className="text-xl text-[var(--foreground)]">9:00 AM - 3:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--secondary)]">Saturday - Sunday</h3>
                  <p className="text-xl text-[var(--foreground)]">Closed (Services Only)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
