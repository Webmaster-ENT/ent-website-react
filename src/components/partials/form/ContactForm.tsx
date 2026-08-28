import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/MultiSelect";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormSchema } from "@/types/form";
import { type LucideIcon, Loader2 } from "lucide-react";
import { MicVocalIcon, FilmIcon, NewspaperIcon, VoteIcon } from "lucide-react";
import useContactForm from "@/hooks/useContactForm";
import { DateToTime } from "@/components/DateToTime";
import { formatPhoneNumber } from "@/lib/formatPhone";
interface ContactFormProps {
  onSuccess: () => void;
}

type product = {
  value: string;
  label: "PENS TV" | "Reels" | "Berita" | "Media Partner";
  icon: LucideIcon;
};

const productList: product[] = [
  { value: "PENS TV", label: "PENS TV", icon: MicVocalIcon },
  { value: "Reels", label: "Reels", icon: FilmIcon },
  { value: "Berita", label: "Berita", icon: NewspaperIcon },
  { value: "Media Partner", label: "Media Partner", icon: VoteIcon },
];

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signToTelegram } = useContactForm();

  const newForm = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      sender_name: "",
      sender_phone: "",
      activity: "",
      start_date: new Date(),
      end_date: new Date(),
      place: "",
      description: "",
      product: undefined,
      name_contact_person: "",
      phone_contact_person: "",
    },
  });

  const newHandleSubmitForm = async (data: ContactFormSchema) => {
    setIsSubmitting(true);
    try {
      await signToTelegram(data);
      console.table(data);
      onSuccess();
    } catch {
      console.error("Kesalahan dalam mengirim form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...newForm}>
      <form
        className="space-y-6 mx-auto w-full"
        onSubmit={newForm.handleSubmit(newHandleSubmitForm)}
      >
        {/* report name */}
        <FormField
          control={newForm.control}
          name="sender_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Pelapor</FormLabel>
              <FormControl>
                <Input placeholder="Nama Pelapor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* report telephone */}
        <FormField
          control={newForm.control}
          name="sender_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telephone</FormLabel>
              <FormControl>
                <Input
                  placeholder="+6281234567890 (atau ketik 08...)"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* event name */}
        <FormField
          control={newForm.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Event</FormLabel>
              <FormControl>
                <Input placeholder="Nama Event" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* event start date */}
        <FormField
          control={newForm.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Mulai Kegiatan</FormLabel>
              <DateToTime
                value={field.value}
                inputRef={field.ref}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={newForm.control}
          name="end_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Selesai Kegiatan</FormLabel>
              <DateToTime
                value={field.value}
                inputRef={field.ref}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* event place */}
        <FormField
          control={newForm.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tempat Kegiatan</FormLabel>
              <FormControl>
                <Input placeholder="Tempat Event" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* event description */}
        <FormField
          control={newForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi Kegiatan</FormLabel>
              <FormControl>
                <Textarea placeholder="Deskripsi Kegiatan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* product request */}
        <FormField
          control={newForm.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Produk Yang Ingin Dihasilkan</FormLabel>
              <FormControl>
                <MultiSelect
                  options={productList}
                  onValueChange={field.onChange}
                  maxCount={2}
                  placeholder="Pilih Produk"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* contact person */}
        <FormField
          control={newForm.control}
          name="name_contact_person"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Kontak yang Bisa Dihubungi</FormLabel>
              <FormControl>
                <Input placeholder="Nama Yang bisa dihubungi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* report telephone */}
        <FormField
          control={newForm.control}
          name="phone_contact_person"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telephone</FormLabel>
              <FormControl>
                <Input
                  placeholder="+6281234567890 (atau ketik 08...)"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#134679] hover:bg-[#0e355c] transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Mengirim Laporan...
            </>
          ) : (
            "Kirim"
          )}
        </Button>
      </form>
    </Form>
  );
}
