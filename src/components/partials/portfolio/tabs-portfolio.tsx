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
                <div>
                  <h4 className="font-medium mb-3">
                    Video Kreatif (1 video perkenalan)
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pakaian: standar perkuliahan</li>
                    <li>• Bahasa Indonesia yang benar dan jelas</li>
                    <li>• Perkenalkan nama dan program studi</li>
                    <li>• Jelaskan alasan memilih PENS dan ENT</li>
                    <li>• Jelaskan alasan memilih divisi reporter</li>
                    <li>• In-frame sejak awal hingga akhir</li>
                    <li>• Portrait dengan rasio 9:16</li>
                    <li>• Durasi 1–1.15 menit</li>
                    <li>• Upload di Instagram (tidak private)</li>
                    <li>• Tag @entcrews #OPRECENT #GEN20</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Artikel (1 artikel)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Topik: Semua tentang PENS</li>
                    <li>
                      • Subtopik: Mengapa PENS, Prestasi PENS, Wadah
                      pengembangan diri, Sejarah PENS
                    </li>
                    <li>• Panjang: 300-500 kata</li>
                    <li>• Format: PDF, ukuran A4</li>
                    <li>• Font: Times New Roman, 12pt</li>
                    <li>• Spasi: 1.5</li>
                    <li>• Perataan: Justified</li>
                    <li>• Margin: 3333"</li>
                    <li>• Format nama: "20_ARTIKEL_NAMA"</li>
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
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Pilih salah satu topik:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • Opini (tanggapan kritis terhadap isu sosial/kampus)
                      </li>
                      <li>• Tren (fenomena yang sedang ramai)</li>
                      <li>• Teknologi (hal berbau teknologi)</li>
                      <li>• Tips & Trik (panduan praktis untuk mahasiswa)</li>
                    </ul>
                  </div>
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
                <h4 className="font-medium mb-3">Portofolio (6 foto)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Komposisi foto:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 2 foto human interest (landscape)</li>
                      <li>• 3 foto event/jurnalis (landscape)</li>
                      <li>• 1 foto terbaik (landscape/portrait)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Syarat:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Foto dari 1 tahun terakhir</li>
                      <li>• Karya orisinil sendiri</li>
                      <li>• Basic correction saja</li>
                      <li>• Sertakan caption, watermark, exif</li>
                      <li>• Format PDF</li>
                      <li>• Prestasi fotografi (jika ada)</li>
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
              <div>
                <h4 className="font-medium mb-3">Video Perkenalan (1 video)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Durasi maksimal 1 menit</li>
                  <li>• Tunjukkan siapa kamu dan passion di bidang media</li>
                  <li>• Jelaskan kenapa cocok jadi bagian tim ENT</li>
                  <li>• Upload ke feed Instagram pribadi</li>
                  <li>• Tag @entcrews di caption/video</li>
                  <li>• Hashtag: #ENTChallenge2025 #ENTRecruitment #ENTPENS</li>
                  <li>• Akun tidak dalam mode privat</li>
                </ul>
              </div>
            </div>

            {/* Desain Grafis */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-yellow-600" />
                Desain Grafis
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">
                    Request Desain Feed Instagram
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3 desain Feed Instagram</li>
                    <li>• Tema interaktif promosi ENT</li>
                    <li>• Ukuran: 1080 x 1350 piksel</li>
                    <li>• Wajib header dan footer</li>
                    <li>• Tidak mengandung SARA</li>
                    <li>• Bahasa Indonesia yang baik</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Portofolio Desain</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hasil karya desain yang telah dibuat</li>
                    <li>• Digabung dengan request desain</li>
                    <li>• Format: 1 file PDF</li>
                    <li>• Ukuran maksimal: 200 MB</li>
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
                <h4 className="font-medium mb-3">CV & Ilustrasi</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CV dan portfolio dikirim terpisah</li>
                  <li>• Buat ilustrasi 2D atau 3D untuk media sosial kampus</li>
                  <li>• Tema: Hari Pendidikan Indonesia</li>
                  <li>
                    • Gabungkan portofolio terbaik dengan 1 ilustrasi request
                  </li>
                  <li>• Format: 1 file PDF</li>
                  <li>• Gunakan bahasa Inggris yang konsisten</li>
                </ul>
              </div>
            </div>

            {/* Perencanaan Konten */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-600" />
                Perencanaan Konten
              </h3>
              <div>
                <h4 className="font-medium mb-3">Video (1 video)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Format Portrait/ukuran reels Instagram</li>
                  <li>• Durasi: 1.00 - 1.30 menit</li>
                  <li>• Busana sopan dan rapi</li>
                  <li>• Perkenalkan diri dan prodi</li>
                  <li>• Deskripsikan pengalaman terbaik pada portofolio</li>
                  <li>• Alasan join divisi perencanaan konten</li>
                  <li>• Tidak mengandung SARA</li>
                  <li>• Dibuat kreatif dan unik</li>
                  <li>• Upload Instagram (tidak private)</li>
                  <li>• Tag @entcrews #oprecentgen20</li>
                  <li>• Caption: nama, prodi, divisi</li>
                </ul>
              </div>
            </div>

            {/* Webmaster */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-600" />
                Webmaster
              </h3>
              <div>
                <h4 className="font-medium mb-3">Landing Page</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Buat portofolio landing page yang kreatif</li>
                  <li>• Screenshot seluruh halaman website</li>
                  <li>
                    • Simpan dalam folder Google Drive format "divisi_nama"
                  </li>
                  <li>• Compress file dalam format .zip</li>
                  <li>• Masukkan file website ke folder Google Drive</li>
                  <li>• Kumpulkan link Google Drive (status shared)</li>
                  <li>• Point plus: publish via hosting/GitHub</li>
                  <li>
                    • Masukkan link URL dalam dokumen PDF format "URL_nama"
                  </li>
                  <li>• Gunakan bahasa Inggris yang konsisten</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
