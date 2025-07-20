import { Button } from "@/components/ui/button";

interface ButtonNavigationFormProps {
  prev: () => void;
  next: () => void;
  submit: () => void;
  currentStep: number;
}

export default function ButtonNavigationForm({
  prev,
  next,
  submit,
  currentStep,
}: ButtonNavigationFormProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        onClick={prev}
        disabled={currentStep === 1}
        variant={"outline"}
        size={"lg"}
      >
        Sebelumnya
      </Button>
      {currentStep === 4 ? (
        <Button onClick={submit} size={"lg"}>
          Daftar ENT
        </Button>
      ) : (
        <Button onClick={next} size={"lg"}>
          Selanjutnya
        </Button>
      )}
    </div>
  );
}
