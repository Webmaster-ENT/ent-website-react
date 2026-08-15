import { z } from "zod";

// array pilihan produk
export const products: string[] = [
  "PENS TV",
  "Reels",
  "Berita",
  "Media Partner",
];

export const reportFormSchema = z.object({
  reportName: z.string().min(2),
  reportTelephone: z.string().regex(/^\+62[0-9]{9,14}$/, {
    message: "Phone must start with +62 and contain only numbers",
  }),
  eventName: z.string().min(2),
  eventDate: z.date(),
  eventPlace: z.string().min(2),
  productRequest: z.array(z.enum(products)).min(1),
  eventDescription: z.string().min(5),
});

export type ReportFormSchema = z.infer<typeof reportFormSchema>;

export const contactFormSchema = z.object({
  sender_name: z.string(),
  sender_phone: z.string().regex(/^\+62[0-9]{9,14}$/, {
    message: "Phone must start with +62 and contain only numbers",
  }),
  activity: z.string(),
  start_date: z.date(),
  end_date: z.date(),
  place: z.string(),
  product: z.array(z.enum(products)),
  description: z.string(),
  name_contact_person: z.string(),
  phone_contact_person: z.string().regex(/^\+62[0-9]{9,14}$/, {
    message: "Phone must start with +62 and contain only numbers",
  }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

/* 
  Registration Schema
    - Experiences
    - Achievements
*/

export const steps = [
  {
    id: 1,
    title: "Data Diri",
    description: "Informasi terkait biodata Anda",
    fields: [
      "name",
      "nrp",
      "major_id",
      "born_city",
      "born_date",
      "religion",
      "boarding_address",
      "home_address",
      "email",
      "phone",
    ] as const,
  },
  {
    id: 2,
    title: "Deskripsi Diri",
    description: "Informasi terkait keinginan Anda dalam ENT",
    fields: [
      "division",
      "motto",
      "ent_reason",
      "division_reason",
      "another_interest",
      "believe_us",
    ] as const,
  },
  {
    id: 3,
    title: "Pengalaman",
    description: "Pengalaman yang pernah Anda dapatkan",
    fields: ["nm_experiences"] as const,
  },
  {
    id: 4,
    title: "Penghargaan",
    description: "Penghargaan yang pernah Anda raih",
    fields: ["nm_achievements"] as const,
  },
  {
    id: 5,
    title: "Portofolio",
    description: "Link pengumpulan portofolio Anda",
    fields: ["portofolio"] as const,
  },
] as const;

export const ExperienceSchema = z
  .object({
    activity: z
      .string()
      .trim()
      .min(3, "Nama kegiatan minimal 3 karakter")
      .max(100, "Nama kegiatan maksimal 100 karakter"),
    position: z
      .string()
      .trim()
      .min(2, "Jabatan/posisi minimal 2 karakter")
      .max(100, "Jabatan/posisi maksimal 100 karakter"),
    start_date: z.date({ message: "Tanggal mulai wajib diisi" }),
    end_date: z.date({ message: "Tanggal selesai wajib diisi" }),
  })
  .refine((data) => data.end_date >= data.start_date, {
    message: "Tanggal selesai harus sama atau setelah tanggal mulai",
    path: ["end_date"],
  });

export const AchievementSchema = z.object({
  event: z
    .string()
    .trim()
    .min(3, "Nama penghargaan/lomba minimal 3 karakter")
    .max(100, "Nama penghargaan/lomba maksimal 100 karakter"),
  grade: z
    .string()
    .trim()
    .min(3, "Tingkat/Grade minimal 3 karakter")
    .max(50, "Tingkat/Grade maksimal 50 karakter"),
  period: z.date({ message: "Tanggal/periode wajib diisi" }),
});

export const divisions = [
  "Perencanaan Konten",
  "Reporter",
  "Webmaster",
  "Copywriter",
  "Desain Grafis",
  "Fotografer",
  "Illustrator",
  "Videografer",
] as const;

export const registrationFormSchema = z.object({
  // Personal
  name: z
    .string()
    .trim()
    .min(3, "Nama lengkap minimal 3 karakter")
    .max(60, "Nama lengkap maksimal 60 karakter"),
  nrp: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "NRP harus berisi 10 digit angka"),
  major_id: z
    .string()
    .trim()
    .min(1, "Program studi wajib dipilih")
    .uuid("Format UUID prodi tidak valid"),
  born_city: z
    .string()
    .trim()
    .min(3, "Kota tempat lahir minimal 3 karakter")
    .max(50, "Kota tempat lahir maksimal 50 karakter"),
  born_date: z
    .date({ message: "Tanggal lahir wajib diisi" })
    .refine((d) => d < new Date(), {
      message: "Tanggal lahir harus sebelum hari ini",
    }),
  religion: z
    .string()
    .trim()
    .min(3, "Agama minimal 3 karakter")
    .max(30, "Agama maksimal 30 karakter"),
  boarding_address: z
    .string()
    .trim()
    .min(3, "Alamat saat ini minimal 3 karakter")
    .max(255, "Alamat saat ini maksimal 255 karakter"),
  home_address: z
    .string()
    .trim()
    .min(3, "Alamat rumah minimal 3 karakter")
    .max(255, "Alamat rumah maksimal 255 karakter"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Format email tidak valid")
    .max(255, "Email maksimal 255 karakter"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+62|08)[0-9]{8,13}$/,
      "Nomor telepon harus diawali +62 atau 08 (9-14 digit angka)"
    ),

  // Essay
  motto: z
    .string()
    .trim()
    .min(3, "Moto hidup minimal 3 karakter")
    .max(255, "Moto hidup maksimal 255 karakter"),
  division: z.enum(divisions, {
    message: "Divisi wajib dipilih",
  }),
  ent_reason: z
    .string()
    .trim()
    .min(3, "Alasan masuk ENT minimal 3 karakter")
    .max(500, "Alasan masuk ENT maksimal 500 karakter"),
  division_reason: z
    .string()
    .trim()
    .min(3, "Alasan divisi minimal 3 karakter")
    .max(255, "Alasan divisi maksimal 255 karakter"),
  another_interest: z
    .string()
    .trim()
    .min(3, "Minat organisasi lain minimal 3 karakter")
    .max(255, "Minat organisasi lain maksimal 255 karakter"),
  believe_us: z
    .string()
    .trim()
    .min(3, "Alasan minimal 3 karakter")
    .max(500, "Alasan maksimal 500 karakter"),

  // Prestasi & Pengalaman
  nm_experiences: z.array(ExperienceSchema).max(3, "Maksimal 3 pengalaman"),
  nm_achievements: z.array(AchievementSchema).max(3, "Maksimal 3 penghargaan"),

  // Portofolio
  portofolio: z
    .string()
    .trim()
    .url("Format URL tidak valid")
    .refine((val) => val.startsWith("https://"), {
      message: "URL portofolio harus diawali dengan https://",
    }),
});

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>;
