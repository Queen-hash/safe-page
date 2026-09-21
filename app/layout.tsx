import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    url: "https://safe-page.vercel.app",
    siteName: "Content Gateway",
    images: [
      {
        url: "https://images.unsplash.com/photo-1614064641913-6b7140414c71?w=800",
        width: 1200,
        height: 630,
        alt: "Security Verification",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  other: {
    "fb:app_id": "873918273645192", // Tameng tambahan untuk menghilangkan warning fb:app_id di FB Debugger
  }
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
      <head>
        {/* KODE FB PIXEL DASAR */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'ID_PIXEL_LU_DISINI'); 
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}