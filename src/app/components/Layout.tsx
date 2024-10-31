// src/app/components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
