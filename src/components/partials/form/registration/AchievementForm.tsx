import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RegistrationFormSchema } from "@/types/form";
import { Plus, Trash2, MedalIcon, CalendarIcon } from "lucide-react";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";

interface AchievementFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
  fieldArray: UseFieldArrayReturn<RegistrationFormSchema, "nm_achievements">;
}

export default function AchievementForm({
  form,
  fieldArray,
}: AchievementFormProps) {
  const {
    register,
    formState: { errors },
  } = form;
  const { append, remove, fields } = fieldArray;

  const addAchievement = () => {
    append({
      event: "",
      grade: "",
      period: new Date(),
    });
  };

  const removeAchievement = (id: number) => {
    remove(id);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Penghargaan</CardTitle>
        <CardDescription>
          Isikan penghargaan terbaik (maks. 3) yang sudah kamu dapat sebelum
          mendaftar ENT. Kamu bisa melewatinya jika belum ada
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-end items-center">
            <Button
              type="button"
              variant={"outline"}
              size={"sm"}
              onClick={addAchievement}
              disabled={fields.length >= 3}
              className="flex items-center gap-2"
            >
              <Plus className="size-4" />
              Tambah Penghargaan
            </Button>
          </div>
          {/* kalo acv = 0 */}
          {fields.length === 0 && (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50/50">
              <div className="flex flex-col items-center space-y-4">
                <div className="size-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <MedalIcon className="text-yellow-500 size-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-900">
                    Belum Ada Penghargaan Yang Ditambahkan
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Bagikan penghargaan terbaik kamu dengan menambahkan
                    penghargaan Anda. Ini membantu kami mengetahui pencapaian
                    dan prestasi Anda.
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* field buat ngisi klo dia add achievements */}
          {fields.length > 0 &&
            fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      Achievement {index + 1}
                    </CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAchievement(index)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* field title and position */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`nm_achievements.${index}.event`}>
                        Penghargaan *
                      </Label>
                      <Input
                        {...register(`nm_achievements.${index}.event`)}
                        placeholder="e.g,. 4C National Competition"
                      />
                      {errors.nm_achievements?.[index]?.event && (
                        <p className="text-sm text-red-600">
                          {errors.nm_achievements[index]?.event?.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`nm_achievements.${index}.grade`}>
                        Grade *
                      </Label>
                      <Controller
                        control={form.control}
                        name={`nm_achievements.${index}.grade`}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Juara 1">Juara 1</SelectItem>
                              <SelectItem value="Juara 2">Juara 2</SelectItem>
                              <SelectItem value="Juara 3">Juara 3</SelectItem>
                              <SelectItem value="Juara Harapan">Juara Harapan</SelectItem>
                              <SelectItem value="Finalis">Finalis</SelectItem>
                              <SelectItem value="Semi-Finalis">Semi-Finalis</SelectItem>
                              <SelectItem value="Peserta">Peserta</SelectItem>
                              <SelectItem value="Lain-lain">Lain-lain</SelectItem>
                            </SelectContent>
                          </Select>
                        )}  
                      />
                      {errors.nm_achievements?.[index]?.grade && (
                        <p className="text-sm text-red-600">
                          {errors.nm_achievements[index]?.grade?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* start month field */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* month field */}
                    <div className="space-y-2">
                      <Label>Periode *</Label>
                      <Controller
                        control={form.control}
                        name={`nm_achievements.${index}.period`}
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
                                  format(field.value, "dd MMMM yyy", {
                                    locale: id,
                                  })
                                ) : (
                                  <span>Periode</span>
                                )}
                                <CalendarIcon className="ml-auto size-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-full p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                disabled={(date) =>
                                  date < new Date("2017-01-01") ||
                                  date > new Date()
                                }
                                selected={field.value}
                                onSelect={field.onChange}
                                defaultMonth={field.value ?? new Date()}
                                captionLayout="dropdown-years"
                                startMonth={new Date("2017-01-01")}
                                endMonth={new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        )}
                      />
                      {errors.nm_achievements?.[index]?.period && (
                        <p className="text-sm text-red-600">
                          {errors.nm_achievements[index]?.period?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </CardContent>
    </>
  );
}
