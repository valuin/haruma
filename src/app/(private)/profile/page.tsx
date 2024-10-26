import UserInfo from '@/components/profile/user-info';
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="font-sans min-h-svh w-full flex flex-col items-center justify-center gap-4">
      <Suspense fallback={<p>Loading...</p>}>
        <UserInfo />
      </Suspense>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <form action={signOut}>
        <Button type="submit">Log Out</Button>
      </form>
    </main>
  );
}
