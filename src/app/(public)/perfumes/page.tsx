import ItemsSection from '@/components/perfumes-page/item-section';
import { Suspense } from 'react';

export type SearchParams = {
  query: string;
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return (
    <div className="w-full space-y-16">
      <Suspense fallback={<p>Loading...</p>}>
        <ItemsSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
