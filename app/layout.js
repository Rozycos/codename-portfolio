import { Ubuntu_Mono, Pixelify_Sans } from "next/font/google";
import '../styles/globals.scss';

export const metadata = {
  title: "PixelCrafter.eu | Przemek Malec's Portfolio",
  description: "Explore Przemek Malec's portfolio showcasing creative projects and achievements in web development and design.",
};

export const ubuntu_mono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  display: 'swap',
});
 
export const pixelify_sans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify_sans',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu_mono.variable} ${pixelify_sans.variable}`}>{children}</body>
    </html>
  );
}
