import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AuthButton() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="space-x-3">
      {data.user ? (
        <Link href="/profile">
          <Button>Profile</Button>
        </Link>
      ) : (
        <>
          <Link href="/signup">
            <Button variant="secondary">Sign Up</Button>
          </Link>
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </>
      )}
    </div>
  );
}
