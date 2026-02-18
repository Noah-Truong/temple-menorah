import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryCardHorizontalProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: ReactNode;
  imageOnRight?: boolean;
}

export default function CategoryCardHorizontal({ 
  title, 
  description, 
  href, 
  image, 
  icon,
  imageOnRight = false 
}: CategoryCardHorizontalProps) {
  const imageContent = image ? (
    <div className="relative h-56 md:h-auto md:w-1/3 md:min-h-[250px] overflow-hidden flex-shrink-0">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  ) : icon ? (
    <div className="h-56 md:h-auto md:w-1/3 md:min-h-[250px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
      <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
  ) : null;

  const textContent = (
    <div className="p-8 flex flex-col justify-center flex-grow">
      <h3 className="text-2xl font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--primary-light)] transition-colors">
        {title}
      </h3>
      <p className="text-lg text-[var(--foreground)] leading-relaxed mb-6">
        {description}
      </p>
      <span className="text-lg font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
        View Details →
      </span>
    </div>
  );

  return (
    <Link href={href} className="card p-0 group block overflow-hidden">
      <div className={`flex flex-col ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {imageContent}
        {textContent}
      </div>
    </Link>
  );
}
