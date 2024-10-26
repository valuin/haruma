import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Discover() {
  return (
    <section className="w-full flex flex-col items-center gap-14">
      <h1 className="font-serif font-normal text-5xl">Latest Reviews</h1>
      <div className="flex items-center gap-12">
        <div className="w-1/2 space-y-6">
          <p className="text-2xl">
            Share your thoughts or explore reviews from the Haruma community on
            your favorite scents.
          </p>
          <Button>Write a Review</Button>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-white flex items-center gap-8 p-8 rounded-xl"
            >
              <Image
                src="/alpha.png"
                alt="alpha"
                quality={100}
                width={150}
                height={150}
                priority
              />
              <div className="space-y-4">
                <article>
                  <h1 className="font-bold text-black">HMNS</h1>
                  <p>Alpha</p>
                </article>
                <article>
                  <div className="flex items-center gap-2">
                    <p>
                      Review by <strong>Dhika</strong>
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          className="text-orange-400"
                          fill="#fb923c"
                          size={16}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                  <p>Only 4 stars karena gaada ambatukam</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
