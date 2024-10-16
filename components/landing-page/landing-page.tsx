import Brands from './brands';
import Footer from './footer';
import HeroComp from './hero';
import LatestReviews from './latest-reviews';
import PopularParfume from './popular-parfume';

export default function LandingPage() {
  return (
    <>
      <HeroComp />
      <Brands />
      <PopularParfume />
      <LatestReviews />
      <Footer />
    </>
  );
}
