import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle,
  FileText,
  UserPlus,
  Printer,
  FileCheck,
  ArrowRight,
  Calendar,
  Camera,
  Code,
  Palette,
  PenTool,
  Video,
} from "lucide-react";
import { Link } from "react-router";
import { portfolioRequirements } from "@/data/portfolio";

export default function TabsGuidebook() {
  return (
    <TabsContent value="guidebook" className="space-y-8">
      {/* 1. Stepper Alur Pendaftaran */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <span>🗺️</span> Alur Pendaftaran ENT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="flex flex-col bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200 group-hover:text-blue-100 transition-colors select-none">
              01
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <UserPlus className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Registrasi Online</h4>
            <p className="text-sm text-gray-600 flex-grow mb-4">
              Isi formulir pendaftaran, tentukan divisi pilihan Anda, dan unggah berkas/link portofolio terbaik Anda.
            </p>
            <Link
              to="/registration"
              className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 gap-1 mt-auto"
            >
              Isi Form Online <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200 group-hover:text-purple-100 transition-colors select-none">
              02
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <Printer className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Cetak & Siapkan Berkas</h4>
            <p className="text-sm text-gray-600 flex-grow mb-2">
              Cek status pendaftaran Anda, unduh PDF formulir, cetak di kertas A4, dan tempel pas foto 3x4.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Siapkan juga CV cetak, foto KTM, dan sertifikat pendukung.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group">
            <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200 group-hover:text-green-100 transition-colors select-none">
              03
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <FileCheck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Pengumpulan Fisik</h4>
            <p className="text-sm text-gray-600 flex-grow mb-4">
              Masukkan seluruh dokumen ke dalam Map-L Bening, bawa ke Lab ENT (Gedung D3 Lt. 2), dan lakukan konfirmasi kehadiran.
            </p>
            <span className="text-xs font-semibold text-green-600 mt-auto bg-green-50 px-2 py-1 rounded w-fit">
              Pukul 14.00 - 17.30 WIB
            </span>
          </div>
        </div>
      </div>

      {/* 2. Informasi Kelengkapan & Detail Portofolio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kiri (2/3 lebar): Detail Portofolio Divisi */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-600" />
                Detail Persyaratan Portofolio
              </CardTitle>
              <CardDescription>
                Persyaratan khusus portofolio untuk setiap pilihan divisi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Grid Ringkasan Portofolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioRequirements.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.division}
                      className="p-4 border rounded-xl hover:shadow-sm transition-all duration-200 bg-slate-50/50 flex gap-3 items-start"
                    >
                      <div
                        className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {item.division}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">{item.portfolio}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg text-gray-900 mb-6">
                  Ketentuan Detail per Divisi:
                </h3>
                <div className="space-y-6">
                  {/* Reporter */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <PenTool className="w-5 h-5 text-blue-600" />
                      Reporter
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-800 mb-2">
                          Video Kreatif (1 video perkenalan)
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>Pakaian: standar perkuliahan</li>
                          <li>Bahasa Indonesia yang benar dan jelas</li>
                          <li>Perkenalkan nama dan program studi</li>
                          <li>Jelaskan alasan memilih PENS dan ENT</li>
                          <li>Jelaskan alasan memilih divisi reporter</li>
                          <li>In-frame sejak awal hingga akhir</li>
                          <li>Portrait dengan rasio 9:16</li>
                          <li>Durasi 1–1.15 menit</li>
                          <li>Upload di Instagram (tidak private)</li>
                          <li>Tag @entcrews #OPRECENT #GEN20</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-800 mb-2">
                          Artikel (1 artikel)
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>Topik: Semua tentang PENS</li>
                          <li>
                            Subtopik: Mengapa PENS, Prestasi PENS, Wadah
                            pengembangan diri, Sejarah PENS
                          </li>
                          <li>Panjang: 300-500 kata</li>
                          <li>Format: PDF, ukuran A4</li>
                          <li>Font: Times New Roman, 12pt</li>
                          <li>Spasi: 1.5</li>
                          <li>Perataan: Justified</li>
                          <li>Margin: standard</li>
                          <li>Format nama: "20_ARTIKEL_NAMA"</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Copywriter */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Copywriter
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      Artikel (1 artikel)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold mb-2 text-gray-700">
                          Pilih salah satu topik:
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>Opini (tanggapan kritis terhadap isu sosial/kampus)</li>
                          <li>Tren (fenomena yang sedang ramai)</li>
                          <li>Teknologi (hal berbau teknologi)</li>
                          <li>Tips & Trik (panduan praktis untuk mahasiswa)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-2 text-gray-700">Ketentuan:</p>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>400–600 kata</li>
                          <li>Tidak mengandung unsur SARA</li>
                          <li>Bahasa Indonesia yang jelas</li>
                          <li>Format PDF, ukuran A4</li>
                          <li>Font Times New Roman, 12pt, spasi 1.5</li>
                          <li>Rata kanan kiri (justify)</li>
                          <li>Margin: 3 cm semua sisi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Fotografer */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-purple-600" />
                      Fotografer
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      Portofolio (6 foto)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold mb-2 text-gray-700">Komposisi foto:</p>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>2 foto human interest (landscape)</li>
                          <li>3 foto event/jurnalis (landscape)</li>
                          <li>1 foto terbaik (landscape/portrait)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-2 text-gray-700">Syarat & Ketentuan:</p>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>Foto dari 1 tahun terakhir</li>
                          <li>Karya orisinil sendiri</li>
                          <li>Basic correction saja (no heavy edit)</li>
                          <li>Sertakan caption, watermark, exif</li>
                          <li>Format PDF</li>
                          <li>Prestasi fotografi (jika ada)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Videografer */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Video className="w-5 h-5 text-red-600" />
                      Videografer
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      Video Perkenalan (1 video)
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                      <li>Durasi maksimal 1 menit</li>
                      <li>Tunjukkan siapa kamu dan passion di bidang media</li>
                      <li>Jelaskan kenapa cocok jadi bagian tim ENT</li>
                      <li>Upload ke feed Instagram pribadi</li>
                      <li>Tag @entcrews di caption/video</li>
                      <li>Hashtag: #ENTChallenge2025 #ENTRecruitment #ENTPENS</li>
                      <li>Akun tidak dalam mode privat</li>
                    </ul>
                  </div>

                  {/* Desain Grafis */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-yellow-600" />
                      Desain Grafis
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-800 mb-2">
                          Request Desain Feed Instagram
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>3 desain Feed Instagram</li>
                          <li>Tema interaktif promosi ENT</li>
                          <li>Ukuran: 1080 x 1350 piksel</li>
                          <li>Wajib menggunakan header dan footer</li>
                          <li>Tidak mengandung unsur SARA</li>
                          <li>Bahasa Indonesia yang baik</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-800 mb-2">
                          Portofolio Desain
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                          <li>Hasil karya desain terbaik yang telah dibuat</li>
                          <li>Digabungkan dengan request desain</li>
                          <li>Format: 1 file PDF</li>
                          <li>Ukuran file maksimal: 200 MB</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Illustrator */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <PenTool className="w-5 h-5 text-indigo-600" />
                      Illustrator
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      CV & Ilustrasi
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                      <li>CV dan portfolio dikirim terpisah</li>
                      <li>Buat ilustrasi 2D atau 3D untuk media sosial kampus</li>
                      <li>Tema: Hari Pendidikan Indonesia</li>
                      <li>Gabungkan portofolio terbaik dengan 1 ilustrasi request</li>
                      <li>Format: 1 file PDF</li>
                      <li>Gunakan bahasa Inggris yang konsisten</li>
                    </ul>
                  </div>

                  {/* Perencanaan Konten */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-pink-600" />
                      Perencanaan Konten (Content Planner)
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      Video Perkenalan (1 video)
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                      <li>Format Portrait / ukuran Reels Instagram</li>
                      <li>Durasi: 1.00 - 1.30 menit</li>
                      <li>Busana sopan dan rapi</li>
                      <li>Perkenalkan diri dan prodi</li>
                      <li>Deskripsikan pengalaman terbaik pada portofolio</li>
                      <li>Alasan join divisi perencanaan konten</li>
                      <li>Tidak mengandung SARA</li>
                      <li>Dibuat kreatif dan unik</li>
                      <li>Upload ke Instagram (tidak private)</li>
                      <li>Tag @entcrews #oprecentgen20</li>
                      <li>Caption: Nama, Prodi, Divisi</li>
                    </ul>
                  </div>

                  {/* Webmaster */}
                  <div className="border rounded-xl p-5 hover:border-slate-300 transition-all bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-teal-600" />
                      Webmaster
                    </h3>
                    <h4 className="font-semibold text-sm text-slate-800 mb-2">
                      Landing Page
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                      <li>Buat portofolio landing page yang kreatif</li>
                      <li>Screenshot seluruh halaman website</li>
                      <li>Simpan dalam folder Google Drive format "divisi_nama"</li>
                      <li>Compress file dalam format .zip</li>
                      <li>Masukkan file website ke folder Google Drive</li>
                      <li>Kumpulkan link Google Drive (status shared / public)</li>
                      <li>Poin plus: publish via hosting / GitHub Pages</li>
                      <li>Masukkan link URL dalam dokumen PDF format "URL_nama"</li>
                      <li>Gunakan bahasa Inggris yang konsisten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kanan (1/3 lebar): Panduan Pemberkasan Fisik */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Pemberkasan Fisik
              </CardTitle>
              <CardDescription>
                Ketentuan dokumen yang harus diserahkan ke Lab
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Map L info */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 items-start">
                <span className="text-2xl select-none">📁</span>
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm">Map-L Bening & Paperclip</h4>
                  <p className="text-xs text-blue-800 mt-1 leading-relaxed">
                    Semua dokumen harus dimasukkan ke dalam map-L bening dan disatukan rapi menggunakan paperclip.
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-3">Dokumen Pendaftaran:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs text-slate-800">Foto Formal</p>
                      <p className="text-[11px] text-gray-600">Pas foto 3x4 background biru (1 lembar)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs text-slate-800">Berkas Formulir</p>
                      <p className="text-[11px] text-gray-600">Dicetak di kertas A4 dengan foto yang tertempel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs text-slate-800">Curriculum Vitae (CV)</p>
                      <p className="text-[11px] text-gray-600">CV kreatif berwarna yang dicetak di kertas A4</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs text-slate-800">Fotokopi KTM</p>
                      <p className="text-[11px] text-gray-600">Fotokopi KTM bolak-balik tanpa terpotong (atau bukti KTM Sementara / screenshot MIS)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs text-slate-800">Sertifikat Penghargaan</p>
                      <p className="text-[11px] text-gray-600">Fotokopi sertifikat prestasi/juara lomba jika ada (opsional)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proses Pengumpulan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-bold">Absensi & Penyerahan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 select-none">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-gray-900">Pengiriman Berkas</h4>
                  <p className="text-[11px] text-gray-600 mt-0.5">Bawa berkas ke Lab ENT pada pukul 14.00 - 17.30 WIB.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 select-none">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-gray-900">Konfirmasi ke CP</h4>
                  <p className="text-[11px] text-gray-600 mt-0.5">Hubungi Contact Person terlebih dahulu sebelum menyerahkan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 select-none">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-gray-900">Konfirmasi Tanda Tangan</h4>
                  <p className="text-[11px] text-gray-600 mt-0.5">Tulis nama dan tanda tangan Anda di lembar absensi penerimaan Lab.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catatan Penting */}
          <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
            <h3 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-1.5">
              <span>⚠️</span> Penting!
            </h3>
            <ul className="space-y-1.5 text-red-800 text-[11px] leading-relaxed list-disc list-inside">
              <li>Pastikan dokumen lengkap sebelum pengumpulan.</li>
              <li>Datang tepat waktu sesuai jadwal (14.00 - 17.30).</li>
              <li>Jangan lupa tanda tangan saat berkas diterima.</li>
            </ul>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
