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