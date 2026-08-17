import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { RegistrationFormSchema } from "@/types/form";
import type { UseFormReturn } from "react-hook-form";
import { AlertCircle, ExternalLink, Sparkles } from "lucide-react";
import { portfolioRequirements } from "@/data/portfolio";

interface PortfolioFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
}

export default function PortfolioForm({ form }: PortfolioFormProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const selectedDivision = watch("division");
  const currentRequirement = portfolioRequirements.find(
    (item) => item.division === selectedDivision
  );

  return (
    <>
      <CardHeader>
        <CardTitle>Portofolio</CardTitle>
        <CardDescription>
          Unggah seluruh berkas portofolio Anda ke Google Drive dan cantumkan link-nya di bawah.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Eye-catching Highlight Alert */}
        <div className="relative overflow-hidden rounded-xl border-2 border-amber-400/80 bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/60 p-5 shadow-md">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500 text-white shadow-sm flex-shrink-0 mt-0.5 animate-pulse">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-amber-950 flex items-center gap-1.5">
                  <span>Wajib Periksa Ketentuan Portofolio!</span>
                  <Sparkles className="w-4 h-4 text-amber-600 inline" />
                </h4>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Setiap divisi memiliki persyaratan portofolio yang berbeda. Pastikan karya Anda sudah sesuai panduan sebelum mengumpulkan.
                </p>
                {selectedDivision && currentRequirement && (
                  <div className="mt-2.5 inline-block bg-white/90 border border-amber-200 rounded-md px-3 py-1.5 text-xs text-amber-950 shadow-sm">
                    <span className="font-semibold text-amber-800">Divisi Pilihan ({selectedDivision}):</span>{" "}
                    <span className="font-medium">{currentRequirement.portfolio}</span>
                  </div>
                )}
              </div>
            </div>

            <Button
              type="button"
              variant="default"
              size="sm"
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-sm transition-all flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto cursor-pointer"
              onClick={() => window.open("/guidebook?tab=portfolio", "_blank")}
            >
              <span>Lihat Ketentuan Portofolio</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-2">
          <Label htmlFor="portfolio" className="text-sm font-semibold text-gray-800">
            Tautan Google Drive Portofolio <span className="text-red-500">*</span>
          </Label>
          <Input
            id="portfolio"
            {...register("portofolio")}
            placeholder="https://drive.google.com/drive/folders/..."
            className="focus-visible:ring-amber-500 font-mono text-sm"
          />
          {errors.portofolio?.message ? (
            <p className="text-red-500 text-xs sm:text-sm font-medium flex items-center gap-1 mt-1">
              {errors.portofolio.message}
            </p>
          ) : (
            <p className="text-xs text-gray-500 leading-normal">
              Pastikan akses folder Google Drive disetel ke <span className="font-medium text-gray-700">"Anyone with the link can view"</span> (Siapa saja yang memiliki link dapat melihat).
            </p>
          )}
        </div>
      </CardContent>
    </>
  );
}
