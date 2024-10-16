import DeployButton from '@/components/deploy-button';
import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
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
          <div className="flex-1 w-full flex flex-col gap-20 items-center ">
            <nav className="w-11/12 flex justify-center border-b border-b-[#FFBDB6] mt-3">
              <div className="w-full  flex justify-between items-center p-3 text-sm">
                <img src="/logo.png" alt="logo" className="w-16 h-16" />
                <div className="flex gap-14 items-center font-medium text-gray-700 ml-24">
                  <Link href={defaultUrl}>HOME</Link>
                  <Link href={defaultUrl}>BRANDS</Link>
                  <Link href={defaultUrl}>PERFUMES</Link>
                  <Link href={defaultUrl}>CONTACT</Link>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
              </div>
            </nav>
            <div className="w-full ">{children}</div>

            {/* <footer className="w-full flex items-center justify-center bg-[#E86558] mx-auto text-center text-xs gap-8 py-16">
              <p>
                Powered by{' '}
                <a href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs" target="_blank" className="font-bold hover:underline" rel="noreferrer">
                  Supabase
                </a>
              </p>
              <ThemeSwitcher />
            </footer> */}
          </div>
        </main>
      </body>
    </html>
  );
}
