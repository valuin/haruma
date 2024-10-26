import UserInfo from '@/components/profile/user-info';
import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="font-sans min-h-svh w-full flex flex-col items-center gap-16">
      <Suspense fallback={<p>Loading...</p>}>
        <UserInfo />
      </Suspense>
      <section className="space-y-16">
        <Favorites />
        <Reviews />
        <Wishlists />
      </section>
    </main>
  );
}

function Favorites() {
  return (
    <div className="space-y-2">
      <h1 className="font-serif text-3xl">Your Favorite Perfume</h1>
      <div className="flex">
        {Array.from({ length: 3 }).map((_, i) => (
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

function Reviews() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h1 className="font-serif text-3xl">Your Reviews</h1>
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

function Wishlists() {
  return (
    <div className="space-y-2">
      <h1 className="font-serif text-3xl">Wishlists</h1>
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
