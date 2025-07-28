import { API_ENDPOINTS } from "@/constants/api";
import API from "@/lib/api";
import axios from "axios";
import { useState } from "react";

type RegistrationStatus =
  | "idle"
  | "checking"
  | "registered"
  | "not-registered"
  | "error";

export default function useCheckNRP() {
  const [status, setStatus] = useState<RegistrationStatus>("idle");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkNRP = async (nrp: string) => {
    setIsLoading(true);
    setStatus("checking");

    await API.get(API_ENDPOINTS.NEW_MEMBERS.CHECK_NRP(nrp))
      .then(() => {
        setStatus("not-registered");
      })
      .catch((err: unknown) => {
        if (axios.isAxiosError(err) && err.response) {
          const code = err.response.status;
          if (code === 409) {
            setStatus("registered");
          } else {
            setStatus("error");
          }
        } else {
          setStatus("error");
          console.error(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { status, isLoading, checkNRP };
}
