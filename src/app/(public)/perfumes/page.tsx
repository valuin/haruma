import { Star } from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    brand: 'HMNS',
    name: 'Farhampton',
    image: '/farhampton.png',
    rating: 5,
    reviews: 150,
  },
];

type SearchParams = {
  query: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { query } = await searchParams;
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.brand.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return (
      <h1 className="font-serif font-bold text-2xl">
        No results found for "{query}"
      </h1>
    );
  }

  return (
    <div className="w-full space-y-16">
      {query ? (
        <>
          <h2 className="font-serif font-bold text-2xl">
            Results for "{query}"
          </h2>
          <div className="grid grid-cols-5 gap-8">
            {filteredItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  quality={100}
                  width={300}
                  height={300}
                  priority
                />
                <p className="font-bold text-black">{item.brand}</p>
                <p>{item.name}</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        className="text-orange-400"
                        fill="#fb923c"
                        size={16}
                        key={i}
                      />
                    ))}
                  </div>
                  <p>5.0</p>
                  <p>({item.reviews})</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Popular />
          <Recommendation />
        </>
      )}
    </div>
  );
}

function Popular() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl">Popular Perfumes</h1>
      <div className="grid grid-cols-5 gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <Image
              src="/farhampton.png"
              alt="farhampton"
              quality={100}
              width={300}
              height={300}
              priority
            />
            <p className="font-bold text-black">HMNS</p>
            <p>Farhampton</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    className="text-orange-400"
                    fill="#fb923c"
                    size={16}
                    key={i}
                  />
                ))}
              </div>
              <p>5.0</p>
              <p>(150)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Recommendation() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl">
        For Those Who Love the Earthy Richness of Nature
      </h1>
      <div className="grid grid-cols-5 gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            <Image
              src="/farhampton.png"
              alt="farhampton"
              quality={100}
              width={300}
              height={300}
              priority
            />
            <p className="font-bold text-black">HMNS</p>
            <p>Farhampton</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    className="text-orange-400"
                    fill="#fb923c"
                    size={16}
                    key={i}
                  />
                ))}
              </div>
              <p>5.0</p>
              <p>(150)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
