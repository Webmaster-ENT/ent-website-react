import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { portfolioRequirements } from "@/data/portfolio";
import {
  Calendar,
  Camera,
  Code,
  FileText,
  Palette,
  PenTool,
  Video,
} from "lucide-react";

export default function TabsPortfolio() {
  return (
    <TabsContent value="portfolio" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-600" />
            Detail Portofolio
          </CardTitle>
          <CardDescription>
            Persyaratan portofolio untuk setiap divisi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {portfolioRequirements.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.division}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {item.division}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.portfolio}</p>
                </div>
              );
            })}
          </div>

          {/* Detailed Requirements */}
          <div className="space-y-8">
            {/* Reporter */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-blue-600" />
                Reporter
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Bagian Video Kreatif */}
                <div>
                  <h4 className="font-medium mb-3">Video Kreatif</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pakaian: standar perkuliahan</li>
                    <li>• Menggunakan bahasa Indonesia yang benar dan jelas</li>
                    <li>• Memperkenalkan nama dan program studi</li>
                    <li>• Jelaskan alasan memilih Kampus PENS dan alasan ingin bergabung dengan ENT</li>
                    <li>• Jelaskan alasan memilih divisi reporter</li>
                    <li>• Peserta harus in-frame sejak awal hingga akhir video</li>
                    <li>• Video berorientasi portrait dengan rasio 9:16</li>
                    <li>• Video dapat diedit se-kreatif mungkin</li>
                    <li>• Video dibawakan dengan intonasi suara yang tegas, artikulasi jelas, dan berenergi layaknya seorang reporter</li>
                    <li>• Dilarang menyinggung SARA (suku, ras, agama, antar golongan)</li>
                    <li>• Durasi 1–1.15 menit</li>
                  </ul>
                </div>
                
                {/* Bagian Berita */}
                <div>
                  <h4 className="font-medium mb-3">Berita</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Topik:</li>
                    <li className="ml-4">- Sosial & Lingkungan: Pengabdian masyarakat, kegiatan ramah lingkungan (green campus), serta isu sosial di sekitar kampus PENS.</li>
                    <li className="ml-4">- Sains & Teknologi: Inovasi riset, prestasi tim kompetisi, serta pemanfaatan teknologi di lingkungan PENS.</li>
                    <li>• Panjang kata: 350-500 kata (tanpa gambar)</li>
                    <li>• Tidak mengandung konten sensitif SARA (suku, agama, ras, antar golongan)</li>
                    <li>• Format dokumen: PDF, ukuran A4</li>
                    <li>• Huruf: Times New Roman, 12pt</li>
                    <li>• Spasi: 1.5</li>
                    <li>• Perataan: Justified alignment</li>
                    <li>• Margin: 3333</li>
                  </ul>
                </div>

                {/* Bagian Teknis Pengumpulan */}
                <div className="md:col-span-2 mt-2 pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">Teknis Pengumpulan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unggah video di akun Instagram pribadi (tidak di-private)</li>
                    <li>• Tag akun Instagram ENT @entcrews dan cantumkan hashtag #OPRECENT #GEN21</li>
                    <li>• Format nama file artikel: "21_ARTIKEL_NAMA" (Contoh: 21_Artikel_Azzahra Zahirah)</li>
                    <li>• Portofolio diunggah ke folder Google Drive dengan penamaan "Reporter_Nama_NRP" (Contoh: Reporter_Azzahra Zahirah_5325600081)</li>
                  </ul>
                </div>
                
              </div>
            </div>

            {/* Copywriter */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                Copywriter
              </h3>
              <div>
                <h4 className="font-medium mb-3">Artikel (1 artikel)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  
                  {/* Pilihan Topik */}
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Pilih salah satu topik:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Opini (tanggapan kritis terhadap isu sosial/kampus)</li>
                      <li>• Tren (fenomena yang sedang ramai)</li>
                      <li>• Teknologi (hal berbau teknologi)</li>
                      <li>• Tips & Trik (panduan praktis untuk mahasiswa)</li>
                    </ul>
                  </div>
                  
                  {/* Ketentuan */}
                  <div>
                    <p className="text-sm font-medium mb-2">Ketentuan:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 400–600 kata</li>
                      <li>• Tidak mengandung unsur SARA</li>
                      <li>• Bahasa Indonesia yang jelas</li>
                      <li>• Format PDF, ukuran A4</li>
                      <li>• Font Times New Roman, 12pt, spasi 1.5</li>
                      <li>• Rata kanan kiri (justify)</li>
                      <li>• Margin: 3 cm semua sisi</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Fotografer */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-purple-600" />
                Fotografer
              </h3>
              <div>
                <h4 className="font-medium mb-3">Portofolio (6 Foto dalam 1 file PDF)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Bagian Komposisi & Detail Foto */}
                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Komposisi Tema Foto:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 2 foto Human Interest (landscape)</li>
                        <li>• 3 foto Event atau Jurnalis (landscape)</li>
                        <li>• 1 foto Terbaik versi dirimu (landscape atau portrait)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Ketentuan Konten Foto:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wajib menyertakan caption, watermark, serta exif di masing-masing foto</li>
                        <li>• Ketentuan Exif mencakup: Device, Segitiga exposure, Tanggal, dan Focal length</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Bagian Syarat & Ketentuan */}
                  <div>
                    <p className="text-sm font-medium mb-2">Syarat & Ketentuan:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Karya orisinil milik sendiri yang diambil dalam 1 tahun terakhir (plagiasi = diskualifikasi)</li>
                      <li>• Penyuntingan foto hanya sebatas basic correction. Dilarang melakukan color grading atau menambah/menghilangkan objek</li>
                      <li>• Jika ada prestasi atau pencapaian di bidang fotografi dapat dicantumkan</li>
                      <li>• Seluruh portofolio dijadikan dalam satu file berbentuk PDF</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Videografer */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-red-600" />
                Videografer
              </h3>
              
              <div className="space-y-6">
                {/* Bagian Persyaratan Portofolio */}
                <div>
                  <h4 className="font-medium mb-3">Persyaratan Portofolio</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Upload 3 karya video yang pernah dibuat/diedit sendiri (bebas tema) ke Google Drive masing-masing (maksimal 2 tahun terakhir).</li>
                    <li>• Menyertakan portofolio dokumentasi project yang pernah dilakukan.</li>
                    <li>• Wajib menjelaskan kontribusi/peran dalam project tersebut (misal: sebagai editor, videografer, dll).</li>
                    <li>• Menyertakan penghargaan/sertifikat lomba 2 tahun terakhir (opsional).</li>
                  </ul>
                </div>

                {/* Bagian Persyaratan Pengumpulan */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">Persyaratan Pengumpulan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Buat folder Google Drive berisi seluruh dokumen portofolio sesuai instruksi di atas.</li>
                    <li>• Bagikan link folder dengan format penamaan: "Divisi_Nama_NRP" (Contoh: Videografer_Nama_NRP).</li>
                    <li>• Pastikan link Google Drive tersebut dapat diakses publik (set ke "Anyone with the link can view").</li>
                    <li>• Tempelkan link folder Google Drive tersebut ke dalam form pendaftaran di website ENT.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desain Grafis */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-yellow-600" />
                Desain Grafis
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Bagian Request Desain */}
                <div>
                  <h4 className="font-medium mb-3">1. Request Desain Feed Instagram</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Membuat tiga (3) desain carousel Instagram bertema edukatif mengenai tips produktif kuliah, dengan ketentuan:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ukuran desain: 1080 x 1350 piksel</li>
                    <li>• Wajib mencantumkan header dan footer</li>
                    <li>• Tidak mengandung unsur SARA (Suku, Agama, Ras, dan Antargolongan)</li>
                    <li>• Menggunakan bahasa Indonesia yang baik dan benar</li>
                  </ul>
                </div>
                
                {/* Bagian Portofolio */}
                <div>
                  <h4 className="font-medium mb-3">2. Portofolio Desain</h4>
                  <p className="text-sm text-gray-600">
                    Peserta diwajibkan menyusun portofolio yang merangkum seluruh hasil karya desain yang telah dibuat sebelumnya.
                  </p>
                </div>

                {/* Bagian Submission Format */}
                <div className="md:col-span-2 pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">3. Submission Format</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Request Desain dan Portofolio harus digabungkan dalam satu (1) file PDF.</li>
                    <li>• Ukuran maksimal file adalah 100 MB.</li>
                  </ul>
                </div>
                
              </div>
            </div>

            {/* Illustrator */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-indigo-600" />
                Illustrator
              </h3>
              
              <div>
                <h4 className="font-medium mb-3">Tugas Pembuatan Poster</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Membuat sebuah poster dengan ketentuan sebagai berikut:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Canvas berukuran A4 dengan resolusi 300ppi (pixel per inch)</li>
                  <li>• Bertemakan "Hari Anak Nasional"</li>
                  <li>• Wajib mencantumkan judul dan tanggal dirayakannya hari tersebut</li>
                  <li>• Menampilkan watermark menggunakan nama lengkap peserta</li>
                  <li>• Tidak diperbolehkan menggunakan bantuan AI (Artificial Intelligence) dalam bentuk apapun</li>
                </ul>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-2">Format Pengumpulan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Poster dikumpulkan dengan format file PDF</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Perencanaan Konten */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-600" />
                Perencanaan Konten
              </h3>
              
              <div className="space-y-6">
                
                {/* Bagian Portofolio */}
                <div>
                  <h4 className="font-medium mb-3">1. Portofolio (Maksimal 3 Karya)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Mengumpulkan maksimal 3 karya terbaik yang relevan dengan bidang perencanaan konten, media sosial, atau komunikasi kreatif.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Jenis karya dapat berupa:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Konten media sosial (feed, carousel, reels, TikTok, dll.)</li>
                        <li>• Desain publikasi atau kampanye digital</li>
                        <li>• Video kreatif</li>
                        <li>• Kalender konten / content planning</li>
                        <li>• Strategi kampanye media sosial</li>
                        <li>• Pengelolaan akun organisasi, komunitas, atau bisnis</li>
                        <li>• Proyek kreatif lainnya yang relevan</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Detail wajib untuk setiap karya:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Judul karya & Tahun pembuatan</li>
                        <li>• Peran peserta dalam proyek</li>
                        <li>• Tujuan pembuatan karya</li>
                        <li>• Penjelasan singkat proses ideasi/perencanaan</li>
                        <li>• Hasil akhir karya</li>
                        <li>• Insight atau pencapaian (jika tersedia)</li>
                        <li>• Refleksi dan evaluasi terhadap konten</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bagian Video Kreatif */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">2. Video Kreatif</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Ketentuan Video:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Format portrait (Instagram Reels)</li>
                        <li>• Durasi 1.00 - 1.30 menit</li>
                        <li>• Berpakaian sopan dan rapi, bebas SARA</li>
                        <li>• Dikemas secara kreatif dan menarik</li>
                        <li>• Diunggah di IG (akun tidak diprivate)</li>
                        <li>• Tag @entcrews dan hashtag #oprecentgen21 #PerencanaanKontenENT21</li>
                        <li>• Cantumkan nama, prodi, dan divisi pada caption kreatif</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Isi Video Wajib Memuat:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Perkenalan diri singkat beserta hidden talent/kemampuan unik</li>
                        <li>• Penjelasan salah satu karya terbaik dari portofolio beserta alasan di balik pembuatannya</li>
                        <li>• Alasan bergabung dengan Divisi Perencanaan Konten</li>
                        <li>• Satu ide atau harapan yang ingin diwujudkan untuk akun medsos ENT jika diterima</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bagian Pengumpulan */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">3. Pengumpulan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Video kreatif dan portofolio dikumpulkan dalam bentuk Google Docs/PDF.</li>
                    <li>• Jadikan dalam satu tautan folder Google Drive (pastikan akses publik/Anyone with the link).</li>
                    <li>• Unggah link pendaftaran tersebut ke form pendaftaran di website ENT.</li>
                  </ul>
                </div>
                
              </div>
            </div>

            {/* Webmaster */}
<div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-600" />
                Webmaster
              </h3>
              
              <div className="space-y-6">
                
                {/* Bagian Website Portofolio */}
                <div>
                  <h4 className="font-medium mb-3">1. Website Portofolio</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Buat sebuah website landing page yang memuat informasi mengenai diri Anda, seperti:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Perkenalan singkat</li>
                    <li>• Skills / Tech Stack</li>
                    <li>• Pengalaman</li>
                    <li>• Project</li>
                    <li>• Kontak</li>
                    <li>• Informasi lain yang relevan</li>
                  </ul>
                </div>

                {/* Bagian Project Website */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">2. Project Website</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Kumpulkan salah satu website terbaik yang pernah Anda kerjakan, baik berupa:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 grid grid-cols-2 gap-2">
                    <li>• Project pribadi</li>
                    <li>• Project tim</li>
                    <li>• Project freelance</li>
                    <li>• Project akademik</li>
                  </ul>
                </div>

                {/* Bagian Ketentuan Pengumpulan */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium mb-3">3. Ketentuan Pengumpulan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Buat folder Google Drive dengan format nama: <span className="font-semibold">Webmaster21_NamaLengkap</span></li>
                    <li>• Ambil screenshot seluruh halaman website yang dikumpulkan, lalu simpan ke dalam folder tersebut.</li>
                    <li>• Masukkan source code website ke dalam folder yang sama dalam format <span className="font-semibold">.zip</span>.</li>
                    <li>• Kumpulkan link Google Drive melalui formulir yang telah disediakan panitia.</li>
                    <li>• <span className="font-medium text-red-500">* Penting:</span> Pastikan folder Google Drive dapat diakses oleh publik (set ke "Anyone with the link") agar panitia dapat melakukan penilaian.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
