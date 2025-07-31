import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { RegistrationFormSchema } from "@/types/form";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import {
  BriefcaseBusinessIcon,
  CalendarIcon,
  Plus,
  Trash2,
} from "lucide-react";
import {
  Controller,
  type UseFieldArrayReturn,
  type UseFormReturn,
} from "react-hook-form";

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
  } = form;
  const { append, remove, fields } = fieldArray;

  const addExperience = () => {
    if (fields.length < 3) {
      append({
        activity: "",
        position: "",
        start_date: new Date(),
        end_date: new Date(),
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
                    <Label>Start Date *</Label>
                    <Controller
                      control={form.control}
                      name={`nm_experiences.${index}.start_date`}
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
                          <PopoverContent className="w-full p-0" align="start">
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
                    {errors.nm_experiences?.[index]?.start_date && (
                      <p className="text-sm text-red-600">
                        {errors.nm_experiences[index]?.start_date?.message}
                      </p>
                    )}
                  </div>
                  {/* end date field */}
                  <div className="space-y-2">
                    <Label>End Date *</Label>
                    <Controller
                      control={form.control}
                      name={`nm_experiences.${index}.end_date`}
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
                          <PopoverContent className="w-full p-0" align="start">
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
