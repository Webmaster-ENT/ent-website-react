import FAQ from "@/components/partials/portfolio/faq";
import TabsGuidebook from "@/components/partials/portfolio/tabs-guidebook";
import TabsPortfolio from "@/components/partials/portfolio/tabs-portfolio";
import TabsRegistration from "@/components/partials/portfolio/tabs-registration";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Palette, Search } from "lucide-react";
import { useSearchParams } from "react-router";
import { REGISTRATION_CONFIG } from "@/constants/config";
import RegistrationClosed from "@/components/partials/RegistrationClosed";

export default function GuidebookPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "guidebook";

  if (!REGISTRATION_CONFIG.isOpen) {
    return <RegistrationClosed />;
  }

  const handleTabChange = (value: string) => {
    const newParams: Record<string, string> = { tab: value };
    const nrp = searchParams.get("nrp");
    if (nrp) {
      newParams.nrp = nrp;
    }
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Portal Pendaftaran ENT
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Lengkapi proses pendaftaran Anda dengan panduan langkah demi langkah.
          Dapatkan semua informasi yang Anda butuhkan sebelum memulai.
        </p>
      </div>

      {/* tabs container */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="guidebook" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Panduan</span>
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Portofolio</span>
          </TabsTrigger>
          <TabsTrigger value="check" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Pendaftaran</span>
          </TabsTrigger>
        </TabsList>

        {/* tabs content */}
        <TabsGuidebook />
        <TabsRegistration />
        <TabsPortfolio />
      </Tabs>

      <FAQ />
    </div>
  );
}
