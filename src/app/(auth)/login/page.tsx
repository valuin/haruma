import LogInForm from '@/components/auth/login-form';
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
            Hello, Welcome Back!
          </CardTitle>
          <CardDescription>
            Enter your email and password below to sign in your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LogInForm />
        </CardContent>
      </Card>
      <p>
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-primary">
          Sign Up
        </Link>{' '}
      </p>
    </div>
  );
}
