import type { ContactFormSchema } from "@/types/form";

const CHAT_ID = -1002304081574;
const TOKEN = "8121166218:AAEuAKrnRB7TnL2V4rqYDebMzbTIm2LgNfc";

const telegram = {
  token: TOKEN,
  chat_id: CHAT_ID,
};

export const formatDateTime = (datetime: Date): string => {
  const date = new Date(datetime);
  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }; // Format tanggal
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  }; // Format waktu

  const formattedDate = date.toLocaleDateString("id-ID", optionsDate);
  const formattedTime = date.toLocaleTimeString("id-ID", optionsTime);

  return `${formattedDate}, pukul ${formattedTime}`;
};

export const teleMessage = (data: ContactFormSchema): string => {
  const formattedSchedule = formatDateTime(data.start_date);
  const message =
    `Ada permintaan liputan baru yang menarik! Berikut detail acaranya:%0A%0A` +
    `📌 Nama Pelapor: ${data.sender_name} (${data.sender_phone})%0A%0A` +
    `🎉 Nama Acara: ${data.activity}%0A` +
    `📄 Deskripsi Acara: ${data.description}%0A` +
    `📍 Lokasi: ${data.place}%0A` +
    `🗓️ Waktu Pelaksanaan: ${formattedSchedule}%0A%0A` +
    `👤 Kontak Person:%0A` +
    `Nama: ${data.name_contact_person}%0A` +
    `Telepon: ${data.phone_contact_person}%0A%0A` +
    `📦 Produk yang ingin dihasilkan: ${data.product} %0A%0A` +
    `Segera persiapkan tim terbaik untuk meliput acara ini. Terima kasih!`;
  return message;
};
export default telegram;
