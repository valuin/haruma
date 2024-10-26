import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Discover() {
  return (
    <section className="w-full flex flex-col items-center gap-14">
      <h1 className="font-serif font-normal text-5xl">
        Discover Your Signature Scent
      </h1>
      <Popular />
      <Perfect />
    </section>
  );
}

function Popular() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h1 className="text-2xl">Popular Pefumes</h1>
        <Link
          className="text-primary flex hover:underline underline-offset-4"
          href="#"
        >
          <span>See more</span>
          <ChevronRight size={24} className="ml-2" />
        </Link>
      </div>
      <div className="flex">
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

function Perfect() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h1 className="text-2xl">Perfect For Rainy Days</h1>
        <Link
          className="text-primary flex hover:underline underline-offset-4"
          href="#"
        >
          <span>See more</span>
          <ChevronRight size={24} className="ml-2" />
        </Link>
      </div>
      <div className="flex">
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
