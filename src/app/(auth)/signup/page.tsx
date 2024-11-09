import SignUpForm from '@/components/auth/signup-form';
import { HarumaLogo } from '@/components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-9">
      <Link href="/" aria-label="home">
        <HarumaLogo />
      </Link>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="font-semibold text-2xl">
            Create your account
          </CardTitle>
          <CardDescription>
            Register now and get started in minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
      <p>
        Already have an account?{' '}
        <Link href="/login" className="text-primary">
          Log In
        </Link>{' '}
      </p>
    </div>
  );
}
