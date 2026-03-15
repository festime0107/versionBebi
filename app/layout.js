export const metadata = {
  title: 'Bebi Musliman',
  description: 'Aplikacion edukativ për bebe muslimane',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
