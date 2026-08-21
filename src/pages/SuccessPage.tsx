import { Download, Home, Search } from "lucide-react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import { API_CONFIG, API_ENDPOINTS } from "@/constants/api";
import { toast } from "sonner";
import BouncingSquares from "@/components/animations/BouncingSquare";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const nrp = searchParams.get("nrp") || "";

  useEffect(() => {
    if (nrp) {
      toast.success("Pendaftaran Berhasil! PDF Resume siap diunduh.");
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
    <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center px-4 py-16 overflow-hidden bg-[url('/pattern.svg')] bg-no-repeat bg-cover bg-white">
      {/* Decorative squares — sama seperti hero landing page */}
      <BouncingSquares isFlip={false} isMobile={false} size="lg" className="left-12 top-24 pointer-events-none opacity-80" />
      <BouncingSquares isFlip={true} isMobile={false} size="lg" className="right-12 bottom-20 pointer-events-none opacity-80" />
      <BouncingSquares isFlip={true} isMobile={true} size="sm" className="right-4 top-16 pointer-events-none opacity-75" />
      <BouncingSquares isFlip={false} isMobile={true} size="sm" className="left-4 bottom-16 pointer-events-none opacity-75" />

      <div className="relative z-10 max-w-lg w-full">
        <div className="bg-white border-2 border-[#134679]/15 rounded-2xl p-6 sm:p-10 text-center animate-fade-in">
          {/* Icon — solid navy, ring putih, sedikit rotate biar ga "sempurna" */}
          <div className="relative mx-auto h-20 w-20 mb-6">
            <div className="relative h-20 w-20 rotate-[-4deg] rounded-full bg-[#134679] flex items-center justify-center ring-4 ring-white shadow-[3px_3px_0px_0px_rgba(19,70,121,0.25)]">
              <svg viewBox="0 0 24 24" className="h-9 w-9 rotate-[4deg]" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5 L10 17.5 L19 6.5" />
              </svg>
            </div>
          </div>

          {/* Headline — big & bold, samain hero landing */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#134679] leading-tight mb-3">
            Pendaftaran
            <br />
            Berhasil!
          </h1>
          <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8">
            Terima kasih telah mendaftar di{" "}
            <span className="font-semibold text-gray-800">EEPIS News and Network Team</span>.
          </p>

          {/* Info block — border tegas, bukan bg abu soft */}
          <div className="border-2 border-[#134679]/15 rounded-xl p-4 text-left space-y-2.5 mb-6">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500 font-medium">Status Pendaftaran</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-400 text-[#134679]">
                Terdaftar
              </span>
            </div>
            {nrp && (
              <div className="flex justify-between items-center text-xs pt-2.5 border-t-2 border-[#134679]/10">
                <span className="text-gray-500 font-medium">NRP Anda</span>
                <span className="font-mono font-bold text-[#134679] bg-[#134679]/5 px-2.5 py-1 rounded border border-[#134679]/15">
                  {nrp}
                </span>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Unduhan dokumen PDF resume Anda akan dimulai secara otomatis. Jika tidak berjalan, silakan klik tombol di bawah ini.
          </p>

          {/* CTA — solid navy, bukan gradient */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={handleDownloadManual}
              className="w-full flex items-center justify-center gap-2 rounded-full py-6 text-base font-bold bg-[#134679] text-white hover:bg-[#0f3a63] transition-colors cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Unduh PDF Resume
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Link to={`/guidebook?tab=check&nrp=${nrp}`} className="w-full">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 rounded-full py-5 font-semibold text-xs sm:text-sm border-2 border-[#134679]/20 text-[#134679] hover:bg-[#134679]/5 hover:border-[#134679] transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Cek Status
                </Button>
              </Link>

              <Link to="/" className="w-full">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 rounded-full py-5 font-semibold text-xs sm:text-sm border-2 border-[#134679]/20 text-[#134679] hover:bg-[#134679]/5 hover:border-[#134679] transition-colors cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                  Ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}