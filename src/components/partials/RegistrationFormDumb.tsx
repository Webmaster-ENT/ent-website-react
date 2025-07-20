// import { useState, useEffect, createElement } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"
// import { CheckCircle, User, FileText, Award, MessageSquare, Plus, Trash2 } from "lucide-react"
// import { toast } from "sonner"
// import { useForm } from "react-hook-form"
// import { registrationFormSchema, type RegistrationFormSchema } from "@/types/form"
// import { zodResolver } from '@hookform/resolvers/zod'

// interface Experience {
//   id: string
//   organization: string
//   position: string
//   startDate: string
//   endDate: string
//   description: string
// }

// interface Achievement {
//   id: string
//   name: string
//   organization: string
//   date: string
//   description: string
// }

// interface FormData {
//   // Data Diri
//   nama: string
//   nrp: string
//   jenjang: string
//   jurusan: string
//   tempatLahir: string
//   tanggalLahir: string
//   agama: string
//   alamatSekarang: string
//   alamatRumah: string
//   email: string
//   noHp: string

//   // Deskripsi Diri
//   moto: string
//   alasanENT: string
//   alasanDivisi: string
//   minatUKM: string
//   yakinkanKami: string

//   // Pengalaman
//   experiences: Experience[]

//   // Penghargaan
//   achievements: Achievement[]
// }

// const STORAGE_KEY = "ent-form-data"

// export default function RegistrationForm() {
//   const [currentStep, setCurrentStep] = useState(0)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//     const form = useForm<RegistrationFormSchema>({
//         resolver: zodResolver(registrationFormSchema),
//         defaultValues: {
//         nama: "",
//             nrp: "",
//             jenjang: "",
//             jurusan: "",
//             tempatLahir: "",
//             tanggalLahir: "",
//             agama: "",
//             alamatSekarang: "",
//             alamatRumah: "",
//             email: "",
//             noHp: "",
//             moto: "",
//             alasanENT: "",
//             alasanDivisi: "",
//             minatUKM: "",
//             yakinkanKami: "",
//             experiences: [],
//             achievements: [] 
//         }
//     })

//     // handle prev and next button
//     const next = () => {
//         if(currentStep < steps.length - 1) {
//             setCurrentStep(step => step + 1)
//         }
//     }

//     const prev = () => {
//         if(currentStep > 0) {
//             setCurrentStep(step => step -1)
//         }
//     }
//   const [formData, setFormData] = useState<FormData>({
//     nama: "",
//     nrp: "",
//     jenjang: "",
//     jurusan: "",
//     tempatLahir: "",
//     tanggalLahir: "",
//     agama: "",
//     alamatSekarang: "",
//     alamatRumah: "",
//     email: "",
//     noHp: "",
//     moto: "",
//     alasanENT: "",
//     alasanDivisi: "",
//     minatUKM: "",
//     yakinkanKami: "",
//     experiences: [],
//     achievements: [],
//   })

//   // Load form data from localStorage on component mount
//   useEffect(() => {
//     try {
//       const savedData = localStorage.getItem(STORAGE_KEY)
//       if (savedData) {
//         const parsedData = JSON.parse(savedData)
//         setFormData(parsedData)
//         toast.success("Data formulir berhasil dipulihkan", {
//           description: "Data yang tersimpan sebelumnya telah dimuat kembali",
//         })
//       }
//     } catch (error) {
//       console.error("Error loading form data from localStorage:", error)
//       toast.error("Gagal memuat data tersimpan")
//     }
//   }, [])

//   // Save form data to localStorage whenever formData changes
//   useEffect(() => {
//     try {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
//     } catch (error) {
//       console.error("Error saving form data to localStorage:", error)
//     }
//   }, [formData])

//   // Clear localStorage when form is submitted
//   const clearStoredData = () => {
//     try {
//       localStorage.removeItem(STORAGE_KEY)
//       console.log("Form data cleared from localStorage")
//     } catch (error) {
//       console.error("Error clearing form data from localStorage:", error)
//     }
//   }

//   const updateFormData = (field: keyof FormData, value: unknown) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//   }

//   // Experience management functions
//   const addExperience = () => {
//     const newExperience: Experience = {
//       id: Date.now().toString(),
//       organization: "",
//       position: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     }
//     setFormData((prev) => ({
//       ...prev,
//       experiences: [...prev.experiences, newExperience],
//     }))
//     toast.success("Pengalaman baru ditambahkan")
//   }

