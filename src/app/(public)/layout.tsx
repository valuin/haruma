import Footer from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-gradient-to-r from-red-100 via-red-50 to-red-100 font-sans text-foreground flex flex-col items-center justify-center px-16 py-12">
        <Header />
        <main className="min-h-svh w-full flex flex-col items-center justify-center gap-16">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
