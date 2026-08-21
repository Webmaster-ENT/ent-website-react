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
import { AlertCircle, ExternalLink } from "lucide-react";
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
        {/* Banner Ketentuan Portofolio */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-4 space-y-4 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#134679] text-white flex-shrink-0 mt-0.5 shadow-xs">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-foreground">
                Wajib Periksa Ketentuan Portofolio!
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Setiap divisi memiliki persyaratan portofolio yang berbeda. Pastikan karya Anda sudah sesuai panduan sebelum mengumpulkan.
              </p>
            </div>
          </div>

          {/* Divisi & Tombol Cek Panduan */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {selectedDivision && currentRequirement ? (
              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium text-muted-foreground">Divisi ({selectedDivision}):</span>
                <span className="font-semibold text-foreground bg-muted px-2.5 py-1 rounded-md border border-border">
                  {currentRequirement.portfolio}
                </span>
              </div>
            ) : (
              <span className="text-xs text-muted-foreground">
                Pilih divisi pada langkah sebelumnya untuk melihat ringkasan ketentuan.
              </span>
            )}

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full  border-border text-[#134679] hover:bg-[#134679] hover:text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer px-4 py-2"
              onClick={() => window.open("/guidebook?tab=portfolio", "_blank")}
            >
              <span>Lihat Ketentuan Portofolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-2">
          <Label htmlFor="portfolio" className="text-sm font-medium text-foreground">
            Tautan Google Drive Portofolio <span className="text-destructive">*</span>
          </Label>
          <Input
            id="portfolio"
            {...register("portofolio")}
            placeholder="https://drive.google.com/drive/folders/..."
            className="font-mono text-sm"
          />
          {errors.portofolio?.message ? (
            <p className="text-destructive text-xs sm:text-sm font-medium flex items-center gap-1 mt-1">
              {errors.portofolio.message}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground leading-normal">
              Pastikan akses folder Google Drive disetel ke <span className="font-medium text-foreground">"Anyone with the link can view"</span> (Siapa saja yang memiliki link dapat melihat).
            </p>
          )}
        </div>
      </CardContent>
    </>
  );
}
