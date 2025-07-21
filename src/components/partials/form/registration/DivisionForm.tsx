import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { divisions, type RegistrationFormSchema } from "@/types/form";
import { Label } from "@radix-ui/react-label";
import { Controller, type UseFormReturn } from "react-hook-form";

interface DivisionFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
}

export default function DivisionForm({ form }: DivisionFormProps) {
  const {
    watch,
    register,
    control,
    formState: { errors },
  } = form;

  const divisi = watch("divisi");
  return (
    <>
      <CardHeader>
        <CardTitle>Personalisasi</CardTitle>
        <CardDescription>
          Isi data di bawah ini dengan jujur tanpa bantuan apapun. Penggunaan AI
          akan mengakibatkan tidak diterima secara langsung
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* field divisi */}
          <div className="space-y-2">
            <Label>Divisi yang ingin didaftar</Label>
            <Controller
              control={control}
              name={"divisi"}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih divisi yang kamu inginkan" />
                  </SelectTrigger>
                  <SelectContent>
                    {divisions.map((division) => (
                      <SelectItem key={division} value={division}>
                        {division}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.divisi?.message && (
              <p className="text-sm text-red-400">{errors.divisi.message}</p>
            )}
          </div>
          {/* field moto hidup */}
          <div className="space-y-2">
            <Label>Moto Hidup</Label>
            <Input {...register("moto")} placeholder="moto kehidupan" />
            {errors.moto?.message && (
              <p className="text-sm text-red-400">{errors.moto.message}</p>
            )}
          </div>
          {/* alasan masuk ent */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alasan Ingin Masuk ENT</Label>
            <Textarea
              {...register("alasanENT")}
              placeholder="Alasan masuk ENT"
            />
            {errors.alasanENT?.message && (
              <p className="text-sm text-red-400">{errors.alasanENT.message}</p>
            )}
          </div>
          {/* alasan masuk divisi tsb */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alasan Ingin Masuk Ke Divisi {divisi ?? ""}</Label>
            <Textarea
              {...register("alasanDivisi")}
              placeholder={`Alasan masuk ke ${divisi ?? ""}`}
            />
            {errors.alasanDivisi?.message && (
              <p className="text-sm text-red-400">
                {errors.alasanDivisi.message}
              </p>
            )}
          </div>
          {/* ketertarikan ke ukm, atau ormawa, atau tim lain */}
          <div className="space-y-2 md:col-span-2">
            <Label>Minat Untuk Join Tim/Organisasi/UKM Lain</Label>
            <Textarea
              {...register("minatUKM")}
              placeholder="ketertarikan terhadap tim atau organisasi, atau UKM lain"
            />
            {errors.minatUKM?.message && (
              <p className="text-sm text-red-400">{errors.minatUKM.message}</p>
            )}
          </div>
          {/* yakinkan kami */}
          <div className="space-y-2 md:col-span-2">
            <Label>Mengapa Kami Harus Menerima Kamu?</Label>
            <Textarea
              {...register("yakinkanKami")}
              placeholder="ketertarikan terhadap tim atau organisasi, atau UKM lain"
            />
            {errors.yakinkanKami?.message && (
              <p className="text-sm text-red-400">
                {errors.yakinkanKami.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
}
