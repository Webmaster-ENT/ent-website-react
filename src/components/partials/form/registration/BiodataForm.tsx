import type { RegistrationFormSchema } from "@/types/form";
import { Controller, type UseFormReturn } from "react-hook-form";
// component imports
import {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { id } from "date-fns/locale";

interface BiodataFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
}

export default function BiodataForm({ form }: BiodataFormProps) {
  const {
    watch,
    register,
    formState: { errors },
    control,
  } = form;
  const jenjang = watch("jenjang");
  return (
    <>
      <CardHeader>
        <CardTitle>Biodata Diri</CardTitle>
        <CardDescription>Isi biodata diri Anda dengan benar</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* field nama */}
          <div className="space-y-2">
            <Label htmlFor="nama">Nama</Label>
            <Input id="nama" {...register("nama")} placeholder="john doe" />
            {errors.nama?.message && (
              <p className="text-red-400 text-sm">{errors.nama.message}</p>
            )}
          </div>
          {/* field nrp */}
          <div className="space-y-2">
            <Label htmlFor="nrp">NRP</Label>
            <Input id="nrp" {...register("nrp")} placeholder="521234567890" />
            {errors.nrp?.message && (
              <p className="text-red-400 text-sm">{errors.nrp.message}</p>
            )}
          </div>
          {/* field jenjang */}
          <div className="space-y-2">
            <Label>Jenjang</Label>
            <Controller
              control={control}
              name={"jenjang"}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Jenjang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="D3">D3</SelectItem>
                    <SelectItem value="D4">D4</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.jenjang?.message && (
              <p className="text-red-400 text-sm">{errors.jenjang.message}</p>
            )}
          </div>
          {/* field prodi */}
          <div className="space-y-2">
            <Label>Program Studi</Label>
            <Controller
              control={control}
              name={"jurusan"}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  disabled={!jenjang}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Prodi" />
                  </SelectTrigger>
                  <SelectContent>
                    {jenjang === "D4" && (
                      <SelectItem value="Teknologi Game">
                        Teknologi Game
                      </SelectItem>
                    )}
                    {jenjang === "D3" && (
                      <SelectItem value="Multimedia Broadcasting">
                        MMB
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.jurusan?.message && (
              <p className="text-red-400 text-sm">{errors.jurusan.message}</p>
            )}
          </div>
          {/* tempat lahir */}
          <div className="space-y-2">
            <Label htmlFor="tempatLahir">Tempat Lahir</Label>
            <Input
              id="tempatLahir"
              {...register("tempatLahir")}
              placeholder="Surabaya"
            />
            {errors.tempatLahir?.message && (
              <p className="text-red-400 text-sm">
                {errors.tempatLahir.message}
              </p>
            )}
          </div>
          {/* tanggal lahir */}
          <div className="space-y-2">
            <Label>Tanggal Lahir</Label>
            <Controller
              control={control}
              name={"tanggalLahir"}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd MMMM yyy", { locale: id })
                      ) : (
                        <span>Pilih Tanggal Lahir Anda</span>
                      )}
                      <CalendarIcon className="ml-auto size-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Calendar
                      mode="single"
                      disabled={(date) =>
                        date < new Date("2000-01-01") ||
                        date > new Date("2013-12-31")
                      }
                      selected={field.value}
                      onSelect={field.onChange}
                      defaultMonth={field.value ?? new Date("2000-01-01")}
                      captionLayout="dropdown-years"
                      startMonth={new Date("2000-01-01")}
                      endMonth={new Date("2013-12-31")}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.tanggalLahir?.message && (
              <p className="text-red-400 text-sm">
                {errors.tanggalLahir.message}
              </p>
            )}
          </div>
          {/* agama */}
          <div className="space-y-2 md:col-span-2">
            <Label>Agama</Label>
            <Controller
              control={control}
              name={"agama"}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Agama" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Islam">Islam</SelectItem>
                    <SelectItem value="Kristen">Kristen</SelectItem>
                    <SelectItem value="Katolik">Katolik</SelectItem>
                    <SelectItem value="Hindu">Hindu</SelectItem>
                    <SelectItem value="Buddha">Buddha</SelectItem>
                    <SelectItem value="Konghucu">Konghucu</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.agama?.message && (
              <p className="text-red-400 text-sm">{errors.agama.message}</p>
            )}
          </div>
          {/* alamat sekarang */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alamat Sekarang</Label>
            <Textarea
              {...register("alamatSekarang")}
              placeholder="Alamat kos atau saat ini"
            />
            {errors.alamatSekarang?.message && (
              <p className="text-red-400 text-sm">
                {errors.alamatSekarang.message}
              </p>
            )}
          </div>
          {/* alamat rumah */}
          <div className="space-y-2 md:col-span-2">
            <Label>Alamat Rumah</Label>
            <Textarea {...register("alamatRumah")} placeholder="Alamat rumah" />
            {errors.alamatRumah?.message && (
              <p className="text-red-400 text-sm">
                {errors.alamatRumah.message}
              </p>
            )}
          </div>
          {/* email */}
          <div className="space-y-2">
            <Label>Student Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="username@prodi.student.pens.ac.id"
            />
            {errors.email?.message && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
          {/* telephone */}
          <div className="space-y-2">
            <Label>Nomor Telephone</Label>
            <Input {...register("noHp")} placeholder="+628123456789" />
            {errors.noHp?.message && (
              <p className="text-red-400 text-sm">{errors.noHp.message}</p>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
}
