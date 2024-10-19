import PopularParfume from '@/components/landing-page/popular-parfume';
import EarthNature from '@/components/perfumes/earth';
import PopularParfumeBrand from '@/components/perfumes/popular-parfume-brand';
import Search from '@/components/perfumes/search';
import SidebarFilter from '@/components/perfumes/sidebar-filter';

export default function Perfumes() {
  return (
    <div className="px-20">
      <Search />
      <div className="flex flex-row mt-20">
        <SidebarFilter />
        <div className="flex flex-col">
          <PopularParfumeBrand />
          <EarthNature />
        </div>
      </div>
    </div>
  );
}
