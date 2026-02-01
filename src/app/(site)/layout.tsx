// src/app/(site)/layout.tsx
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastProvider from '@/components/ToastProvider';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col min-h-screen bg-base-200'>
      <Nav />
      <main className='grow'>{children}</main>
      <Footer />
      <ToastProvider />
    </section>
  );
}
