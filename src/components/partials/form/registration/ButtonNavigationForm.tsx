import { Button } from "@/components/ui/button";
import useCheckNRP from "@/hooks/useCheckNRP";

interface ButtonNavigationFormProps {
  prev: () => void;
  next: () => Promise<void>;
  currentStep: number;
}

export default function ButtonNavigationForm({
  prev,
  next,
  currentStep,
}: ButtonNavigationFormProps) {
  const { isLoading } = useCheckNRP();
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        type="button"
        onClick={prev}
        disabled={currentStep === 1}
        variant={"outline"}
        size={"lg"}
      >
        Sebelumnya
      </Button>

      <Button type="button" onClick={next} size={"lg"} disabled={isLoading}>
        {currentStep === 5 ? "Daftar ENT" : "Selanjutnya"}
      </Button>
    </div>
  );
}
