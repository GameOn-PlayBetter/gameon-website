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
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html, body {
            background-color: #0A0A0A;
            color: white;
            font-family: 'Orbitron', sans-serif;
            height: 100%;
            width: 100%;
            overflow-x: hidden;
          }

          a {
            color: #00CFFF;
            text-decoration: none;
          }

          button {
            font-family: inherit;
          }

          img {
            display: block;
            max-width: 100%;
          }
        `}</style>
      </head>
      <body>
        <DefaultPageLayout>{children}</DefaultPageLayout>
      </body>
    </html>
  );
}