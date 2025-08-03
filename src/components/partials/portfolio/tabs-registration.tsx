import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Search, Users } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState, type FormEvent } from "react";
import useCheckNRP, { type RegistrationStatus } from "@/hooks/useCheckNRP";
import { API_CONFIG, API_ENDPOINTS } from "@/constants/api";
import { toast } from "sonner";

export default function TabsRegistration() {
  const [nrp, setNrp] = useState("");
  const [status, setStatus] = useState<RegistrationStatus>("idle");
  const { isLoading, checkNRP } = useCheckNRP();

  const handleRegistrationCheck = async (e: FormEvent) => {
    e.preventDefault();
    const result = await checkNRP(nrp);
    switch (result) {
      case "checking":
        break;
      case "registered":
        setStatus("registered");
        break;
      case "not-registered":
        setStatus("not-registered");
        break;
      case "error":
        setStatus("error");
        break;
      default:
        setStatus("idle");
        break;
    }
  };

  const downloadPDF = async () => {
    try {
      window.open(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NEW_MEMBERS.CREATE_RESUME_PDF(nrp)}`,
        "_blank"
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
        toast.error(err.message);
      }
    }
  };

  return (
    <TabsContent value="check" className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Registration Check Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              Cek Status Pendaftaran
            </CardTitle>
            <CardDescription>
              Masukkan NRP Anda untuk mengecek status pendaftaran
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegistrationCheck} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">NRP</Label>
                <Input
                  id="nrp"
                  name="nrp"
                  inputMode="numeric"
                  placeholder="Masukkan NRP Anda"
                  value={nrp}
                  onChange={(e) => setNrp(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Mengecek..." : "Cek Pendaftaran"}
              </Button>
            </form>

            {/* Registration Status Results */}
            {status === "registered" && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Pendaftaran Ditemukan!</span>
                </div>
                <p className="text-green-700 mt-2">
                  NRP sudah terdaftar. Anda bisa mengunduh PDF dengan mengklik
                  tombol di bawah ini.
                </p>
                <Button
                  variant={"outline"}
                  onClick={downloadPDF}
                  className="bg-green-100 border border-green-600 hover:bg-green-50 text-green-800 hover:text-green-700 cursor-pointer"
                >
                  Unduh PDF
                </Button>
              </div>
            )}

            {status === "not-registered" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">
                    Pendaftaran Tidak Ditemukan
                  </span>
                </div>
                <p className="text-red-700 mt-2">
                  NRP belum terdaftar. Anda dapat melanjutkan proses
                  pendaftaran.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">
                    Terjadi Kesalahan Jaringan
                  </span>
                </div>
                <p className="text-red-700 mt-2">
                  Mohon maaf atas ketidaknyamanan Anda. Silahkan coba beberapa
                  saat lagi.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card>
          <CardHeader>
            <CardTitle>Siap untuk Mendaftar?</CardTitle>
            <CardDescription>
              Mulai proses pendaftaran Anda sekarang dengan formulir langkah
              demi langkah
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Aman dan terenkripsi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Progress otomatis tersimpan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Dukungan 24/7 tersedia</span>
              </div>
            </div>

            <Link to="/registration" className="block">
              <Button className="w-full" size="lg">
                Mulai Pendaftaran
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            <p className="text-xs text-gray-500 text-center">
              Dengan melanjutkan, Anda menyetujui Syarat Layanan dan Kebijakan
              Privasi kami
            </p>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
