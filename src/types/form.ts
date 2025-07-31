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
    fields: "portfolio" as const,
  },
] as const;

export const ExperienceSchema = z.object({
  activity: z.string().min(1, "Nama pengalaman wajib diisi"),
  position: z.string().min(1, "Posisi wajib diisi"),
  start_date: z.date(),
  end_date: z.date(),
});

export const AchievementSchema = z.object({
  event: z.string().min(1, "Nama pengalaman wajib diisi"),
  grade: z.string().min(1, "Posisi wajib diisi"),
  period: z.date(),
});

export const divisions: string[] = [
  "Perencanaan Konten",
  "Reporter",
  "Webmaster",
  "Copywriter",
  "Desain Grafis",
  "Fotografer",
  "Illustrator",
  "Videografer",
];

export const registrationFormSchema = z
  .object({
    // data diri
    name: z
      .string()
      .min(5, "Nama lengkap wajib diisi")
      .max(50, "Nama lengkap maksimal 50 huruf"),
    nrp: z
      .string()
      .max(10)
      .regex(/^\d{10}$/, { message: "NRP harus berisi 10 digit angka" }),
    major_id: z.string("Jenjang wajib dipilih"),
    born_city: z.string().min(1),
    born_date: z.date("Tanggal lahir wajib diisi"),
    religion: z.string().min(3, "Agama wajib dipilih"),
    boarding_address: z.string().min(5, "Alamat saat ini wajib diisi"),
    home_address: z.string().min(5, "Alamat rumah tinggal wajib diisi"),
    email: z
      .email({ message: "Format email tidak valid" })
      .regex(/^[a-zA-Z0-9._%+-]+@[a-z]+\.(student\.pens\.ac\.id)$/, {
        message: "Email harus menggunakan domain @<prodi>.student.pens.ac.id",
      }),
    phone: z.string().regex(/^\+62[0-9]{9,14}$/, {
      message: "Nomor telephone harus diawali dengan +62 dan angka",
    }),

    // Deskripsi Diri
    motto: z.string().min(1, "Moto wajib diisi"),
    division: z.enum(divisions, "Divisi wajib dipilih"),
    ent_reason: z.string().min(1, "Alasan wajib diisi"),
    division_reason: z.string().min(1, "Alasan wajib diisi"),
    another_interest: z.string().min(1, "Minat wajib diisi"),
    believe_us: z.string().min(1, "Alasan wajib diisi"),

    // Pengalaman
    nm_experiences: z.array(ExperienceSchema).max(3, "Maksimal 3 Pengalaman"),
    nm_achievements: z
      .array(AchievementSchema)
      .max(3, "Maksimal 3 penghargaan terbaik"),

    // portfolio
    portofolio: z.url().refine(
      (url) => {
        try {
          const parsed = new URL(url);
          return (
            parsed.hostname === "drive.google.com" ||
            parsed.hostname === "docs.google.com"
          );
        } catch {
          return false;
        }
      },
      {
        error: "URL harus merupakan link google drive",
      }
    ),
  })
  .refine((data) => {
    // klo experience user ada
    if (data.nm_experiences.length > 0) {
      const experienceValid = data.nm_experiences.every(
        (exp) => exp.activity && exp.end_date && exp.position && exp.start_date
      );
      if (!experienceValid) return false;
    }
    // klo penghargaan user ada
    if (data.nm_achievements.length > 0) {
      const achievementValid = data.nm_achievements.every(
        (acv) => acv.event && acv.grade && acv.period
      );
      if (!achievementValid) return false;
    }

    return true;
  });

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>;
