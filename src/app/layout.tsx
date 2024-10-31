import './globals.css'; // Import global CSS styles
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Your Name | Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
