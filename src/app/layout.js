/** @format */

import localFont from 'next/font/local';
import './globals.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LenisScroll from './components/smoothscroll/smoothscroll';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <NavBar />
        </div>
        <LenisScroll>{children}</LenisScroll>
        <Footer />
      </body>
    </html>
  );
}
