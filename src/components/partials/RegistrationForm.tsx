import { cn } from "@/lib/utils"
import { divisions, type RegistrationFormSchema, registrationFormSchema } from "@/types/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { Textarea } from "../ui/textarea"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const steps = [
    {
        id: 1, 
        title: "Data Diri", 
        description: 'Informasi terkait biodata Anda',
        fields: ['nama', 'nrp', 'jenjang', 'jurusan', 'tempatLahir', 'tanggalLahir', 'agama', 'alamatSekarang', 'alamatRumah', 'email', 'noHp'] as const
    },
    {
        id: 2, 
        title: "Deskripsi Diri", 
        description: 'Informasi terkait keinginan Anda dalam ENT',
        fields: ['divisi', 'moto', 'alasanENT', 'alasanDivisi', 'minatUKM', 'yakinkanKami'] as const
    },
    {
        id: 3, 
        title: "Pengalaman", 
        description: 'Pengalaman yang pernah Anda dapatkan',
        fields: ['experiences'] as const
    },
    {
        id: 4, 
        title: "Penghargaan", 
        description: 'Penghargaan yang pernah Anda raih',
        fields: ['achievements'] as const
    },
] as const

export default function RegistrationForm() {
    const [currentStep, setCurrentStep] = useState(1)
    // buat validasi ke next step
    type FieldName = keyof RegistrationFormSchema
    

    // previous button
    const prev = () => {
        if(currentStep > 1) {
            setCurrentStep(step => step - 1)
        }
    }

    // next button
    const next = async () => {
        // ambil data field yang dibutuhin
        const fields = steps[currentStep-1].fields
        console.log("Fields yang akan divalidasi:", fields);
        // cek outputnya dari field yang ada udah ke isi semua belom?
        const output = await trigger(fields as unknown as FieldName[], { shouldFocus: true })
        console.log('Validasi berhasil?', output)
        if(!output) return
        

        // buat logic untuk handle api validasi nrp
        if(currentStep < steps.length - 1) {
            setCurrentStep(step => step + 1)
        }
    }

    const processRegistration: SubmitHandler<RegistrationFormSchema> = data => {
        console.log(data)
        toast.success('Berhasil Submit')
        reset()
    }

    const goToStep = (stepId: number) => {
        setCurrentStep(stepId)
    }

    const {
        register,
        trigger,
        formState: { errors },
        handleSubmit,
        reset,
        control,
        watch,
        setValue
    } = useForm<RegistrationFormSchema>({
        resolver: zodResolver(registrationFormSchema)
    })

    const jenjang = watch('jenjang')
    const divisi = watch('divisi')

    useEffect(() => {
        setValue('jurusan', '')
    }, [jenjang, setValue])

    return(
        <div className="pt-28">
            {/* header */}
            <h1 className="text-5xl font-bold text-center">Form Pendaftaran ENT</h1>
            {/* progress */}
            <div className="w-full my-12">
                {/* Desktop and Tablet Horizontal Layout */}
                <div className="hidden md:flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                    {/* Step Circle */}
                    <div className="flex flex-col items-center">
                        <button
                        onClick={() => goToStep(step.id)}
                        className={cn(
                            "size-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors",
                            currentStep === step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : currentStep > step.id
                                ? "border-green-500 bg-green-500 text-white"
                                : "border-muted-foreground/30 bg-background text-muted-foreground hover:border-primary",
                        )}
                        >
                        {currentStep > step.id ? <Check className="size-5" /> : step.id}
                        </button>
                        <div className="mt-2 text-center">
                        <div
                            className={cn(
                            "text-sm font-medium",
                            currentStep === step.id ? "text-primary" : "text-muted-foreground",
                            )}
                        >
                            {step.title}
                        </div>
                        <div className="text-xs text-muted-foreground hidden lg:block">{step.description}</div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                        <div
                        className={cn(
                            "w-8 lg:w-16 h-0.5 mx-2 lg:mx-4 mt-[-2rem]",
                            currentStep > step.id ? "bg-green-500" : "bg-muted-foreground/30",
                        )}
                        />
                    )}
                    </div>
                ))}
                </div>

                {/* Mobile Vertical Layout */}
                <div className="md:hidden space-y-4">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4">
                    {/* Step Circle and Connector */}
                    <div className="flex flex-col items-center">
                        <button
                        onClick={() => goToStep(step.id)}
                        className={cn(
                            "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-colors flex-shrink-0",
                            currentStep === step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : currentStep > step.id
                                ? "border-green-500 bg-green-500 text-white"
                                : "border-muted-foreground/30 bg-background text-muted-foreground",
                        )}
                        >
                        {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                        </button>
                        {/* Vertical Connector Line */}
                        {index < steps.length - 1 && (
                        <div
                            className={cn("w-0.5 h-8 mt-2", currentStep > step.id ? "bg-green-500" : "bg-muted-foreground/30")}
                        />
                        )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pb-4">
                        <div
                        className={cn(
                            "text-sm font-medium",
                            currentStep === step.id ? "text-primary" : "text-muted-foreground",
                        )}
                        >
                        {step.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* form content */}
            <form onSubmit={handleSubmit(processRegistration)} className="my-5">
                <Card>
                    {/* personal information */}
                    {currentStep === 1 && (
                        <>
                            <CardHeader>
                                <CardTitle>Biodata Diri</CardTitle>
                                <CardDescription>Isi biodata diri Anda dengan benar</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* field nama */}
                                    <div className="space-y-2">
                                        <Label htmlFor="nama">Nama</Label>
                                        <Input id="nama" {...register('nama')} placeholder="john doe" />
                                        {errors.nama?.message && (
                                            <p className="text-red-400 text-sm">{errors.nama.message}</p>
                                        )}
                                    </div>
                                    {/* field nrp */}
                                    <div className="space-y-2">
                                        <Label htmlFor="nrp">NRP</Label>
                                        <Input id="nrp" {...register('nrp')} placeholder="521234567890" />
                                        {errors.nrp?.message && (
                                            <p className="text-red-400 text-sm">{errors.nrp.message}</p>
                                        )}
                                    </div>
                                    {/* field jenjang */}
                                    <div className="space-y-2">
                                        <Label>Jenjang</Label>
                                        <Controller 
                                            control={control}
                                            name={'jenjang'}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Pilih Jenjang' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="D3">D3</SelectItem>
                                                        <SelectItem value="D4">D4</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.jenjang?.message && (
                                            <p className="text-red-400 text-sm">{errors.jenjang.message}</p>
                                        )}
                                    </div>
                                    {/* field prodi */}
                                    <div className="space-y-2">
                                        <Label>Program Studi</Label>
                                        <Controller 
                                            control={control}
                                            name={'jurusan'}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value} disabled={!jenjang}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Pilih Prodi' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {jenjang === 'D4' && (
                                                            <SelectItem value="Teknologi Game">Teknologi Game</SelectItem>
                                                        )}
                                                        {jenjang === 'D3' && (
                                                            <SelectItem value="Multimedia Broadcasting">MMB</SelectItem>
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.jurusan?.message && (
                                            <p className="text-red-400 text-sm">{errors.jurusan.message}</p>
                                        )}
                                    </div>
                                    {/* tempat lahir */}
                                    <div className="space-y-2">
                                        <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                                        <Input id="tempatLahir" {...register('tempatLahir')} placeholder="Surabaya" />
                                        {errors.tempatLahir?.message && (
                                            <p className="text-red-400 text-sm">{errors.tempatLahir.message}</p>
                                        )}
                                    </div>
                                    {/* tanggal lahir */}
                                    <div className="space-y-2">
                                        <Label>Tanggal Lahir</Label>
                                        <Controller 
                                            control={control}
                                            name={'tanggalLahir'}
                                            render={({ field }) => (
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, 'dd MMMM yyy', { locale: id })
                                                            ) : (
                                                                <span>Pilih Tanggal Lahir Anda</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-full p-0" align="start">
                                                        <Calendar 
                                                            mode="single"
                                                            disabled={date => date < new Date("2000-01-01") || date > new Date("2013-12-31")}
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            defaultMonth={field.value ?? new Date('2000-01-01')}
                                                            captionLayout="dropdown-years"
                                                            startMonth={new Date('2000-01-01')}
                                                            endMonth={new Date('2013-12-31')}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            )}
                                        />
                                        {errors.tanggalLahir?.message && (
                                            <p className="text-red-400 text-sm">{errors.tanggalLahir.message}</p>
                                        )}
                                    </div>
                                    {/* agama */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Agama</Label>
                                        <Controller 
                                            control={control}
                                            name={'agama'}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Pilih Agama' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Islam">Islam</SelectItem>
                                                        <SelectItem value="Kristen">Kristen</SelectItem>
                                                        <SelectItem value="Katolik">Katolik</SelectItem>
                                                        <SelectItem value="Hindu">Hindu</SelectItem>
                                                        <SelectItem value="Buddha">Buddha</SelectItem>
                                                        <SelectItem value="Konghucu">Konghucu</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.agama?.message && (
                                            <p className="text-red-400 text-sm">{errors.agama.message}</p>
                                        )}
                                    </div>
                                    {/* alamat sekarang */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Alamat Sekarang</Label>
                                        <Textarea {...register('alamatSekarang')} placeholder="Alamat kos atau saat ini" />
                                        {errors.alamatSekarang?.message && (
                                            <p className="text-red-400 text-sm">{errors.alamatSekarang.message}</p>
                                        )}
                                    </div>
                                    {/* alamat rumah */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Alamat Rumah</Label>
                                        <Textarea {...register('alamatRumah')} placeholder="Alamat rumah" />
                                        {errors.alamatRumah?.message && (
                                            <p className="text-red-400 text-sm">{errors.alamatRumah.message}</p>
                                        )}
                                    </div>
                                    {/* email */}
                                    <div className="space-y-2">
                                        <Label>Student Email</Label>
                                        <Input {...register('email')} type="email" placeholder="username@prodi.student.pens.ac.id" />
                                        {errors.email?.message && (
                                            <p className="text-red-400 text-sm">{errors.email.message}</p>
                                        )}
                                    </div>
                                    {/* telephone */}
                                    <div className="space-y-2">
                                        <Label>Nomor Telephone</Label>
                                        <Input {...register('noHp')} placeholder="+628123456789" />
                                        {errors.noHp?.message && (
                                            <p className="text-red-400 text-sm">{errors.noHp.message}</p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {/* moto in ENT */}
                    {currentStep === 2 && (
                        <>
                            <CardHeader>
                                <CardTitle>Personalisasi</CardTitle>
                                <CardDescription>Isi data di bawah ini dengan jujur tanpa bantuan apapun. Penggunaan AI akan mengakibatkan tidak diterima secara langsung</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {/* field divisi */}
                                    <div className="space-y-2">
                                        <Label>Divisi yang ingin didaftar</Label>
                                        <Controller 
                                            control={control}
                                            name={'divisi'}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Pilih divisi yang kamu inginkan' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {divisions.map(division => (
                                                            <SelectItem key={division} value={division}>{division}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.divisi?.message && (
                                            <p className="text-sm text-red-400">{errors.divisi.message}</p>
                                        )}
                                    </div>
                                    {/* field moto hidup */}
                                    <div className="space-y-2">
                                        <Label>Moto Hidup</Label>
                                        <Input {...register('moto')} placeholder="moto kehidupan" />
                                        {errors.moto?.message && (
                                            <p className="text-sm text-red-400">{errors.moto.message}</p>
                                        )}
                                    </div>
                                    {/* alasan masuk ent */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Alasan Ingin Masuk ENT</Label>
                                        <Textarea {...register('alasanENT')} placeholder="Alasan masuk ENT" />
                                        {errors.alasanENT?.message && (
                                            <p className="text-sm text-red-400">{errors.alasanENT.message}</p>
                                        )}
                                    </div>
                                    {/* alasan masuk divisi tsb */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Alasan Ingin Masuk Ke Divisi {divisi ?? ''}</Label>
                                        <Textarea {...register('alasanDivisi')} placeholder={`Alasan masuk ke ${divisi ?? ''}`} />
                                        {errors.alasanDivisi?.message && (
                                            <p className="text-sm text-red-400">{errors.alasanDivisi.message}</p>
                                        )}
                                    </div>
                                    {/* ketertarikan ke ukm, atau ormawa, atau tim lain */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Apakah Ada Ketertarikan Untuk Join Tim/Organisasi/UKM Lain?</Label>
                                        <Textarea {...register('minatUKM')} placeholder='ketertarikan terhadap tim atau organisasi, atau UKM lain' />
                                        {errors.minatUKM?.message && (
                                            <p className="text-sm text-red-400">{errors.minatUKM.message}</p>
                                        )}
                                    </div>
                                    {/* yakinkan kami */}
                                    <div className="space-y-2 col-span-2">
                                        <Label>Yakinkan Kami Mengapa Kami Harus Menerima Kamu?</Label>
                                        <Textarea {...register('yakinkanKami')} placeholder='ketertarikan terhadap tim atau organisasi, atau UKM lain' />
                                        {errors.yakinkanKami?.message && (
                                            <p className="text-sm text-red-400">{errors.yakinkanKami.message}</p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {/* pengalaman */}
                    {currentStep === 3 && (
                        <>
                            <CardHeader>
                                <CardTitle>Pengalaman</CardTitle>
                                <CardDescription>Isikan pengalaman yang sudah kamu dapat sebelum mendaftar ENT. Kamu bisa melewatinya jika belum ada</CardDescription>
                            </CardHeader>
                            <CardContent>
                                
                                {/* field buat ngisi klo dia add expereience */}
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                </div>
                            </CardContent>
                        </>
                    )}

                    {/* penghargaan */}
                    {currentStep === 4 && (
                        <>Hello from step 4</>
                    )}

                    {/* navigation button next and previous */}
                    <CardFooter>
                        <div className="flex justify-between items-center w-full">
                            <Button onClick={prev} disabled={currentStep === 1} variant={'outline'} size={'lg'}>Sebelumnya</Button>
                            {currentStep === 4 ? (
                                <Button onClick={handleSubmit(processRegistration)} size={'lg'}>Daftar ENT</Button>
                            ) : (
                                <Button onClick={next} size={'lg'}>Selanjutnya</Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}