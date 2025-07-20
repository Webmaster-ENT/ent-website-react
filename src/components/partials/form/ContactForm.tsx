import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { MultiSelect } from '@/components/MultiSelect'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { reportFormSchema, type ReportFormSchema } from '@/types/form'
import { cn } from '@/lib/utils'
import { CalendarIcon, type LucideIcon } from 'lucide-react'
import { format } from 'date-fns'
import { MicVocalIcon, FilmIcon, NewspaperIcon, VoteIcon } from 'lucide-react'
import type z from 'zod'
interface ContactFormProps {
    onSuccess: () => void
}

type product = {
    value: string
    label: 'PENS TV' | 'Reels' | 'Berita' | 'Media Partner'
    icon: LucideIcon
}

const productList: product[] = [
    { value: 'PENS TV', label: 'PENS TV', icon: MicVocalIcon },
    { value: 'Reels', label: 'Reels', icon: FilmIcon },
    { value: 'Berita', label: 'Berita', icon: NewspaperIcon },
    { value: 'Media Partner', label: 'Media Partner', icon: VoteIcon },
]

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const form = useForm<ReportFormSchema>({
        resolver: zodResolver(reportFormSchema),
        defaultValues: {
            reportName: "",
            reportTelephone: "",
            eventName: "",
            eventDate: undefined,
            eventPlace: "",
            eventDescription: "",
            productRequest: [],
        }
    })

    const handleSubmitForm = (data: z.infer<typeof reportFormSchema>) => {
        toast.success(`Pengajuan liputan Anda terkirim! Silahkan tunggu konfirmasi lebih lanjut`)
        console.log(data)
        onSuccess()
    }

    return (
        <Form {...form}>
            <form className='space-y-6 mx-auto w-full' onSubmit={form.handleSubmit(handleSubmitForm)}>
                {/* report name */}
                <FormField 
                    control={form.control}
                    name='reportName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Pelapor</FormLabel>
                            <FormControl>
                                <Input placeholder='Nama Pelapor' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* report telephone */}
                <FormField 
                    control={form.control}
                    name='reportTelephone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Telephone</FormLabel>
                            <FormControl>
                                <Input placeholder='+6281234567890' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* event name */}
                <FormField 
                    control={form.control}
                    name='eventName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Event</FormLabel>
                            <FormControl>
                                <Input placeholder='Nama Event' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* event date */}
                <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date < new Date()
                                    }
                                />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* event place */}
                <FormField 
                    control={form.control}
                    name='eventPlace'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tempat Kegiatan</FormLabel>
                            <FormControl>
                                <Input placeholder='Tempat Event' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* event description */}
                <FormField 
                    control={form.control}
                    name='eventDescription'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Deskripsi Kegiatan</FormLabel>
                            <FormControl>
                                <Textarea placeholder='Deskripsi Kegiatan' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* product request */}
                <FormField 
                    control={form.control}
                    name='productRequest'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Produk Yang Ingin Dihasilkan</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={productList}
                                    onValueChange={field.onChange}
                                    maxCount={2}
                                    placeholder='Pilih Produk'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* button */}
                <Button type='submit' className='w-full bg-[#134679]'>Kirim</Button>
            </form>
        </Form>
    )
}