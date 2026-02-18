import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: ReactNode;
}

export default function CategoryCard({ title, description, href, image, icon }: CategoryCardProps) {
  return (
    <Link href={href} className="card p-0 group block overflow-hidden h-full flex flex-col">
      {image ? (
        <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : icon ? (
        <div className="h-44 w-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
          <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
      ) : null}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--primary-light)] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-base text-[var(--foreground)] leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <span className="text-base font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
          View Details →
        </span>
      </div>
    </Link>
  );
}
