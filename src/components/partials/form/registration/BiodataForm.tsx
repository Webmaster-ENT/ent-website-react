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
import { useEffect, useState } from "react";
import API from "@/lib/api";
import { CharCounter } from "@/components/ui/char-counter";
import { formatPhoneNumber } from "@/lib/formatPhone";

interface BiodataFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
}

type Major = {
  grade: string;
  id: string;
  name: string;
};

export default function BiodataForm({ form }: BiodataFormProps) {
  const [grade, setGrade] = useState<"D3" | "D4">("D3");
  const [major, setMajor] = useState<Major[]>([]);
  useEffect(() => {
    const fetchingDivision = async () => {
      await API.get<{ data: Major[] }>(`/major?grade=${grade}`).then(
        (result) => {
          console.log(result.data.data);
          setMajor(result.data.data);
        }
      );
    };

    fetchingDivision();
  }, [grade]);
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = form;

  const watchedName = watch("name");
  const watchedNrp = watch("nrp");
  const watchedBornCity = watch("born_city");
  const watchedBoardingAddr = watch("boarding_address");
  const watchedHomeAddr = watch("home_address");

  return (
    <>
      <CardHeader>
        <CardTitle>Biodata Diri</CardTitle>
        <CardDescription>Isi biodata diri Anda dengan benar</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* field nama */}
          <div className="space-y-1">
            <Label htmlFor="nama">Nama</Label>
            <Input id="nama" {...register("name")} placeholder="Jajang Sukijang" />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.name?.message ? (
                <p className="text-red-400 font-medium">{errors.name.message}</p>
              ) : <span />}
              <CharCounter current={watchedName?.length} max={60} />
            </div>
          </div>
          {/* field nrp */}
          <div className="space-y-1">
            <Label htmlFor="nrp">NRP</Label>
            <Input id="nrp" {...register("nrp")} placeholder="2225600128" />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.nrp?.message ? (
                <p className="text-red-400 font-medium">{errors.nrp.message}</p>
              ) : <span />}
              <CharCounter current={watchedNrp?.length} max={10} />
            </div>
          </div>
          {/* field jenjang */}
          <div className="space-y-1">
            <Label>Jenjang</Label>
            <Select
              onValueChange={(value: "D3" | "D4") => setGrade(value)}
              defaultValue={grade}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Jenjang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="D3">D3</SelectItem>
                <SelectItem value="D4">D4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* field prodi */}
          <div className="space-y-1">
            <Label>Program Studi</Label>
            <Controller
              control={control}
              name={"major_id"}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  disabled={!grade}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Prodi" />
                  </SelectTrigger>
                  <SelectContent>
                    {major.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.major_id?.message && (
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.major_id.message}</p>
            )}
          </div>
          {/* tempat lahir */}
          <div className="space-y-1">
            <Label htmlFor="tempatLahir">Tempat Lahir</Label>
            <Input
              id="tempatLahir"
              {...register("born_city")}
              placeholder="Surabaya"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.born_city?.message ? (
                <p className="text-red-400 font-medium">{errors.born_city.message}</p>
              ) : <span />}
              <CharCounter current={watchedBornCity?.length} max={50} />
            </div>
          </div>
          {/* tanggal lahir */}
          <div className="space-y-1">
            <Label>Tanggal Lahir</Label>
            <Controller
              control={control}
              name={"born_date"}
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
                        date >= new Date() || date < new Date("1980-01-01")
                      }
                      selected={field.value}
                      onSelect={field.onChange}
                      defaultMonth={field.value ?? new Date("2005-01-01")}
                      captionLayout="dropdown-years"
                      startMonth={new Date("1980-01-01")}
                      endMonth={new Date()}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.born_date?.message && (
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.born_date.message}</p>
            )}
          </div>
          {/* agama */}
          <div className="space-y-1 md:col-span-2">
            <Label>Agama</Label>
            <Controller
              control={control}
              name={"religion"}
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
            {errors.religion?.message && (
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.religion.message}</p>
            )}
          </div>
          {/* alamat sekarang */}
          <div className="space-y-1 md:col-span-2">
            <Label>Alamat Sekarang</Label>
            <Textarea
              {...register("boarding_address")}
              placeholder="Alamat kos atau saat ini"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.boarding_address?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.boarding_address.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedBoardingAddr?.length} max={255} />
            </div>
          </div>
          {/* alamat rumah */}
          <div className="space-y-1 md:col-span-2">
            <Label>Alamat Rumah</Label>
            <Textarea
              {...register("home_address")}
              placeholder="Alamat rumah"
            />
            <div className="flex items-center justify-between text-xs mt-1">
              {errors.home_address?.message ? (
                <p className="text-red-400 font-medium">
                  {errors.home_address.message}
                </p>
              ) : <span />}
              <CharCounter current={watchedHomeAddr?.length} max={255} />
            </div>
          </div>
          {/* email */}
          <div className="space-y-1">
            <Label>Student Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="username@prodi.student.pens.ac.id"
            />
            {errors.email?.message && (
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>
          {/* telephone */}
          <div className="space-y-1">
            <Label htmlFor="phone">Nomor WhatsApp / HP</Label>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  id="phone"
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    field.onChange(formatted);
                  }}
                  onBlur={field.onBlur}
                  placeholder="+628123456789 (atau ketik 08...)"
                />
              )}
            />
            {errors.phone?.message ? (
              <p className="text-red-400 text-xs mt-1 font-medium">{errors.phone.message}</p>
            ) : (
              <p className="text-muted-foreground text-[11px]">
                Ketik 08... atau +62..., sistem akan otomatis menyesuaikan format.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
}