//   const removeExperience = (id: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       experiences: prev.experiences.filter((exp) => exp.id !== id),
//     }))
//     toast.success("Pengalaman dihapus")
//   }

//   const updateExperience = (id: string, field: keyof Experience, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
//     }))
//   }

//   // Achievement management functions
//   const addAchievement = () => {
//     const newAchievement: Achievement = {
//       id: Date.now().toString(),
//       name: "",
//       organization: "",
//       date: "",
//       description: "",
//     }
//     setFormData((prev) => ({
//       ...prev,
//       achievements: [...prev.achievements, newAchievement],
//     }))
//     toast.success("Penghargaan baru ditambahkan")
//   }

//   const removeAchievement = (id: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       achievements: prev.achievements.filter((ach) => ach.id !== id),
//     }))
//     toast.success("Penghargaan dihapus")
//   }

//   const updateAchievement = (id: string, field: keyof Achievement, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       achievements: prev.achievements.map((ach) => (ach.id === id ? { ...ach, [field]: value } : ach)),
//     }))
//   }

//   const validateStep = (step: number): boolean => {
//     switch (step) {
//       case 1:
//         { const step1Fields = [
//           { field: formData.nama, name: "Nama" },
//           { field: formData.nrp, name: "NRP" },
//           { field: formData.jenjang, name: "Jenjang" },
//           { field: formData.jurusan, name: "Jurusan" },
//           { field: formData.tempatLahir, name: "Tempat Lahir" },
//           { field: formData.tanggalLahir, name: "Tanggal Lahir" },
//           { field: formData.agama, name: "Agama" },
//           { field: formData.alamatSekarang, name: "Alamat Sekarang" },
//           { field: formData.alamatRumah, name: "Alamat Rumah" },
//           { field: formData.email, name: "Email" },
//           { field: formData.noHp, name: "No HP" },
//         ]
//         const emptyStep1 = step1Fields.filter((item) => !item.field)
//         if (emptyStep1.length > 0) {
//           toast.error("Field belum lengkap", {
//             description: `Mohon lengkapi: ${emptyStep1.map((item) => item.name).join(", ")}`,
//           })
//           return false
//         }
//         return true }

//       case 2:
//         { const step2Fields = [
//           { field: formData.moto, name: "Moto" },
//           { field: formData.alasanENT, name: "Alasan Mendaftar ke ENT" },
//           { field: formData.alasanDivisi, name: "Alasan Mendaftar ke Divisi" },
//           { field: formData.minatUKM, name: "Minat UKM/Tim Robot/Ormawa" },
//           { field: formData.yakinkanKami, name: "Yakinkan Kami" },
//         ]
//         const emptyStep2 = step2Fields.filter((item) => !item.field)
//         if (emptyStep2.length > 0) {
//           toast.error("Field belum lengkap", {
//             description: `Mohon lengkapi: ${emptyStep2.map((item) => item.name).join(", ")}`,
//           })
//           return false
//         }
//         return true }

//       case 3:
//         { if (formData.experiences.length === 0) {
//           toast.error("Pengalaman belum ditambahkan", {
//             description: "Mohon tambahkan minimal satu pengalaman",
//           })
//           return false
//         }
//         const incompleteExperiences = formData.experiences.filter(
//           (exp) => !exp.organization || !exp.position || !exp.startDate || !exp.description,
//         )
//         if (incompleteExperiences.length > 0) {
//           toast.error("Pengalaman belum lengkap", {
//             description: "Mohon lengkapi semua field pengalaman yang telah ditambahkan",
//           })
//           return false
//         }
//         return true }

//       case 4:
//         { if (formData.achievements.length === 0) {
//           toast.error("Penghargaan belum ditambahkan", {
//             description: "Mohon tambahkan minimal satu penghargaan atau tulis 'Belum ada'",
//           })
//           return false
//         }
//         const incompleteAchievements = formData.achievements.filter(
//           (ach) => !ach.name || !ach.organization || !ach.date,
//         )
//         if (incompleteAchievements.length > 0) {
//           toast.error("Penghargaan belum lengkap", {
//             description: "Mohon lengkapi semua field penghargaan yang telah ditambahkan",
//           })
//           return false
//         }
//         return true }

