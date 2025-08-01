import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { CheckCircle, FileText } from "lucide-react";

export default function TabsGuidebook() {
  return (
    <TabsContent value="guidebook" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Panduan Pemberkasan
          </CardTitle>
          <CardDescription>
            Ketentuan dan persyaratan dokumen yang harus disiapkan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Document Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Ketentuan Pemberkasan
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h4 className="font-medium text-blue-900 mb-3">
                📁 Map-L Bening
              </h4>
              <p className="text-blue-800 text-sm">
                Semua dokumen harus dimasukkan ke dalam map-L bening dan
                disatukan menggunakan paperclip
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">
                Dokumen Pendaftaran:
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Foto Formal</p>
                    <p className="text-sm text-gray-600">
                      Pas 3x4 background biru 1 lembar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Berkas Pendaftaran</p>
                    <p className="text-sm text-gray-600">
                      Diprint di kertas A4 dengan foto yang sudah ditempel
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Curriculum Vitae</p>
                    <p className="text-sm text-gray-600">
                      Berwarna yang di print di kertas A4
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sertifikat Penghargaan</p>
                    <p className="text-sm text-gray-600">
                      Fotocopy sertifikat penghargaan / juara lomba (jika ada)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">KTM</p>
                    <p className="text-sm text-gray-600">
                      Fotocopy KTM tanpa terpotong bolak-balik atau foto KTM
                      sementara dari MIS atau screenshot dari Online MIS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Process */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proses Pengumpulan</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-yellow-900">
                    Pengiriman Dokumen
                  </h4>
                  <p className="text-sm text-yellow-800 mt-1">
                    Kirim dokumen ke lab ENT pada pukul 14.00 - 17.30
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-green-900">
                    Konfirmasi Penerimaan
                  </h4>
                  <p className="text-sm text-green-800 mt-1">
                    Berkas yang sudah diterima di lab dikonfirmasi dengan
                    menulis nama dan tanda tangan peserta pada lembar yang sudah
                    disediakan
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Penyimpanan</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    Berkas disimpan di laci meja depan. Semua anggota ENT yang
                    ada di dalam lab wajib menerima berkas tersebut
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-900 mb-3">
              ⚠️ Penting!
            </h3>
            <ul className="space-y-2 text-red-800 text-sm">
              <li>
                • Pastikan semua dokumen sudah lengkap sebelum pengumpulan
              </li>
              <li>
                • Datang tepat waktu sesuai jadwal yang ditentukan (14.00 -
                17.30)
              </li>
              <li>
                • Siapkan nama dan tanda tangan untuk konfirmasi penerimaan
              </li>
              <li>
                • Gunakan map-L bening dan paperclip untuk menyatukan dokumen
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
