import telegram, { teleMessage } from "@/lib/telegram";
import type { ContactFormSchema } from "@/types/form";
import axios from "axios";
import { toast } from "sonner";

export default function useContactForm() {
  const signToTelegram = async (data: ContactFormSchema) => {
    const message = teleMessage(data);
    const url = `https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${telegram.chat_id}&text=${message}`;

    try {
      await axios.post(url);
      toast.success(
        "Berhasil mengirim pesan ke Telegram, silahkan menunggu konfirmasi lebih lanjut dari pihak ENT"
      );
    } catch {
      toast.error("Gagal mengirim pesan");
    }
  };

  return { signToTelegram };
}
