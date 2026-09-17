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
// BAGIAN METADATA (TAMENG SEO FACEBOOK)
// ==========================================
export const metadata: Metadata = {
  title: "Blog Review Sepatu Futsal", 
  description: "Membahas tuntas sepatu futsal lokal terbaik untuk lapangan sintetis.",
  openGraph: {
    title: "Blog Review Sepatu Futsal",
    description: "Membahas tuntas sepatu futsal lokal terbaik untuk lapangan sintetis.",
    
    url: "https://safe-page.vercel.app", 
    
    siteName: "Review Futsal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511886929837-354d827aae26", 
        width: 1200,
        height: 630,
        alt: "Sepatu Futsal Keren",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

// Catatan: Gua ubah LayoutProps<"/"> jadi React.ReactNode standar 
// supaya nggak error waktu di-deploy ke Vercel (karena tipe datanya nggak di-import).
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