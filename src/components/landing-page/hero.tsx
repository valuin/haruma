import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-12">
        <article className="space-y-8">
          <h1 className="font-serif font-bold text-7xl">
            Discover the Fragrance That Defines You
          </h1>
          <p className="text-2xl">
            Discover authentic Indonesian fragrances, curated to match your
            unique style and preferences.
          </p>
        </article>
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </div>
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        quality={100}
        width={600}
        height={600}
        priority
      />
    </section>
  );
}
