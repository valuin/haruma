import SearchForm from '@/components/brands-page/search-form';
import { Suspense } from 'react';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <h1 className="font-serif font-bold text-4xl">Explore Brands On Haruma</h1>
      <Suspense>
        <SearchForm />
      </Suspense>
      <div className="w-full flex items-start gap-14">{children}</div>
    </section>
  );
}
