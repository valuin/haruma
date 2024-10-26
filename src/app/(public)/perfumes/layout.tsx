import SearchForm from '@/components/perfumes-page/search-form';
import SidebarFilter from '@/components/perfumes-page/sidebar-filter';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <h1 className="font-serif font-bold text-4xl">Explore Perfumes</h1>
      <SearchForm />
      <div className="w-full flex items-start gap-14">
        <SidebarFilter />
        {children}
      </div>
    </section>
  );
}
