import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RegistrationFormSchema } from "@/types/form";
import type { UseFormReturn } from "react-hook-form";

interface PortfolioFormProps {
  form: UseFormReturn<RegistrationFormSchema>;
}

export default function PortfolioForm({ form }: PortfolioFormProps) {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <CardHeader>
        <CardTitle>Portofolio</CardTitle>
        <CardDescription>
          Letakkan tautan google drive Anda. Pastikan google drive sudah kamu
          set agar bisa dilihat oleh semua orang yang memiliki link-nya.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Label htmlFor="portfolio">Portofolio</Label>
          <Input
            id="portfolio"
            {...register("portfolio")}
            placeholder="https://drive.google.com/asdwonsf"
          />
          {errors.portfolio?.message && (
            <p className="text-red-400 text-sm">{errors.portfolio.message}</p>
          )}
        </div>
      </CardContent>
    </>
  );
}
