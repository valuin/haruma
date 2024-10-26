'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signup } from '@/lib/actions';
import { Loader2 } from 'lucide-react';
import { startTransition, useActionState } from 'react';

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(signup, undefined);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => {
      formAction(new FormData(event.currentTarget));
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="m@example.com"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          {state?.errors?.password && (
            <div className="text-destructive text-sm">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error, index) => (
                  <li key={index}>&bull; {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Button className="w-full" disabled={pending} type="submit">
        {pending && <Loader2 className="animate-spin mr-1" />}
        <span>Sign Up</span>
      </Button>
      {state?.message && <p className="text-destructive">{state.message}</p>}
    </form>
  );
}
