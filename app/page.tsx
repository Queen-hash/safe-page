"use client";

export default function PreLander() {
  
  // Fungsi ini hanya dieksekusi jika ada interaksi KLIK dari manusia
  const handleYes = () => {
    // 1. Tembak laporan ke FB bahwa ada target potensial ("Lead")
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // 2. Beri jeda 300 milidetik agar laporan Pixel terkirim dulu, baru lempar ke form daftar
    setTimeout(() => {
      window.location.href = "https://dewa76.shop/mobile/index.php?page=daftar";
    }, 300);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 font-sans text-white">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl text-center">
        
        {/* Ikon Peringatan */}
        <div className="mx-auto w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-4">Peringatan Akses</h1>
        <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
          Halaman ini berisi konten yang dikhususkan bagi pengunjung berusia 18+. 
          Dengan melanjutkan, Anda mengonfirmasi bahwa Anda memenuhi syarat usia minimum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleNo}
            className="flex-1 px-6 py-3 rounded-lg font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
          >
            Tutup
          </button>
          
          {/* Tombol pemicu redirect - Tidak terbaca sebagai link oleh Bot */}
          <button 
            onClick={handleYes}
            className="flex-1 px-6 py-3 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
          >
            Ya, Lanjutkan
          </button>
        </div>
      </div>
      
      {/* Footer Legalitas Palsu */}
      <div className="mt-12 text-center text-zinc-600 text-xs flex gap-4">
        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-zinc-400">Terms of Service</a>
        <span>|</span>
        <span>© 2026 Content Gateway. All rights reserved.</span>
      </div>
    </div>
  );
}