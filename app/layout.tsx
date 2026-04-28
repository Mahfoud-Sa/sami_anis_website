import type { Metadata } from 'next';
import { Providers } from '../src/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sami Anis Law Firm | Justice & Excellence',
  description: 'Premier law firm dedicated to achieving justice and protecting clients\' rights with integrity and exceptional legal expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
