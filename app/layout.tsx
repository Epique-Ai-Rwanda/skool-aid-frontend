import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import './globals.css';

const neueMontreal = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Skool Aid - From Chalkboards to Dreamboards',
  description: 'Empowering Rwanda\'s classrooms with tools that make learning engaging, inclusive, and future-ready.',
  icons: {
    icon: '/Logo.svg',
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}