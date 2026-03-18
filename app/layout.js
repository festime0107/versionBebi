export const metadata = {
  title: 'Bebi FO',
  description: 'Aplikacion edukativ për bebe muslimane',
  manifest: '/manifest.json',
  themeColor: '#0f766e',
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
  },
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
