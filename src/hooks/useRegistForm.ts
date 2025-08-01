import { API_ENDPOINTS } from "@/constants/api";
import API from "@/lib/api";
import type { RegistrationFormSchema } from "@/types/form";
import { useState } from "react";
import { toast } from "sonner";

export default function useRegistForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitRegistForm = async (data: RegistrationFormSchema) => {
    setIsLoading(true);
    try {
      const response = await API.post(API_ENDPOINTS.NEW_MEMBERS.CREATE, data);
      if (response.status === 201) {
        toast.success(
          "Berhasil Registrasi. Kamu bisa mengunduh resume pdf di halaman guidebook atau klik button di bawah ini",
          {
            action: {
              label: "Unduh",
              onClick: () => console.log(""),
            },
          }
        );
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      toast.error(errorMsg);
      console.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submitRegistForm };
}
