import localFont from 'next/font/local';
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

export const metadata = {
  title: 'Skool Aid - From Chalkboards to Dreamboards',
  description: 'Empowering Rwanda\'s classrooms with tools that make learning engaging, inclusive, and future-ready.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={neueMontreal.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}