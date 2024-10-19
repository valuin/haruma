import localFont from 'next/font/local';
import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { GeistSans } from 'geist/font/sans';
import Link from 'next/link';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-gradient-to-bl from-[#FFD2CE] from-10% via-[#FFF1EF]  to-[#F7D4D4] text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-5 items-center ">
            <nav className="w-11/12 flex justify-center border-b border-b-[#FFBDB6] mt-3">
              <div className="w-full  flex justify-between items-center p-3 text-sm">
                <img src="/logo.png" alt="logo" className="w-16 h-16" />
                <div className="flex gap-14 items-center font-medium text-gray-700 ml-24">
                  <Link href={defaultUrl}>HOME</Link>
                  <Link href={'./brands'}>BRANDS</Link>
                  <Link href={'./perfumes'}>PERFUMES</Link>
                  <Link href={'./contact'}>CONTACT</Link>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              </div>
            </nav>
            <div className="w-full ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
