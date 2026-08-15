import { CheckCircle2, Download, Home, Search } from "lucide-react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import { API_CONFIG, API_ENDPOINTS } from "@/constants/api";
import { toast } from "sonner";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const nrp = searchParams.get("nrp") || "";

  useEffect(() => {
    if (nrp) {
      toast.success("Pendaftaran Berhasil! PDF Resume siap diunduh.");

      // Attempt automatic download after a small delay
      const timer = setTimeout(() => {
        try {
          const downloadUrl = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NEW_MEMBERS.CREATE_RESUME_PDF(nrp)}`;
          window.open(downloadUrl, "_blank");
        } catch (err) {
          console.error("Failed to auto-download PDF:", err);
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [nrp]);

  const handleDownloadManual = () => {
    if (!nrp) {
      toast.error("NRP tidak ditemukan");
      return;
    }
    const downloadUrl = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NEW_MEMBERS.CREATE_RESUME_PDF(nrp)}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 text-center space-y-6 animate-fade-in">
        {/* Animated Check Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Pendaftaran Berhasil!
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Terima kasih telah mendaftar EEPIS News and Network Team (ENT).
          </p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-left space-y-2">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Status:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Terdaftar</span>
          </div>
          {nrp && (
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>NRP Anda:</span>
              <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">{nrp}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          Unduhan dokumen PDF resume Anda akan dimulai secara otomatis. Jika tidak, silakan klik tombol unduh di bawah ini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            onClick={handleDownloadManual}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
            Unduh PDF Resume
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Link to={`/guidebook?tab=check&nrp=${nrp}`} className="w-full">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-2.5 rounded-xl cursor-pointer text-xs"
              >
                <Search className="w-3.5 h-3.5" />
                Cek Status
              </Button>
            </Link>

            <Link to="/" className="w-full">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-2.5 rounded-xl cursor-pointer text-xs"
              >
                <Home className="w-3.5 h-3.5" />
                Ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
