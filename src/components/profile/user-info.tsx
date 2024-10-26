import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function UserInfo() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  const userSince = new Date(data.user.created_at).toLocaleDateString('en-id', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="text-black flex items-center gap-8">
      <Avatar className="w-20 h-20">
        <AvatarFallback>
          {data.user.email && data.user.email[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <p className="text-2xl font-bold">{data.user.email?.split('@')[0]}</p>
          <p className="text-foreground text-sm">{data.user.email}</p>
        </div>
        <div className="flex justify-end">
          <Link href="/profile/edit">
            <Button className="w-fit">Edit Profile</Button>
          </Link>
        </div>
        <p className="col-span-2">Haruma Member (since {userSince})</p>
      </div>
    </div>
  );
}