//       default:
//         return false
//     }
//   }

//   const handleSubmit = () => {
//     if (validateStep(4)) {
//       clearStoredData()
//       setIsSubmitted(true)
//       toast.success("Pendaftaran berhasil dikirim!", {
//         description: "Terima kasih telah mendaftar. Data Anda akan segera diproses.",
//       })
//       console.log("Form submitted:", formData)
//     }
//   }

//   const resetForm = () => {
//     setFormData({
//       nama: "",
//       nrp: "",
//       jenjang: "",
//       jurusan: "",
//       tempatLahir: "",
//       tanggalLahir: "",
//       agama: "",
//       alamatSekarang: "",
//       alamatRumah: "",
//       email: "",
//       noHp: "",
//       moto: "",
//       alasanENT: "",
//       alasanDivisi: "",
//       minatUKM: "",
//       yakinkanKami: "",
//       experiences: [],
//       achievements: [],
//     })
//     clearStoredData()
//     setCurrentStep(1)
//     setIsSubmitted(false)
//   }

//   const steps = [
//     { number: 1, title: "Data Diri", icon: User },
//     { number: 2, title: "Deskripsi Diri", icon: MessageSquare },
//     { number: 3, title: "Pengalaman", icon: FileText },
//     { number: 4, title: "Penghargaan", icon: Award },
//   ]

//   const progress = (currentStep / 4) * 100

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md">
//           <CardContent className="flex flex-col items-center justify-center p-8 text-center">
//             <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Pendaftaran Berhasil!</h2>
//             <p className="text-gray-600 mb-6">
//               Terima kasih telah mendaftar. Data Anda telah berhasil dikirim dan akan segera diproses.
//             </p>
//             <Button onClick={resetForm} className="w-full">
//               Daftar Lagi
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen p-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Formulir Pendaftaran ENT</h1>
//           <p className="text-gray-600">Lengkapi semua informasi dengan benar</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             {steps.map((step) => {
//               const Icon = step.icon
//               return (
//                 <div key={step.number} className="flex flex-col items-center">
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                       currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
//                     }`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <span
//                     className={`text-xs font-medium ${currentStep >= step.number ? "text-blue-600" : "text-gray-500"}`}
//                   >
//                     {step.title}
//                   </span>
//                 </div>
//               )
//             })}
//           </div>
//           <Progress value={progress} className="h-2" />
//           <div className="text-center mt-2 text-sm text-gray-600">Langkah {currentStep} dari 4</div>
//         </div>

