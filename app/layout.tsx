import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ==========================================
// BAGIAN METADATA (TAMENG GATEWAY 18+)
// ==========================================
export const metadata: Metadata = {
  title: "Access Verification", 
  description: "Please verify your age to continue to the content.",
  openGraph: {
    title: "Access Verification",
    description: "Please verify your age to continue to the content.",
    url: "https://safe-page.vercel.app", // Opsional: Ganti dengan URL asli Vercel lu
    siteName: "Content Gateway",
    images: [
      {
        url: "https://images.unsplash.com/photo-1614064641913-6b7140414c71?w=800", // Gambar ilustrasi gembok/keamanan general
        width: 1200,
        height: 630,
        alt: "Security Verification",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}