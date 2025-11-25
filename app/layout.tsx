import '../styles/globals.css';
import PublicNavbar from '@/components/public/PublicNavbar';
import PublicFooter from '@/components/public/PublicFooter';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-accent',
});

export const metadata = {
  title: 'Mountain Honey App',
  description: 'Mountain Honey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="text-gray-900 antialiased">
        <PublicNavbar />
        <main className="pt-19">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}