//         {/* Form Content */}
//         <Card className="bg-background p-4">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               {createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
//               {steps[currentStep - 1].title}
//             </CardTitle>
//             <CardDescription>
//               {currentStep === 1 && "Masukkan informasi pribadi Anda"}
//               {currentStep === 2 && "Ceritakan tentang diri Anda dan motivasi bergabung"}
//               {currentStep === 3 && "Tambahkan pengalaman yang relevan"}
//               {currentStep === 4 && "Tambahkan penghargaan atau prestasi yang pernah diraih"}
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {/* Step 1: Data Diri */}
//             {currentStep === 1 && (
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="nama">Nama Lengkap *</Label>
//                     <Input
//                       id="nama"
//                       value={formData.nama}
//                       onChange={(e) => updateFormData("nama", e.target.value)}
//                       placeholder="Masukkan nama lengkap"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="nrp">NRP *</Label>
//                     <Input
//                       id="nrp"
//                       value={formData.nrp}
//                       onChange={(e) => updateFormData("nrp", e.target.value)}
//                       placeholder="Masukkan NRP"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="jenjang">Jenjang *</Label>
//                     <Select value={formData.jenjang} onValueChange={(value) => updateFormData("jenjang", value)}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Pilih jenjang" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="D3">D3</SelectItem>
//                         <SelectItem value="D4">D4</SelectItem>
//                         <SelectItem value="S1">S1</SelectItem>
//                         <SelectItem value="S2">S2</SelectItem>
//                         <SelectItem value="S3">S3</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="jurusan">Jurusan *</Label>
//                     <Input
//                       id="jurusan"
//                       value={formData.jurusan}
//                       onChange={(e) => updateFormData("jurusan", e.target.value)}
//                       placeholder="Masukkan jurusan"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="tempatLahir">Tempat Lahir *</Label>
//                     <Input
//                       id="tempatLahir"
//                       value={formData.tempatLahir}
//                       onChange={(e) => updateFormData("tempatLahir", e.target.value)}
//                       placeholder="Masukkan tempat lahir"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
//                     <Input
//                       id="tanggalLahir"
//                       type="date"
//                       value={formData.tanggalLahir}
//                       onChange={(e) => updateFormData("tanggalLahir", e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="agama">Agama *</Label>
//                   <Select value={formData.agama} onValueChange={(value) => updateFormData("agama", value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Pilih agama" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Islam">Islam</SelectItem>
//                       <SelectItem value="Kristen">Kristen</SelectItem>
//                       <SelectItem value="Katolik">Katolik</SelectItem>
//                       <SelectItem value="Hindu">Hindu</SelectItem>
//                       <SelectItem value="Buddha">Buddha</SelectItem>
//                       <SelectItem value="Konghucu">Konghucu</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="alamatSekarang">Alamat Sekarang *</Label>
//                   <Textarea
//                     id="alamatSekarang"
//                     value={formData.alamatSekarang}
//                     onChange={(e) => updateFormData("alamatSekarang", e.target.value)}
//                     placeholder="Masukkan alamat tempat tinggal saat ini"
//                     className="min-h-[80px]"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="alamatRumah">Alamat Rumah *</Label>
//                   <Textarea
//                     id="alamatRumah"
//                     value={formData.alamatRumah}
//                     onChange={(e) => updateFormData("alamatRumah", e.target.value)}
//                     placeholder="Masukkan alamat rumah asal"
//                     className="min-h-[80px]"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email *</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => updateFormData("email", e.target.value)}
//                       placeholder="contoh@email.com"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="noHp">No HP *</Label>
//                     <Input
//                       id="noHp"
//                       value={formData.noHp}
//                       onChange={(e) => updateFormData("noHp", e.target.value)}
//                       placeholder="08xxxxxxxxxx"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Deskripsi Diri */}
//             {currentStep === 2 && (
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="moto">Moto Hidup *</Label>
//                   <Input
//                     id="moto"
//                     value={formData.moto}
//                     onChange={(e) => updateFormData("moto", e.target.value)}
//                     placeholder="Masukkan moto hidup Anda"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="alasanENT">Alasan Mendaftar ke ENT *</Label>
//                   <Textarea
//                     id="alasanENT"
//                     value={formData.alasanENT}
//                     onChange={(e) => updateFormData("alasanENT", e.target.value)}
//                     placeholder="Jelaskan mengapa Anda ingin bergabung dengan ENT"
//                     className="min-h-[100px]"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="alasanDivisi">Alasan Mendaftar ke Divisi Ini *</Label>
//                   <Textarea
//                     id="alasanDivisi"
//                     value={formData.alasanDivisi}
//                     onChange={(e) => updateFormData("alasanDivisi", e.target.value)}
//                     placeholder="Jelaskan mengapa Anda memilih divisi ini"
//                     className="min-h-[100px]"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="minatUKM">Minat UKM / Tim Robot / Ormawa *</Label>
//                   <Textarea
//                     id="minatUKM"
//                     value={formData.minatUKM}
//                     onChange={(e) => updateFormData("minatUKM", e.target.value)}
//                     placeholder="Ceritakan minat Anda terhadap kegiatan organisasi, UKM, atau tim robot"
//                     className="min-h-[100px]"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="yakinkanKami">Yakinkan Kami Kenapa Kamu Harus Masuk ENT *</Label>
//                   <Textarea
//                     id="yakinkanKami"
//                     value={formData.yakinkanKami}
//                     onChange={(e) => updateFormData("yakinkanKami", e.target.value)}
//                     placeholder="Berikan alasan kuat mengapa Anda layak diterima di ENT"
//                     className="min-h-[120px]"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Pengalaman */}
//             {currentStep === 3 && (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-semibold">Pengalaman</h3>
//                   <Button onClick={addExperience} className="flex items-center gap-2">
//                     <Plus className="h-4 w-4" />
//                     Tambah Pengalaman
//                   </Button>
//                 </div>

