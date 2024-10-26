import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function UserInfo() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return <p>Sign in as {data.user.email}</p>;
}
