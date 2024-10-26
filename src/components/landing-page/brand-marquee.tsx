import Marquee from '@/components/ui/marquee';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    name: 'onix',
    image: '/onix.png',
    link: '/brands/onix',
  },
  {
    name: 'hmns',
    image: '/hmns.png',
    link: '/brands/hmns',
  },
  {
    name: 'carl',
    image: '/carl.png',
    link: '/brands/carl-and-claire',
  },
  {
    name: 'saff',
    image: '/saff.png',
    link: '/brands/saff-and-co',
  },
  {
    name: 'alchemist',
    image: '/alchemist.png',
    link: '/brands/alchemist',
  },
  {
    name: 'kahf',
    image: '/kahf.png',
    link: '/brands/kahf',
  },
];

const firstRow = brands.slice(0, brands.length / 2);
const secondRow = brands.slice(brands.length / 2);

const BrandCard = ({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: string;
}) => {
  return (
    <Link
      className="bg-white w-96 h-56 flex items-center justify-center rounded-xl"
      href={link}
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        quality={100}
        priority
      />
    </Link>
  );
};

export default function BrandMarquee() {
  return (
    <div className="w-full relative bg-secondary flex flex-col items-center justify-center gap-8 overflow-hidden rounded-lg p-12">
      <h1 className="font-serif font-normal text-5xl text-white">
        Local Perfume Brands
      </h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((brand) => (
          <BrandCard key={brand.name} {...brand} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((brand) => (
          <BrandCard key={brand.name} {...brand} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-300"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-red-300"></div>
    </div>
  );
}
