import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ButtonNavigationFormProps {
  prev: () => void;
  next: () => Promise<void>;
  currentStep: number;
  isSubmitting: boolean;
  isCheckingNrp: boolean;
  isDisabled?: boolean;
}

export default function ButtonNavigationForm({
  prev,
  next,
  currentStep,
  isSubmitting,
  isCheckingNrp,
  isDisabled = false,
}: ButtonNavigationFormProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        type="button"
        onClick={prev}
        disabled={currentStep === 1 || isSubmitting || isCheckingNrp}
        variant={"outline"}
        size={"lg"}
      >
        Sebelumnya
      </Button>

      <Button
        type="button"
        onClick={next}
        size={"lg"}
        disabled={isSubmitting || isCheckingNrp || isDisabled}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Mendaftar...
          </span>
        ) : isCheckingNrp ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Mengecek...
          </span>
        ) : currentStep === 5 ? (
          "Daftar ENT"
        ) : (
          "Selanjutnya"
        )}
      </Button>
    </div>
  );
}
