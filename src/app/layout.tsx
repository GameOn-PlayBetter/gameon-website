import "./globals.css";
import type { Metadata } from "next";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";

export const metadata: Metadata = {
  title: "GameOn",
  description: "Level up your game with expert coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DefaultPageLayout>{children}</DefaultPageLayout>
      </body>
    </html>
  );
}