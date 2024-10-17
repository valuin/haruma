import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
import MainProfile from '@/components/profile/main-profile';
import FavoriteParfume from '@/components/profile/favorite-parfume';
import YourReview from '@/components/profile/your-review';
import Wishlist from '@/components/profile/wishlist';
import Footer from '@/components/landing-page/footer';
export default function Profile() {
  return (
    <>
      <MainProfile />
      <FavoriteParfume />
      <YourReview />
      <Wishlist />
      <Footer />
    </>
  );
}
