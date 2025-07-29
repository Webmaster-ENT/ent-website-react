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

  const divisi = watch("division");
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
              name={"division"}
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
            {errors.division?.message && (
              <p className="text-sm text-red-400">{errors.division.message}</p>
            )}
          </div>
          {/* field moto hidup */}
          <div className="space-y-2">
            <Label>Moto Hidup</Label>
            <Input {...register("motto")} placeholder="moto kehidupan" />
            {errors.motto?.message && (
              <p className="text-sm text-red-400">{errors.motto.message}</p>
            )}
          </div>
          {/* alasan masuk ent */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alasan Ingin Masuk ENT</Label>
            <Textarea
              {...register("ent_reason")}
              placeholder="Alasan masuk ENT"
            />
            {errors.ent_reason?.message && (
              <p className="text-sm text-red-400">
                {errors.ent_reason.message}
              </p>
            )}
          </div>
          {/* alasan masuk divisi tsb */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alasan Ingin Masuk Ke Divisi {divisi ?? ""}</Label>
            <Textarea
              {...register("division_reason")}
              placeholder={`Alasan masuk ke ${divisi ?? ""}`}
            />
            {errors.division_reason?.message && (
              <p className="text-sm text-red-400">
                {errors.division_reason.message}
              </p>
            )}
          </div>
          {/* ketertarikan ke ukm, atau ormawa, atau tim lain */}
          <div className="space-y-2 md:col-span-2">
            <Label>Minat Untuk Join Tim/Organisasi/UKM Lain</Label>
            <Textarea
              {...register("another_interest")}
              placeholder="ketertarikan terhadap tim atau organisasi, atau UKM lain"
            />
            {errors.another_interest?.message && (
              <p className="text-sm text-red-400">
                {errors.another_interest.message}
              </p>
            )}
          </div>
          {/* yakinkan kami */}
          <div className="space-y-2 md:col-span-2">
            <Label>Mengapa Kami Harus Menerima Kamu?</Label>
            <Textarea
              {...register("believe_us")}
              placeholder="ketertarikan terhadap tim atau organisasi, atau UKM lain"
            />
            {errors.believe_us?.message && (
              <p className="text-sm text-red-400">
                {errors.believe_us.message}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
}
