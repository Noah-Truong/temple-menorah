import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function LoginPage() {
  return (
    <div>
      <PageHeader 
        title="Member Login" 
        subtitle="Access your Temple Menorah account"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-[var(--foreground)] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Log In
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-lg text-[var(--text-muted)] mb-4">
                  Forgot your password?
                </p>
                <p className="text-base text-[var(--text-muted)]">
                  Please contact the website administrator at{' '}
                  <a href="mailto:websupport@templemenorah.org" className="text-[var(--primary)] hover:underline">
                    websupport@templemenorah.org
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 card bg-[var(--accent)]">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Account Information</h3>
              <p className="text-base text-[var(--foreground)] leading-relaxed">
                Your Temple Menorah account is provided for you to manage your online profile. 
                By default, your profile is not visible to the public nor can any logged-in 
                congregant message you. Both features can be opted into at your will.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-[var(--foreground)] mb-4">
                Not a member yet?
              </p>
              <Link href="/membership" className="btn-secondary">
                Learn About Membership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
