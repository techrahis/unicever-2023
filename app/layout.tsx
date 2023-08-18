import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unicever",
  description:
    "Unicever is an open-source project that revolutionizes certificate authentication and verification.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
