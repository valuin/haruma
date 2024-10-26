import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <main className="font-sans min-h-svh w-full flex flex-col items-center justify-center gap-4">
      <p>sign in as {data.user.email}</p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <form action={signOut}>
        <Button type="submit">Log Out</Button>
      </form>
    </main>
  );
}
