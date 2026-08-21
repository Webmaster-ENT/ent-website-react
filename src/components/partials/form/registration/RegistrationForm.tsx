import {
  type RegistrationFormSchema,
  registrationFormSchema,
  steps,
} from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler, useFieldArray } from "react-hook-form";
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
import useCheckNRP from "@/hooks/useCheckNRP";
import { toast } from "sonner";
import PortfolioForm from "./PortfolioForm";
import useRegistForm from "@/hooks/useRegistForm";
import { useNavigate } from "react-router";

import { CheckCircle2, Loader2 } from "lucide-react";

const REGISTRATION_KEY_FORM = "registrationForm";
const REGISTRATION_KEY_STEP = "registrationStep";

const INITIAL_FORM_VALUES: RegistrationFormSchema = {
  name: "",
  nrp: "",
  email: "",
  phone: "",
  major_id: "",
  born_city: "",
  born_date: new Date("2000-01-01"),
  religion: "",
  boarding_address: "",
  home_address: "",

  // step 2
  division: "" as any,
  motto: "",
  ent_reason: "",
  division_reason: "",
  another_interest: "",
  believe_us: "",

  // step 3 & 4
  nm_experiences: [],
  nm_achievements: [],

  // step 5
  portofolio: "",
};

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    return loadFromLocalStorage<number>(REGISTRATION_KEY_STEP) ?? 1;
  });

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);

  const { checkNRP, isLoading: isCheckingNrp } = useCheckNRP();
  const { submitRegistForm, isLoading: isSubmitting } = useRegistForm();
  const navigate = useNavigate();

  const savedData = loadFromLocalStorage<RegistrationFormSchema>(
    REGISTRATION_KEY_FORM
  );

  const defaultValues = savedData
    ? {
        ...savedData,
        born_date: savedData.born_date ? new Date(savedData.born_date) : new Date("2000-01-01"),
        nm_experiences:
          savedData.nm_experiences?.map((exp) => ({
            ...exp,
            start_date: exp.start_date ? new Date(exp.start_date) : new Date(),
            end_date: exp.end_date ? new Date(exp.end_date) : new Date(),
          })) ?? [],
        nm_achievements:
          savedData.nm_achievements?.map((acv) => ({
            ...acv,
            period: acv.period ? new Date(acv.period) : new Date(),
          })) ?? [],
      }
    : INITIAL_FORM_VALUES;

  const isSubmittedRef = useState({ current: false })[0];

  // submit form
  const processRegistration: SubmitHandler<RegistrationFormSchema> = async (data) => {
    console.table(data);
    const { success, errors } = await submitRegistForm(data);
    if (success) {
      isSubmittedRef.current = true;
      saveToLocalStorage("nrpUser", data.nrp);
      removeFromLocalStorage(REGISTRATION_KEY_FORM);
      removeFromLocalStorage(REGISTRATION_KEY_STEP);
      form.reset(INITIAL_FORM_VALUES);
      setCurrentStep(1);
      setLastSavedTime(null);
      navigate(`/success?nrp=${data.nrp}`, {
        replace: true,
      });
    } else if (errors) {
      Object.keys(errors).forEach((key) => {
        form.setError(key as keyof RegistrationFormSchema, {
          type: "server",
          message: errors[key][0],
        });
      });
    }
  };

  // ini buat form validation make react hook form dan zod
  const form = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // temporary save otomatis ke local storage setiap kali form berubah
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (isSubmittedRef.current) return;
      setIsSaving(true);
      saveToLocalStorage(REGISTRATION_KEY_FORM, value);
      const timer = setTimeout(() => {
        setIsSaving(false);
        setLastSavedTime(
          new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }, 300);
      return () => clearTimeout(timer);
    });
    return () => subscription.unsubscribe();
  }, [form, isSubmittedRef]);

  // array field exp
  const experienceField = useFieldArray({
    control: form.control,
    name: "nm_experiences",
  });

  // array field achievement
  const achievementField = useFieldArray({
    control: form.control,
    name: "nm_achievements",
  });

  // buat validasi ke next step
  type FieldName = keyof RegistrationFormSchema;

  // previous button
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      saveToLocalStorage<number>(REGISTRATION_KEY_STEP, currentStep - 1);
    }
  };

  // next button
  const next = async () => {
    // 1. Trigger validasi field untuk step aktif terlebih dahulu
    const fields = steps[currentStep - 1].fields;
    const output = await form.trigger(fields as unknown as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;

    const data = form.getValues();

    // 2. Hanya jalankan API checkNRP jika berada di Step 1 dan validasi Zod sudah lolos
    if (currentStep === 1) {
      const result = await checkNRP(data.nrp);
      console.log(`status registration: ${result}`);
      if (result === "registered") {
        toast.error(
          "NRP sudah terdaftar, Anda bisa ke halaman guidebook untuk langsung mencetak resume pdf-nya"
        );
        return;
      }
    }

    // 3. Simpan data ke LocalStorage
    saveToLocalStorage(REGISTRATION_KEY_FORM, data);

    // 4. Pindah step atau kirim formulir
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
    } else {
      form.handleSubmit(processRegistration)();
    }
  };

  useEffect(() => {
    saveToLocalStorage(REGISTRATION_KEY_STEP, currentStep);
  }, [currentStep]);

  // Cek apakah step saat ini memiliki error
  const currentStepFields = steps[currentStep - 1]?.fields ?? [];
  const hasStepErrors = currentStepFields.some((field) => {
    return Boolean(form.formState.errors[field as keyof RegistrationFormSchema]);
  });

  return (
    <div className="pt-28">
      {/* header */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Form Pendaftaran ENT
      </h1>
      {/* progress */}
      <StepIndicatorForm currentStep={currentStep} />

      {/* draft saved status indicator */}
      <div className="flex justify-end items-center px-2 py-1 -mb-2 text-xs h-6">
        {isSaving ? (
          <span className="flex items-center gap-1.5 text-amber-600 font-medium animate-pulse">
            <Loader2 className="size-3.5 animate-spin text-amber-500" />
            Menyimpan draft...
          </span>
        ) : lastSavedTime ? (
          <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            Draft tersimpan ({lastSavedTime})
          </span>
        ) : null}
      </div>

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

          {currentStep === 5 && <PortfolioForm form={form} />}

          {/* navigation button next and previous */}
          <CardFooter>
            <ButtonNavigationForm
              next={next}
              prev={prev}
              currentStep={currentStep}
              isSubmitting={isSubmitting}
              isCheckingNrp={isCheckingNrp}
              isDisabled={hasStepErrors}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
