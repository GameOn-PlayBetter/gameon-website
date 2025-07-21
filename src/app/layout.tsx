import type { Metadata } from 'next';
import { DefaultPageLayout } from '@/ui/layouts/DefaultPageLayout';

export const metadata: Metadata = {
  title: 'GameOn',
  description: 'Level up your game with expert coaching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html, body {
            background-color: black;
            color: white;
            font-family: 'Orbitron', sans-serif;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body>
        <DefaultPageLayout>{children}</DefaultPageLayout>
      </body>
    </html>
  );
}