import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Temukan jawaban untuk pertanyaan umum tentang proses pendaftaran ENT
        </p>
      </div>

      {/* FAQ Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Pertanyaan yang Sering Diajukan
          </CardTitle>
          <CardDescription>
            Klik pada pertanyaan untuk melihat jawabannya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Berapa lama proses pendaftaran berlangsung?
              </AccordionTrigger>
              <AccordionContent>
                Proses pendaftaran biasanya memakan waktu 15-30 menit untuk
                diselesaikan, tergantung seberapa cepat Anda dapat mengumpulkan
                dan mengunggah dokumen yang diperlukan. Setelah diserahkan,
                pemrosesan biasanya memakan waktu 2-5 hari kerja.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Format file apa yang diterima untuk upload dokumen?
              </AccordionTrigger>
              <AccordionContent>
                Kami menerima file PDF, JPG, PNG, dan TIFF. Setiap file harus
                berukuran di bawah 10MB. Pastikan dokumen Anda jelas dan semua
                teks dapat dibaca dengan baik.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apakah mahasiswa semester 3 ke atas bisa mendaftar ke ENT?
              </AccordionTrigger>
              <AccordionContent>
                Maaf, tetapi ENT hanya membuka pendaftaran untuk mahasiswa baru (freshmen).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Apa benefit yang didapatkan jika bergabung ke ENT?
              </AccordionTrigger>
              <AccordionContent>
                Kamu akan mendapatkan pengalaman yang berharga di bidang jurnalistik, 
                memperbagus portofolio untuk dimasukkan ke CV atau LinkedIn, 
                serta akses ke lab ENT yang berada di ruangan PS-01.11.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Apakah ada biaya pendaftaran?</AccordionTrigger>
              <AccordionContent>
                Pendaftaran ENT tidak dikenakan biaya. Proses seleksi dan
                pendaftaran sepenuhnya gratis untuk semua mahasiswa PENS yang
                memenuhi syarat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Bagaimana cara mengecek status aplikasi saya?
              </AccordionTrigger>
              <AccordionContent>
                Anda dapat mengecek status aplikasi menggunakan tab "Cek Status"
                di halaman pendaftaran. Cukup masukkan NRP yang Anda gunakan
                saat pendaftaran untuk melihat status pendaftaran anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Bisakah saya mengupdate informasi setelah submit?
              </AccordionTrigger>
              <AccordionContent>
                Update kecil dapat dilakukan dengan menghubungi tim support
                kami. Untuk perubahan besar, Anda mungkin perlu mengirimkan
                aplikasi baru. Hubungi kami di support@entpens.com untuk
                bantuan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                Kapan jadwal pengumpulan berkas?
              </AccordionTrigger>
              <AccordionContent>
                Berkas dapat dikumpulkan ke lab ENT pada pukul 14.00 - 17.30.
                Pastikan Anda datang tepat waktu dan membawa semua dokumen yang
                sudah disiapkan dalam map-L bening.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>
                Apa saja divisi yang tersedia di ENT?
              </AccordionTrigger>
              <AccordionContent>
                ENT memiliki 8 divisi: Reporter, Copywriter, Fotografer,
                Videografer, Desain Grafis, Illustrator, Perencanaan Konten, dan
                Webmaster. Setiap divisi memiliki persyaratan portofolio yang
                berbeda-beda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                Bagaimana proses seleksi dilakukan?
              </AccordionTrigger>
              <AccordionContent>
                Proses seleksi meliputi penilaian berkas, portofolio, dan
                wawancara. Tim ENT akan mengevaluasi kelengkapan dokumen,
                kualitas portofolio sesuai divisi yang dipilih, dan kemampuan
                komunikasi saat wawancara.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>
                Apakah bisa mendaftar lebih dari satu divisi?
              </AccordionTrigger>
              <AccordionContent>
                Anda hanya dapat mendaftar untuk satu divisi dalam satu periode
                pendaftaran. Pilih divisi yang paling sesuai dengan minat dan
                kemampuan Anda untuk meningkatkan peluang diterima.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>
                Bagaimana jika saya tidak memiliki pengalaman di bidang yang
                dipilih?
              </AccordionTrigger>
              <AccordionContent>
                ENT terbuka untuk mahasiswa dari berbagai latar belakang. Yang
                terpenting adalah antusiasme, kemauan belajar, dan kreativitas.
                Portofolio tidak harus profesional, tetapi harus menunjukkan
                potensi dan dedikasi Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger>
                Apakah ada Contact Person terkait pendaftaran yang bisa dihubungi?
              </AccordionTrigger>
              <AccordionContent>
                Silakan hubungi contact person berikut jika ada pertanyaan lebih lanjut: <br></br>
                • Rafif Nuha: +62 821-3409-0397 <br></br>
                • Azzahra: +62 857-8978-1172
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
