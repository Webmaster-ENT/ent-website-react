import {
  type RegistrationFormSchema,
  registrationFormSchema,
  steps,
} from "@/types/form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler, useFieldArray } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardFooter } from "@/components/ui/card";
import BiodataForm from "./BiodataForm";
import DivisionForm from "./DivisionForm";
import ExperienceForm from "./ExperienceForm";
import AchievementForm from "./AchievementForm";
import StepIndicatorForm from "./StepIndicatorForm";
import ButtonNavigationForm from "./ButtonNavigationForm";
// import { useDebounce } from "use-debounce";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/lib/localStorage";

const REGISTRATION_KEY_FORM = "registrationForm";
const REGISTRATION_KEY_STEP = "registrationStep";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    return loadFromLocalStorage<number>(REGISTRATION_KEY_STEP) ?? 1;
  });
  const navigate = useNavigate();
  const defaultValues = loadFromLocalStorage<RegistrationFormSchema>(
    REGISTRATION_KEY_FORM
  ) ?? {
    nama: "",
    nrp: "",
    email: "",
    noHp: "",
    jenjang: "",
    jurusan: "",
    tempatLahir: "",
    tanggalLahir: new Date("2000-01-01"),
    agama: "",
    alamatSekarang: "",
    alamatRumah: "",

    // step 2
    divisi: "",
    moto: "",
    alasanENT: "",
    alasanDivisi: "",
    minatUKM: "",
    yakinkanKami: "",

    // step 3 & 4
    experiences: [],
    achievements: [],
  };

  // submit form
  const processRegistration: SubmitHandler<RegistrationFormSchema> = async (
    data
  ) => {
    console.log("Submit terpanggil");
    console.log(data);
    navigate("/");
    toast.success("Submit Successful", {
      action: {
        label: "Download PDF",
        onClick: () => console.log("berhasil download"),
      },
    });
    form.reset();
    removeFromLocalStorage(REGISTRATION_KEY_FORM);
    removeFromLocalStorage(REGISTRATION_KEY_STEP);
  };

  // debugging langsung ke step tertentu
  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  // ini buat form validation make react hook form dan zod
  const form = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // array field exp
  const experienceField = useFieldArray({
    control: form.control,
    name: "experiences",
  });

  // array field achievement
  const achievementField = useFieldArray({
    control: form.control,
    name: "achievements",
  });

  // buat validasi ke next step
  type FieldName = keyof RegistrationFormSchema;

  // previous button
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      saveToLocalStorage<number>(REGISTRATION_KEY_STEP, currentStep);
    }
  };

  // next button
  const next = async () => {
    // ambil data field yang dibutuhin
    const fields = steps[currentStep - 1].fields;
    // cek outputnya dari field yang ada udah ke isi semua belom?
    const output = await form.trigger(fields as unknown as FieldName[], {
      shouldFocus: true,
    });
    console.log("Validasi berhasil?", output);
    if (!output) return;

    // buat logic untuk handle api validasi nrp

    // kalo udah selesai semua validasi, pindah step form
    if (currentStep < steps.length) {
      // save data setelah selesai validasi
      const data = form.getValues();
      saveToLocalStorage(REGISTRATION_KEY_FORM, data);
      setCurrentStep((step) => step + 1);
    } else {
      form.handleSubmit(processRegistration)();
    }
  };

  useEffect(() => {
    saveToLocalStorage(REGISTRATION_KEY_STEP, currentStep);
  }, [currentStep]);

  return (
    <div className="pt-28">
      {/* header */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Form Pendaftaran ENT
      </h1>
      {/* progress */}
      <StepIndicatorForm goToStep={goToStep} currentStep={currentStep} />

      {/* form content */}
      <form onSubmit={form.handleSubmit(processRegistration)} className="my-5">
        <Card>
          {/* personal information */}
          {currentStep === 1 && <BiodataForm form={form} />}

          {/* moto in ENT */}
          {currentStep === 2 && <DivisionForm form={form} />}

          {/* pengalaman */}
          {currentStep === 3 && (
            <ExperienceForm form={form} fieldArray={experienceField} />
          )}

          {/* penghargaan */}
          {currentStep === 4 && (
            <AchievementForm form={form} fieldArray={achievementField} />
          )}

          {/* navigation button next and previous */}
          <CardFooter>
            <ButtonNavigationForm
              next={next}
              prev={prev}
              currentStep={currentStep}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
