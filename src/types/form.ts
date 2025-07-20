import { z } from 'zod'

// array pilihan produk
export const products: string[] = [
    "PENS TV",
    "Reels",
    "Berita",
    "Media Partner"
]

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
})

export type ReportFormSchema = z.infer<typeof reportFormSchema>

/* 
  Registration Schema
    - Experiences
    - Achievements
*/

export const ExperienceSchema = z.object({
  title: z.string().min(1, "Nama pengalaman wajib diisi"),
  position: z.string().min(1, "Posisi wajib diisi"),
  startYear: z.string(),
  startMonth: z.string(),
  endMonth: z.string(),
  endYear: z.string(),
  description: z.string().min(1, "Deskripsi wajib diisi"),
})

export const AchievementSchema = z.object({
  title: z.string().min(1, "Nama pengalaman wajib diisi"),
  position: z.string().min(1, "Posisi wajib diisi"),
  startYear: z.string(),
  startMonth: z.string(),
  endMonth: z.string(),
  endYear: z.string(),
  description: z.string().min(1, "Deskripsi wajib diisi"),
})

export const divisions: string[] = [
  'Perencanaan Konten',
  'Reporter',
  'Webmaster',
  'Copywriter',
  'Desain Grafis',
  'Fotografer',
  'Illustrator',
  'Videografer'
]

export const registrationFormSchema = z.object({
  // data diri
  nama: z.string().min(5, 'Nama lengkap wajib diisi').max(50, 'Nama lengkap maksimal 50 huruf'),
  nrp: z.string().max(10).regex(/^\d{10}$/, { message: 'NRP harus berisi 10 digit angka' }),
  jenjang: z.string('Jenjang wajib dipilih'),
  jurusan: z.string().min(1, 'Jurusan belum dipilih'),
  tempatLahir: z.string().min(1),
  tanggalLahir: z.date('Tanggal lahir wajib diisi'),
  agama: z.string().min(3, 'Agama wajib dipilih'),
  alamatSekarang: z.string().min(5, 'Alamat saat ini wajib diisi'),
  alamatRumah: z.string().min(5, 'Alamat rumah tinggal wajib diisi'),
  email: z.email({ message: "Format email tidak valid" }).regex(/^[a-zA-Z0-9._%+-]+@[a-z]+\.(student\.pens\.ac\.id)$/, {
    message: "Email harus menggunakan domain @<prodi>.student.pens.ac.id",
  }),
  noHp: z.string().regex(/^\+62[0-9]{9,14}$/, {
    message: "Nomor telephone harus diawali dengan +62 dan angka",
  }),

  // Deskripsi Diri
  divisi: z.enum(divisions, 'Divisi wajib dipilih'),
  moto: z.string().min(1, 'Moto wajib diisi'),
  alasanENT: z.string().min(1, 'Alasan wajib diisi'),
  alasanDivisi: z.string().min(1, 'Alasan wajib diisi'),
  minatUKM: z.string().min(1, 'Minat wajib diisi'),
  yakinkanKami: z.string().min(1, 'Alasan wajib diisi'),

  // Pengalaman
  experiences: z.array(ExperienceSchema).max(3, 'Maksimal 3 Pengalaman'),
  achievements: z.array(AchievementSchema).max(3, 'Maksimal 3 penghargaan terbaik')
}).refine((data) => {
  // klo experience user ada
  if(data.experiences.length > 0) {
    return data.experiences.every(
      (exp) => exp.description && exp.endMonth && exp.endYear && exp.position && exp.startMonth && exp.startYear && exp.title
    )
  }
  // klo penghargaan user ada
  if(data.achievements.length > 0) {
    return data.achievements.every(
      acv => acv.description && acv.endMonth && acv.endYear && acv.position && acv.startMonth && acv.startYear && acv.title
    )
  }

  return true
},
{
  message: 'Pengalaman harus diisi jika kamu memiliki pengalaman',
  path: ['experiences']
})

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>