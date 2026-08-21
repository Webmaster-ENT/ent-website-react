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
        <div className="relative overflow-hidden rounded-2xl border border-[#134679]/25 dark:border-blue-500/30 bg-gradient-to-br from-[#134679]/5 via-blue-50/50 to-teal-500/10 dark:from-[#134679]/20 dark:via-background dark:to-teal-950/20 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#134679] to-[#226DB8] text-white shadow-sm flex-shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <span>Wajib Periksa Ketentuan Portofolio!</span>
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Setiap divisi memiliki persyaratan portofolio yang berbeda. Pastikan karya Anda sudah sesuai panduan sebelum mengumpulkan.
                </p>
                {selectedDivision && currentRequirement && (
                  <div className="mt-2.5 inline-block bg-background/80 dark:bg-card/80 backdrop-blur-sm border border-[#134679]/20 dark:border-blue-500/30 rounded-xl px-3.5 py-2 text-xs shadow-xs">
                    <span className="font-semibold text-[#134679] dark:text-blue-400">Divisi Pilihan ({selectedDivision}):</span>{" "}
                    <span className="font-medium text-foreground">{currentRequirement.portfolio}</span>
                  </div>
                )}
              </div>
            </div>

            <Button
              type="button"
              variant="default"
              size="sm"
              className="rounded-full bg-gradient-to-r from-[#134679] to-[#226DB8] hover:opacity-90 text-white font-medium shadow-sm transition-all flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto cursor-pointer py-2 px-4"
              onClick={() => window.open("/guidebook?tab=portfolio", "_blank")}
            >
              <span>Lihat Ketentuan</span>
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
