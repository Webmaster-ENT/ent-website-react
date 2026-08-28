import type { RegistrationFormSchema } from "@/types/form";
import type { UseFormReturn } from "react-hook-form";
import {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  BookOpen,
  Briefcase,
  Trophy,
  FolderGit2,
  Edit3,
  ExternalLink,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Building,
  Heart,
  HelpCircle,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface SummaryFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
  onJumpToStep: (stepNumber: number) => void;
}

export default function SummaryForm({ form, onJumpToStep }: SummaryFormProps) {
  const values = form.getValues();

  const formatDate = (date: Date | string | null | undefined) => {
    if (!date) return "-";
    try {
      const d = typeof date === "string" ? new Date(date) : date;
      return format(d, "dd MMMM yyyy", { locale: id });
    } catch {
      return "-";
    }
  };

  return (
    <>
      <CardHeader className="border-b border-border/40 pb-5">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              Ringkasan Pendaftaran
            </CardTitle>
            <CardDescription className="mt-1">
              Periksa kembali seluruh data Anda sebelum mengirimkan formulir. Anda dapat mengklik tombol "Ubah" jika ada data yang perlu diperbaiki.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Notice Alert */}
        <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-800 dark:text-amber-300">
          <AlertCircle className="size-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <p className="font-semibold">Perhatian</p>
            <p className="text-xs text-amber-700 dark:text-amber-300/90 mt-0.5 leading-relaxed">
              Setelah dikirim, data pendaftaran tidak dapat diubah kembali. Pastikan nomor WhatsApp aktif dan link Google Drive portofolio dapat diakses oleh publik (Viewer).
            </p>
          </div>
        </div>

        {/* Section 1: Data Diri */}
        <div className="rounded-xl border bg-card/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-semibold text-base flex items-center gap-2 text-primary">
              <User className="size-4" /> 1. Data Diri
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onJumpToStep(1)}
              className="text-xs gap-1.5 h-8 text-primary hover:text-primary"
            >
              <Edit3 className="size-3.5" /> Ubah
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs text-muted-foreground block">Nama Lengkap</span>
              <p className="font-medium">{values.name || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">NRP</span>
              <p className="font-mono font-medium">{values.nrp || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Tempat & Tanggal Lahir</span>
              <p className="font-medium flex items-center gap-1.5">
                <Calendar className="size-3.5 text-muted-foreground" />
                {values.born_city ? `${values.born_city}, ` : ""}{formatDate(values.born_date)}
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Agama</span>
              <p className="font-medium">{values.religion || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Student Email</span>
              <p className="font-medium flex items-center gap-1.5">
                <Mail className="size-3.5 text-muted-foreground" />
                {values.email || "-"}
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Nomor WhatsApp</span>
              <p className="font-medium font-mono flex items-center gap-1.5">
                <Phone className="size-3.5 text-muted-foreground" />
                {values.phone || "-"}
              </p>
            </div>
            <div className="md:col-span-2">
              <span className="text-xs text-muted-foreground block">Alamat Saat Ini (Kos/Domisili)</span>
              <p className="font-medium flex items-start gap-1.5 mt-0.5">
                <MapPin className="size-3.5 text-muted-foreground shrink-0 mt-1" />
                {values.boarding_address || "-"}
              </p>
            </div>
            <div className="md:col-span-2">
              <span className="text-xs text-muted-foreground block">Alamat Rumah (Asal)</span>
              <p className="font-medium flex items-start gap-1.5 mt-0.5">
                <Building className="size-3.5 text-muted-foreground shrink-0 mt-1" />
                {values.home_address || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Deskripsi Diri & Divisi */}
        <div className="rounded-xl border bg-card/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-semibold text-base flex items-center gap-2 text-primary">
              <BookOpen className="size-4" /> 2. Pilihan Divisi & Esai
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onJumpToStep(2)}
              className="text-xs gap-1.5 h-8 text-primary hover:text-primary"
            >
              <Edit3 className="size-3.5" /> Ubah
            </Button>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs text-muted-foreground block">Divisi yang Dipilih</span>
              <Badge className="mt-1 text-sm py-1 px-3 bg-primary text-primary-foreground font-semibold">
                {values.division || "-"}
              </Badge>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Moto Hidup</span>
              <p className="font-medium italic text-muted-foreground mt-0.5">"{values.motto || "-"}"</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block flex items-center gap-1">
                <Heart className="size-3" /> Alasan Ingin Masuk ENT
              </span>
              <p className="font-medium mt-0.5 whitespace-pre-wrap">{values.ent_reason || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block flex items-center gap-1">
                <HelpCircle className="size-3" /> Alasan Memilih Divisi Tersebut
              </span>
              <p className="font-medium mt-0.5 whitespace-pre-wrap">{values.division_reason || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Minat/Hobi Lainnya</span>
              <p className="font-medium mt-0.5">{values.another_interest || "-"}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Keyakinan / Komitmen</span>
              <p className="font-medium mt-0.5 whitespace-pre-wrap">{values.believe_us || "-"}</p>
            </div>
          </div>
        </div>

        {/* Section 3: Pengalaman */}
        <div className="rounded-xl border bg-card/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-semibold text-base flex items-center gap-2 text-primary">
              <Briefcase className="size-4" /> 3. Pengalaman Organisasi / Kepanitiaan ({values.nm_experiences?.length || 0})
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onJumpToStep(3)}
              className="text-xs gap-1.5 h-8 text-primary hover:text-primary"
            >
              <Edit3 className="size-3.5" /> Ubah
            </Button>
          </div>

          {values.nm_experiences && values.nm_experiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.nm_experiences.map((exp, idx) => (
                <div key={idx} className="rounded-lg border bg-background/80 p-3 text-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{exp.activity}</p>
                    <Badge variant="outline" className="text-[10px]">Exp #{idx + 1}</Badge>
                  </div>
                  <p className="text-xs text-primary font-medium">{exp.position}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">Tidak ada pengalaman yang dicantumkan.</p>
          )}
        </div>

        {/* Section 4: Penghargaan */}
        <div className="rounded-xl border bg-card/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-semibold text-base flex items-center gap-2 text-primary">
              <Trophy className="size-4" /> 4. Penghargaan / Prestasi ({values.nm_achievements?.length || 0})
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onJumpToStep(4)}
              className="text-xs gap-1.5 h-8 text-primary hover:text-primary"
            >
              <Edit3 className="size-3.5" /> Ubah
            </Button>
          </div>

          {values.nm_achievements && values.nm_achievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.nm_achievements.map((acv, idx) => (
                <div key={idx} className="rounded-lg border bg-background/80 p-3 text-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{acv.event}</p>
                    <Badge variant="outline" className="text-[10px]">Prestasi #{idx + 1}</Badge>
                  </div>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">{acv.grade}</p>
                  <p className="text-[11px] text-muted-foreground">
                    Periode: {formatDate(acv.period)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic">Tidak ada prestasi yang dicantumkan.</p>
          )}
        </div>

        {/* Section 5: Portofolio */}
        <div className="rounded-xl border bg-card/50 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="font-semibold text-base flex items-center gap-2 text-primary">
              <FolderGit2 className="size-4" /> 5. Portofolio Google Drive
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onJumpToStep(5)}
              className="text-xs gap-1.5 h-8 text-primary hover:text-primary"
            >
              <Edit3 className="size-3.5" /> Ubah
            </Button>
          </div>

          <div>
            <span className="text-xs text-muted-foreground block mb-1">Tautan Portofolio:</span>
            {values.portofolio ? (
              <a
                href={values.portofolio}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline break-all bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-md border border-blue-200 dark:border-blue-900"
              >
                {values.portofolio}
                <ExternalLink className="size-3.5 shrink-0 ml-1" />
              </a>
            ) : (
              <p className="text-sm text-red-500 font-medium">Belum diisi</p>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
}
