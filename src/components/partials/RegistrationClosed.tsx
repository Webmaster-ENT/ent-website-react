import { Button } from "@/components/ui/button";
import { REGISTRATION_CONFIG } from "@/constants/config";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router";

export default function RegistrationClosed() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-center space-y-5">
        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {REGISTRATION_CONFIG.title}
          </h2>
          <p className="text-gray-600 text-base">
            {REGISTRATION_CONFIG.message}
          </p>
        </div>
        <Button asChild className="w-full bg-[#134679] hover:bg-[#134179]">
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </div>
  );
}
