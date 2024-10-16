import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      {/* <Badge variant={"outline"} className="font-normal">
        Supabase environment variables required
      </Badge> */}
      <div className="flex gap-2">
        <Button asChild size="sm" variant={'default'} disabled className="bg-[#FFD2CE] text-[#6B2F29] cursor-none pointer-events-none">
          <Link href="/sign-in">Sign up</Link>
        </Button>

        {/* Log in button with custom background and text color */}
        <Button asChild size="sm" variant={'default'} disabled className="bg-[#E86558] text-white opacity-75 pointer-events-none">
          <Link href="/sign-up">Log in</Link>
        </Button>
      </div>
         
    </div>
  );
}
