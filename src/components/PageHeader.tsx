import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
}

export default function PageHeader({ title, subtitle, heroImage }: PageHeaderProps) {
  return (
    <section className="relative text-white py-20 md:py-24 min-h-[300px] flex items-center">
      {heroImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 to-[var(--primary-light)]/80"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]"></div>
      )}
      <div className="container mx-auto px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
