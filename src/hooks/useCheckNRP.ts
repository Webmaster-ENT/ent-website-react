import { API_ENDPOINTS } from "@/constants/api";
import API from "@/lib/api";
import axios from "axios";
import { useState } from "react";

export type RegistrationStatus =
  | "idle"
  | "checking"
  | "registered"
  | "not-registered"
  | "error";

export default function useCheckNRP() {
  const [status, setStatus] = useState<RegistrationStatus>("idle");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkNRP = async (nrp: string): Promise<RegistrationStatus> => {
    setIsLoading(true);
    setStatus("checking");

    try {
      await API.get(API_ENDPOINTS.NEW_MEMBERS.CHECK_NRP(nrp));
      return "not-registered";
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        const code = err.response.status;
        if (code === 409) {
          setStatus("registered");
          return "registered";
        } else {
          setStatus("error");
          return "error";
        }
      } else {
        setStatus("error");
        console.error(err);
        return "error";
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { status, isLoading, checkNRP };
}
