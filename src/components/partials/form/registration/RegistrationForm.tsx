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
import { API_CONFIG, API_ENDPOINTS } from "@/constants/api";

const REGISTRATION_KEY_FORM = "registrationForm";
const REGISTRATION_KEY_STEP = "registrationStep";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<number>(() => {
    return loadFromLocalStorage<number>(REGISTRATION_KEY_STEP) ?? 1;
  });

  const { checkNRP } = useCheckNRP();
  const { submitRegistForm } = useRegistForm();

  const savedData = loadFromLocalStorage<RegistrationFormSchema>(
    REGISTRATION_KEY_FORM
  );

  const defaultValues = savedData
    ? {
        ...savedData,
        born_date: new Date(savedData.born_date),
        nm_experiences:
          savedData.nm_experiences?.map((exp) => ({
            ...exp,
            start_date: new Date(exp.start_date),
            end_date: new Date(exp.end_date),
          })) ?? [],
        nm_achievements:
          savedData.nm_achievements?.map((acv) => ({
            ...acv,
            period: new Date(acv.period),
          })) ?? [],
      }
    : {
        nama: "",
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
        division: "",
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

  // submit form
  const processRegistration: SubmitHandler<RegistrationFormSchema> = (data) => {
    console.log(data);
    submitRegistForm(data);
    // generate nrp dlu
    saveToLocalStorage("nrpUser", form.getValues("nrp"));
    // membuka new window
    window.open(
      `${API_CONFIG.BASE_URL}${API_ENDPOINTS.NEW_MEMBERS.CREATE_RESUME_PDF(loadFromLocalStorage("nrpUser")!)}`,
      "_blank"
    );

    removeFromLocalStorage(REGISTRATION_KEY_FORM);
    removeFromLocalStorage(REGISTRATION_KEY_STEP);
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
      saveToLocalStorage<number>(REGISTRATION_KEY_STEP, currentStep);
    }
  };

  // next button
  const next = async () => {
    // save data
    const data = form.getValues();
    saveToLocalStorage(REGISTRATION_KEY_FORM, data);

    // buat logic untuk handle api validasi nrp
    const result = await checkNRP(data.nrp);
    console.log(`status registration: ${result}`);
    if (result === "registered") {
      toast.error(
        "NRP sudah terdaftar, Anda bisa ke halaman guidebook untuk langsung mencetak resume pdf-nya"
      );
      return;
    } else if (result === "not-registered") {
      // ambil data field yang dibutuhin
      const fields = steps[currentStep - 1].fields;
      // cek outputnya dari field yang ada udah ke isi semua belom?
      const output = await form.trigger(fields as unknown as FieldName[], {
        shouldFocus: true,
      });
      if (!output) return;

      // kalo udah selesai semua validasi, pindah step form
      if (currentStep < steps.length) {
        // save data setelah selesai validasi
        const data = form.getValues();
        saveToLocalStorage(REGISTRATION_KEY_FORM, data);
        setCurrentStep((step) => step + 1);
      } else {
        form.handleSubmit(processRegistration)();
      }
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
      <StepIndicatorForm currentStep={currentStep} />

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
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
