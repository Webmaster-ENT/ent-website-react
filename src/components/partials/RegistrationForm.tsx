import {
  type RegistrationFormSchema,
  registrationFormSchema,
  steps,
} from "@/types/form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler, useFieldArray } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardFooter } from "@/components/ui/card";
import BiodataForm from "./form/registration/BiodataForm";
import DivisionForm from "./form/registration/DivisionForm";
import ExperienceForm from "./form/registration/ExperienceForm";
import AchievementForm from "./form/registration/AchievementForm";
import StepIndicatorForm from "./form/registration/StepIndicatorForm";
import ButtonNavigationForm from "./form/registration/ButtonNavigationForm";

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  // buat validasi ke next step
  type FieldName = keyof RegistrationFormSchema;

  // previous button
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
    }
  };

  // next button
  const next = async () => {
    // ambil data field yang dibutuhin
    const fields = steps[currentStep - 1].fields;
    console.log("Fields yang akan divalidasi:", fields);
    // cek outputnya dari field yang ada udah ke isi semua belom?
    const output = await form.trigger(fields as unknown as FieldName[], {
      shouldFocus: true,
    });
    console.log("Validasi berhasil?", output);
    if (!output) return;

    // buat logic untuk handle api validasi nrp
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
    }
  };

  // submit form
  const processRegistration: SubmitHandler<RegistrationFormSchema> = (data) => {
    console.log(data);
    navigate("/");
    toast.success("Submit Successful", {
      action: {
        label: "Download PDF",
        onClick: () => console.log("berhasil download"),
      },
    });
    form.reset();
  };

  // debugging langsung ke step tertentu
  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  // ini buat form validation make react hook form dan zod
  const form = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
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
              submit={form.handleSubmit(processRegistration)}
              currentStep={currentStep}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
