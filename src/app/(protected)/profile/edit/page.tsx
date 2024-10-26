import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions';

export default function Page() {
  return (
    <form action={signOut}>
      <Button type="submit">Log Out</Button>
    </form>
  );
}
