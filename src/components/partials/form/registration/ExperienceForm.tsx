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
import { months, years } from "@/types/dates";
import type { RegistrationFormSchema } from "@/types/form";
import { BriefcaseBusinessIcon, Plus, Trash2 } from "lucide-react";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";

interface ExperienceFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
  fieldArray: UseFieldArrayReturn<RegistrationFormSchema, "nm_experiences">;
}

export default function ExperienceForm({
  form,
  fieldArray,
}: ExperienceFormProps) {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = form;
  const experiences = watch("nm_experiences");
  const { append, remove, fields } = fieldArray;

  const addExperience = () => {
    if (fields.length < 3) {
      append({
        activity: "",
        position: "",
        start_date: "",
        end_date: "",
      });
    }
  };

  const removeExperience = (id: number) => {
    remove(id);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Pengalaman</CardTitle>
        <CardDescription>
          Isikan pengalaman terbaik (maks. 3) yang sudah kamu dapat sebelum
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
              onClick={addExperience}
              disabled={fields.length >= 3}
              className="flex items-center gap-2"
            >
              <Plus className="size-4" />
              Tambah Pengalaman
            </Button>
          </div>
          {/* kalo experience = 0 */}
          {fields.length === 0 && (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50/50">
              <div className="flex flex-col items-center space-y-4">
                <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <BriefcaseBusinessIcon className="text-blue-500 size-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-gray-900">
                    Belum Ada Pengalaman Yang Ditambahkan
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Bagikan penglaman profesional kamu dengan menambahkan
                    pengalaman Anda. Ini membantu kami memahami latar belakang
                    dan kemampuan Anda.
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* field buat ngisi klo dia add expereience */}
          {fields.map((field, index) => (
            <Card key={field.id} className="relative">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Experience {index + 1}
                  </CardTitle>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExperience(index)}
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
                    <Label htmlFor={`nm_experiences.${index}.title`}>
                      Title Experience *
                    </Label>
                    <Input
                      {...register(`nm_experiences.${index}.activity`)}
                      placeholder="e.g., Software Development"
                    />
                    {errors.nm_experiences?.[index]?.activity && (
                      <p className="text-sm text-red-600">
                        {errors.nm_experiences[index]?.activity?.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`nm_experiences.${index}.position`}>
                      Position *
                    </Label>
                    <Input
                      {...register(`nm_experiences.${index}.position`)}
                      placeholder="e.g., Frontend Developer"
                    />
                    {errors.nm_experiences?.[index]?.position && (
                      <p className="text-sm text-red-600">
                        {errors.nm_experiences[index]?.position?.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* start date field */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Start Month *</Label>
                    <Select
                      value={experiences[index]?.start_date ?? ""}
                      onValueChange={(value) =>
                        setValue(`nm_experiences.${index}.start_date`, value)
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
                    {errors.nm_experiences?.[index]?.start_date && (
                      <p className="text-sm text-red-600">
                        {errors.nm_experiences[index]?.start_date?.message}
                      </p>
                    )}
                  </div>
                  {/* end date field */}
                  <div className="space-y-2">
                    <Label>Start Year *</Label>
                    <Select
                      value={experiences[index]?.end_date ?? ""}
                      onValueChange={(value) =>
                        setValue(`nm_experiences.${index}.end_date`, value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.nm_experiences?.[index]?.end_date && (
                      <p className="text-sm text-red-600">
                        {errors.nm_experiences[index]?.end_date?.message}
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
