import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Link from 'next/link'; // Import Link from next/link

const brands = [
  { name: 'Onix', image: '/onix.png', href: '/perfume/onix' },
  { name: 'Hmns', image: '/hmns.png', href: '/perfume/hmns' },
  { name: 'Carl', image: '/carl.png', href: '/perfume/carl' },
  { name: 'Saff', image: '/saff.png', href: '/perfume/saff' },
  { name: 'Alchemist', image: '/alchemist.png', href: '/perfume/alchemist' },
  { name: 'Kahf', image: '/kahf.png', href: '/perfume/kahf' },
];

// Split brands into first and second row
const firstRow = brands.slice(0, Math.ceil(brands.length / 2));
const secondRow = brands.slice(Math.ceil(brands.length / 2));

const BrandCard = ({ image, name, href }: { image: string; name: string; href: string }) => {
  return (
    <Link href={href} passHref>
      <figure className={cn('relative w-96 rounded-xl p-8', 'bg-white hover:bg-gray-50')}>
        <div className="flex flex-col items-center">
          <img className="w-40 h-40 object-contain" alt={`${name} Logo`} src={image} />
        </div>
      </figure>
    </Link>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* Title and Marquee combined */}
      <div className="w-11/12 p-14 bg-[#FF9F95] mx-auto rounded-xl mb-10">
        <h2 className="text-5xl font-semibold text-white text-center" style={{ fontFamily: 'LibreBaskervilleRegular' }}>
          Local Perfume Brands
        </h2>
        {/* First Row Marquee */}
        <div className="relative flex w-full overflow-hidden rounded-lg mt-10">
          <Marquee pauseOnHover className="[--duration:30s] w-full">
            {firstRow.map((brand) => (
              <BrandCard key={brand.name} {...brand} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FF9F95] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FF9F95] to-transparent"></div>
        </div>
        {/* Second Row Marquee (reverse) */}
        <div className="relative flex w-full overflow-hidden rounded-lg ">
          <Marquee reverse pauseOnHover className="[--duration:30s] w-full">
            {secondRow.map((brand) => (
              <BrandCard key={brand.name} {...brand} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FF9F95] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FF9F95] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
