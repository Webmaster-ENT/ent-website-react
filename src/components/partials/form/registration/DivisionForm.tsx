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
import { Label } from "@/components/ui/label";
import { Controller, type UseFormReturn } from "react-hook-form";
import { CharCounter } from "@/components/ui/char-counter";

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
  const watchedMotto = watch("motto");
  const watchedEntReason = watch("ent_reason");
  const watchedDivReason = watch("division_reason");
  const watchedAnotherInterest = watch("another_interest");
  const watchedBelieveUs = watch("believe_us");

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
          <div className="space-y-1">
            <Label>Moto Hidup</Label>
            <Input {...register("motto")} placeholder="moto kehidupan" />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.motto?.message ? (
                <p className="text-red-400 font-medium">{errors.motto.message}</p>
              ) : <span />}
              <CharCounter current={watchedMotto?.length} max={150} />
            </div>
          </div>
          {/* alasan masuk ent */}
          <div className="space-y-1 md:col-span-2">
            <Label>Alasan Ingin Masuk ENT</Label>
            <Textarea
              {...register("ent_reason")}
              placeholder="Alasan masuk ENT"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.ent_reason?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.ent_reason.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedEntReason?.length} max={500} />
            </div>
          </div>
          {/* alasan masuk divisi tsb */}
          <div className="space-y-1 md:col-span-2">
            <Label>Alasan Ingin Masuk Ke Divisi {divisi ?? ""}</Label>
            <Textarea
              {...register("division_reason")}
              placeholder={`Alasan masuk ke ${divisi ?? ""}`}
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.division_reason?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.division_reason.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedDivReason?.length} max={500} />
            </div>
          </div>
          {/* ketertarikan ke ukm, atau ormawa, atau tim lain */}
          <div className="space-y-1 md:col-span-2">
            <Label>Minat Untuk Join Tim/Organisasi/UKM Lain</Label>
            <Textarea
              {...register("another_interest")}
              placeholder="ketertarikan terhadap tim atau organisasi, atau UKM lain"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.another_interest?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.another_interest.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedAnotherInterest?.length} max={255} />
            </div>
          </div>
          {/* yakinkan kami */}
          <div className="space-y-1 md:col-span-2">
            <Label>Mengapa Kami Harus Menerima Kamu?</Label>
            <Textarea
              {...register("believe_us")}
              placeholder="alasan mengapa kami harus menerima kamu"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.believe_us?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.believe_us.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedBelieveUs?.length} max={500} />
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}
