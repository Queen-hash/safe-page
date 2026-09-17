export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {/* Header Artikel */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            5 Rekomendasi Sepatu Futsal Lokal Terbaik untuk Lapangan Sintetis
          </h1>
          <div className="flex items-center text-sm text-gray-500">
            <span>Ditulis oleh Redaksi Olahraga</span>
            <span className="mx-2">•</span>
            <time>September 2026</time>
          </div>
        </header>

        {/* Gambar Utama Artikel */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80" 
            alt="Sepatu Futsal di Lapangan" 
            className="w-full h-64 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Isi Artikel */}
        <article className="prose prose-lg text-gray-700 max-w-none">
          <p className="mb-6">
            Memilih sepatu futsal yang tepat sangat krusial untuk mencegah cedera dan meningkatkan performa, 
            terutama jika Anda sering bermain di lapangan rumput sintetis. Brand lokal kini sudah memiliki kualitas 
            yang mampu bersaing dengan merek global.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. Ortuseight Jogosala</h2>
          <p className="mb-6">
            Seri Jogosala dari Ortuseight selalu menjadi primadona berkat teknologi bantalan sol yang sangat empuk (Cumulus Foam). 
            Sepatu ini sangat cocok untuk pemain berposisi flank yang membutuhkan kelincahan ekstra.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. Specs Lightspeed</h2>
          <p className="mb-6">
            Jika Anda mencari sepatu dengan bobot teringan, Specs Lightspeed adalah jawabannya. Material upper yang 
            tipis namun kuat memberikan sentuhan bola (ball feel) yang sangat natural, layaknya bermain tanpa sepatu.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Tips Tambahan</h2>
          <p className="mb-6">
            Pastikan Anda memilih jenis sol berpul kecil (Turf/TF) jika bermain di lapangan sintetis, bukan sol karet datar (Indoor/IN) 
            agar cengkeraman sepatu ke rumput lebih maksimal dan tidak mudah terpeleset.
          </p>
        </article>
      </main>
    </div>
  );
}