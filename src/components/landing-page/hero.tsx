import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center">
      <div className="flex flex-col items-center lg:items-start gap-8">
        <article className="text-center lg:text-left space-y-8">
          <h1 className="font-serif font-bold text-5xl">
            Discover the Fragrance That Defines You
          </h1>
          <p className="text-xl">
            Discover authentic Indonesian fragrances, curated to match your
            unique style and preferences.
          </p>
        </article>
        <Link href="/login">
          <Button className="text-lg" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        quality={100}
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
