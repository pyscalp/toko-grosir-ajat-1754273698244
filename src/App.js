export function createApp() {
  const businessInfo = {
    name: "Toko Grosir Ajat",
    type: "Grosir & Eceran",
    description: "Toko grosir terpercaya yang menyediakan berbagai kebutuhan sehari-hari dengan harga grosir terjangkau. Melayani pembelian eceran dan grosir untuk kebutuhan rumah tangga, warung, dan toko.",
    address: "Jl. Contoh Raya No. 123, Kota Contoh, Jawa Barat",
    phone: "+6281234567890",
    whatsapp: "https://wa.me/+6281234567890",
    email: "tokoajagrosir@example.com",
    hours: "Senin - Sabtu: 08.00 - 17.00 WIB",
    socials: [
      { platform: "Facebook", link: "https://www.facebook.com/tokoajagrosir" },
      { platform: "Instagram", link: "https://www.instagram.com/tokoajagrosir" },
    ],
  };

  const testimonials = [
    {
      name: "Bu Ani",
      testimonial:
        "Toko Grosir Ajat sangat membantu usaha warung saya. Harganya murah dan barangnya lengkap.  Pelayanannya juga ramah!",
    },
    {
      name: "Pak Budi",
      testimonial:
        "Saya puas berbelanja di Toko Grosir Ajat.  Produknya berkualitas dan pengirimannya cepat.  Sangat direkomendasikan!",
    },
    {
      name: "Mba Siti",
      testimonial:
        "Sebagai pelanggan eceran, saya merasa dihargai di Toko Grosir Ajat.  Pelayanannya baik dan pilihan barangnya beragam.",
    },
  ];


  return `
    <!DOCTYPE html>
    <html lang="id" class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessInfo.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    </head>
    <body class="font-Poppins bg-gray-100">
      <header class="bg-white shadow-lg fixed w-full z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-blue-600">${businessInfo.name}</h1>
          <nav>
            <ul class="flex space-x-6">
              <li><a href="#about" class="hover:text-blue-600">Tentang Kami</a></li>
              <li><a href="#services" class="hover:text-blue-600">Produk</a></li>
              <li><a href="#testimonials" class="hover:text-blue-600">Testimonial</a></li>
              <li><a href="#contact" class="hover:text-blue-600">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Toko Grosir Terpercaya</h2>
          <p class="text-lg mb-8">${businessInfo.description}</p>
          <a href="#contact" class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">Hubungi Kami</a>
        </div>
      </section>

      <section id="about" class="py-16 bg-gray-50">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Tentang Toko Grosir Ajat</h2>
          <p class="text-lg mb-8">Kami menyediakan berbagai kebutuhan sehari-hari dengan harga grosir yang terjangkau, baik untuk pembelian eceran maupun grosir.  Kualitas dan kepuasan pelanggan adalah prioritas utama kami.  Kami berkomitmen untuk memberikan pelayanan terbaik dan produk-produk berkualitas tinggi untuk memenuhi kebutuhan Anda.</p>
          <p class="text-lg mb-8">Kami melayani berbagai kebutuhan, termasuk kebutuhan rumah tangga, warung makan, hingga toko kelontong. Dengan harga bersaing dan pelayanan yang ramah, kami berharap dapat menjadi mitra bisnis Anda yang terpercaya.</p>
        </div>
      </section>

      <section id="services" class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Produk Unggulan Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Add product cards here -->
            <div class="bg-white shadow-md rounded-lg p-6">
              <h3 class="text-xl font-bold mb-2">Minyak Goreng</h3>
              <p>Berbagai pilihan minyak goreng berkualitas dengan harga grosir terjangkau.</p>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6">
              <h3 class="text-xl font-bold mb-2">Gula Pasir</h3>
              <p>Gula pasir berkualitas tinggi dengan harga kompetitif, cocok untuk kebutuhan rumah tangga dan usaha.</p>
            </div>
            <div class="bg-white shadow-md rounded-lg p-6">
              <h3 class="text-xl font-bold mb-2">Beras</h3>
              <p>Berbagai jenis beras pilihan dengan kualitas terbaik dan harga yang bersaing.</p>
            </div>
            <!-- Add more product cards as needed -->
          </div>
        </div>
      </section>

      <section id="testimonials" class="py-16 bg-gray-50">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Testimonial Pelanggan</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${testimonials.map(testimonial => `
              <div class="bg-white shadow-md rounded-lg p-6">
                <p class="text-lg mb-4">"${testimonial.testimonial}"</p>
                <p class="font-bold">- ${testimonial.name}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="contact" class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-1/2">
              <p class="mb-4">Alamat: ${businessInfo.address}</p>
              <p class="mb-4">Telepon: ${businessInfo.phone}</p>
              <p class="mb-4">Jam Buka: ${businessInfo.hours}</p>
              <p class="mb-4">Email: <a href="mailto:${businessInfo.email}">${businessInfo.email}</a></p>
              <div class="flex space-x-4">
                ${businessInfo.socials.map(social => `<a href="${social.link}" target="_blank" class="text-blue-500 hover:underline">${social.platform}</a>`).join('')}
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <a href="${businessInfo.whatsapp}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full">Hubungi via WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto text-center">
          <p>&copy; ${new Date().getFullYear()} Toko Grosir Ajat. All rights reserved.</p>
        </div>
      </footer>
    </body>
    </html>
  `;
}
