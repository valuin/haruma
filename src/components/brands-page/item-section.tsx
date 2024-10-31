import { SearchParams } from '@/app/(public)/brands/page';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const brands = [
  {
    name: 'ONIX',
    image: '/onix.png',
    link: '/brands/onix',
  },
  {
    name: 'HMNS',
    image: '/hmns.png',
    link: '/brands/hmns',
  },
  {
    name: 'Carl & Claire',
    image: '/carl.png',
    link: '/brands/carl-and-claire',
  },
  {
    name: 'Kahf',
    image: '/kahf.png',
    link: '/brands/kahf',
  },
];

export default async function ItemsSection({ searchParams }: Readonly<{ searchParams: Promise<SearchParams> }>) {
  const { query } = await searchParams;
  if (!query) {
    return (
      <div className="w-full space-y-16">
        <Popular />
        <OtherBrands />
        <div className="flex justify-center mt-8">
          <Button className="w-32">
            Find More <ChevronRight size={36} />
          </Button>
        </div>
      </div>
    );
  }
  const filteredBrands = brands.filter((brand) => brand.name.toLowerCase().includes(query?.toLowerCase() || ''));

  if (filteredBrands.length === 0) {
    return <h1 className="font-serif font-bold text-2xl">No results found for &quot;{query}&quot;</h1>;
  }

  return (
    <>
      <h2 className="font-serif font-bold text-2xl">Results for &quot;{query}&quot;</h2>
      <div className="grid grid-cols-5 gap-8">
        {filteredBrands.map((brand, i) => (
          <div key={i} className="flex flex-col items-center">
            <a href={brand.link} className="bg-white p-5 rounded-2xl flex justify-center items-center h-full w-full">
              <Image src={brand.image} alt={brand.name} quality={100} width={180} height={180} priority />
            </a>
            <p className="font-bold text-black mt-2">{brand.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Popular() {
  return (
    <div className="space-y-2 mt-10">
      <h1 className="text-xl">Top Brands on Haruma</h1>
      <div className="grid grid-cols-4 gap-4">
        {brands.slice(0, 5).map((brand, i) => (
          <div key={i} className="flex flex-col items-center">
            <a href={brand.link} className="bg-white p-2 rounded-2xl flex justify-center items-center h-full w-full">
              <Image src={brand.image} alt={brand.name} quality={100} width={180} height={180} priority />
            </a>
            <p className="font-bold text-black mt-2">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OtherBrands() {
  return (
    <div className="space-y-2 mt-10">
      <h1 className="text-xl">Other Brands</h1>
      <div className="grid grid-cols-4 gap-4">
        {brands.map((brand, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <a href={brand.link} className="bg-white p-2 rounded-2xl flex justify-center items-center h-full w-full">
              <Image src={brand.image} alt={brand.name} quality={100} width={180} height={180} priority />
            </a>
            <p className="font-bold text-black mt-2">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
