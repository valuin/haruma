import BrandMarquee from '@/components/landing-page/brand-marquee';
import Discover from '@/components/landing-page/discover';
import Hero from '@/components/landing-page/hero';
import Reviews from '@/components/landing-page/reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Discover />
      <Reviews />
    </>
  );
}