//                 {formData.experiences.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">
//                     <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                     <p>Belum ada pengalaman yang ditambahkan</p>
//                     <p className="text-sm">Klik "Tambah Pengalaman" untuk memulai</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-6">
//                     {formData.experiences.map((experience, index) => (
//                       <Card key={experience.id} className="p-4">
//                         <div className="flex justify-between items-center mb-4">
//                           <h4 className="font-medium">Pengalaman {index + 1}</h4>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => removeExperience(experience.id)}
//                             className="text-red-600 hover:text-red-700"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                           <div className="space-y-2">
//                             <Label>Organisasi/Perusahaan *</Label>
//                             <Input
//                               value={experience.organization}
//                               onChange={(e) => updateExperience(experience.id, "organization", e.target.value)}
//                               placeholder="Nama organisasi atau perusahaan"
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label>Posisi/Jabatan *</Label>
//                             <Input
//                               value={experience.position}
//                               onChange={(e) => updateExperience(experience.id, "position", e.target.value)}
//                               placeholder="Posisi atau jabatan yang dipegang"
//                             />
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                           <div className="space-y-2">
//                             <Label>Tanggal Mulai *</Label>
//                             <Input
//                               type="date"
//                               value={experience.startDate}
//                               onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label>Tanggal Selesai</Label>
//                             <Input
//                               type="date"
//                               value={experience.endDate}
//                               onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
//                             />
//                             <p className="text-xs text-gray-500">Kosongkan jika masih berlangsung</p>
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           <Label>Deskripsi *</Label>
//                           <Textarea
//                             value={experience.description}
//                             onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
//                             placeholder="Deskripsikan tugas, tanggung jawab, dan pencapaian Anda"
//                             className="min-h-[100px]"
//                           />
//                         </div>
//                       </Card>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Step 4: Penghargaan */}
//             {currentStep === 4 && (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-semibold">Penghargaan & Prestasi</h3>
//                   <Button onClick={addAchievement} className="flex items-center gap-2">
//                     <Plus className="h-4 w-4" />
//                     Tambah Penghargaan
//                   </Button>
//                 </div>

//                 {formData.achievements.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">
//                     <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                     <p>Belum ada penghargaan yang ditambahkan</p>
//                     <p className="text-sm">Klik "Tambah Penghargaan" untuk memulai</p>
//                     <p className="text-xs mt-2 text-blue-600">
//                       Jika belum ada penghargaan, tambahkan satu item dengan nama "Belum ada"
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-6">
//                     {formData.achievements.map((achievement, index) => (
//                       <Card key={achievement.id} className="p-4">
//                         <div className="flex justify-between items-center mb-4">
//                           <h4 className="font-medium">Penghargaan {index + 1}</h4>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => removeAchievement(achievement.id)}
//                             className="text-red-600 hover:text-red-700"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                           <div className="space-y-2">
//                             <Label>Nama Penghargaan *</Label>
//                             <Input
//                               value={achievement.name}
//                               onChange={(e) => updateAchievement(achievement.id, "name", e.target.value)}
//                               placeholder="Nama penghargaan atau prestasi"
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label>Organisasi/Institusi *</Label>
//                             <Input
//                               value={achievement.organization}
//                               onChange={(e) => updateAchievement(achievement.id, "organization", e.target.value)}
//                               placeholder="Pemberi penghargaan"
//                             />
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                           <div className="space-y-2">
//                             <Label>Tanggal Diterima *</Label>
//                             <Input
//                               type="date"
//                               value={achievement.date}
//                               onChange={(e) => updateAchievement(achievement.id, "date", e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           <Label>Deskripsi</Label>
//                           <Textarea
//                             value={achievement.description}
//                             onChange={(e) => updateAchievement(achievement.id, "description", e.target.value)}
//                             placeholder="Deskripsi singkat tentang penghargaan (opsional)"
//                             className="min-h-[80px]"
//                           />
//                         </div>
//                       </Card>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between pt-6">
//               <Button variant="outline" onClick={prev} disabled={currentStep === 0}>
//                 Sebelumnya
//               </Button>

//               {currentStep < steps.length - 1 ? (
//                 <Button onClick={next}>Selanjutnya</Button>
//               ) : (
//                 <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
//                   Kirim Pendaftaran
//                 </Button>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
