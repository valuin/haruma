'use client';

import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function SearchForm() {
  const searchParams = useSearchParams();

  return (
    <Form className="w-3/5" action="/perfumes">
      <div className="relative">
        <label htmlFor="query" className="sr-only">
          Query
        </label>
        <Input
          defaultValue={searchParams.get('query') as string}
          className="peer pe-9 ps-9 bg-white"
          placeholder="Search..."
          type="search"
          name="query"
          id="query"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
        <button
          className="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </Form>
  );
}
