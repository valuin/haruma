
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-sans min-h-svh w-full flex items-center justify-center gap-16">
      {children}
    </main>
  );
}
