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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { months } from "@/types/dates";
import type { RegistrationFormSchema } from "@/types/form";
import { Plus, Trash2, MedalIcon } from "lucide-react";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";

interface AchievementFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
  fieldArray: UseFieldArrayReturn<RegistrationFormSchema, "nm_achievements">;
}

export default function AchievementForm({
  form,
  fieldArray,
}: AchievementFormProps) {
  const {
    watch,
    register,
    formState: { errors },
    setValue,
  } = form;
  const { append, remove, fields } = fieldArray;
  const achievements = watch("nm_achievements");

  const addAchievement = () => {
    append({
      event: "",
      grade: "",
      period: "",
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
                        Position *
                      </Label>
                      <Input
                        {...register(`nm_achievements.${index}.grade`)}
                        placeholder="e.g., Frontend Developer"
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
                      <Label>Bulan *</Label>
                      <Select
                        value={achievements[index]?.period ?? ""}
                        onValueChange={(value) =>
                          setValue(`nm_achievements.${index}.period`, value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month.value} value={month.value}>
                              {month.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
