import { API_CONFIG, API_ENDPOINTS } from "@/constants/api";
import API from "@/lib/api";
import type { RegistrationFormSchema } from "@/types/form";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const formatDateToYYYYMMDD = (date: Date | string | null | undefined): string => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function useRegistForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const submitRegistForm = async (
    data: RegistrationFormSchema
  ): Promise<{ success: boolean; errors?: Record<string, string[]> }> => {
    setIsLoading(true);
    try {
      const formattedData = {
        ...data,
        born_date: formatDateToYYYYMMDD(data.born_date),
        nm_experiences: data.nm_experiences?.map((exp) => ({
          ...exp,
          start_date: formatDateToYYYYMMDD(exp.start_date),
          end_date: formatDateToYYYYMMDD(exp.end_date),
        })) ?? [],
        nm_achievements: data.nm_achievements?.map((acv) => ({
          ...acv,
          period: formatDateToYYYYMMDD(acv.period),
        })) ?? [],
      };

      const response = await API.post(API_ENDPOINTS.NEW_MEMBERS.CREATE, formattedData);
      if (response.status === 201) {
        toast.success(
          "Berhasil Registrasi. Kamu bisa mengunduh resume pdf di halaman guidebook atau klik button di bawah ini",
          {
            action: {
              label: "Unduh",
              onClick: () =>
                window.open(
                  `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NEW_MEMBERS.CREATE_RESUME_PDF(data.nrp)}`,
                  "_blank"
                ),
            },
          }
        );
        return { success: true };
      }
      return { success: false };
    } catch (err: unknown) {
      let errorMsg = "Unknown error";
      let fieldErrors: Record<string, string[]> | undefined;
      
      if (axios.isAxiosError(err) && err.response) {
        const errorData = err.response.data;
        if (errorData && typeof errorData === "object") {
          if (errorData.errors && typeof errorData.errors === "object") {
            fieldErrors = errorData.errors;
            const messages = Object.values(errorData.errors).flat();
            errorMsg = messages.length > 0 ? (messages[0] as string) : errorData.message || errorMsg;
          } else if (errorData.message) {
            errorMsg = errorData.message;
          } else {
            errorMsg = `Error ${err.response.status}: ${err.message}`;
          }
        }
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }
      
      // Polish raw SQL duplicate entry errors
      const lowerError = errorMsg.toLowerCase();
      if (lowerError.includes("duplicate entry") || lowerError.includes("1062") || lowerError.includes("integrity constraint violation")) {
        if (lowerError.includes("email")) {
          errorMsg = "Email sudah terdaftar. Silakan gunakan email lain.";
          fieldErrors = { ...fieldErrors, email: [errorMsg] };
        } else if (lowerError.includes("phone")) {
          errorMsg = "Nomor telepon sudah terdaftar. Silakan gunakan nomor lain.";
          fieldErrors = { ...fieldErrors, phone: [errorMsg] };
        } else if (lowerError.includes("nrp")) {
          errorMsg = "NRP sudah terdaftar. Silakan gunakan NRP lain.";
          fieldErrors = { ...fieldErrors, nrp: [errorMsg] };
        } else {
          errorMsg = "Data yang Anda masukkan (NRP/Email/No. HP) sudah terdaftar.";
        }
      }
      
      toast.error(errorMsg);
      console.error(errorMsg);
      return { success: false, errors: fieldErrors };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submitRegistForm };
}
