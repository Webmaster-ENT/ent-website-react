import { cn } from "@/lib/utils";
import { steps } from "@/types/form";
import { Check } from "lucide-react";

interface StepIndicatorFormProps {
  currentStep: number;
  goToStep: (value: number) => void;
}

export default function StepIndicatorForm({
  currentStep,
  goToStep,
}: StepIndicatorFormProps) {
  return (
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
                      : "border-muted-foreground/30 bg-background text-muted-foreground hover:border-primary"
                )}
              >
                {currentStep > step.id ? <Check className="size-5" /> : step.id}
              </button>
              <div className="mt-2 text-center">
                <div
                  className={cn(
                    "text-sm font-medium",
                    currentStep === step.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </div>
                <div className="text-xs text-muted-foreground hidden lg:block">
                  {step.description}
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 lg:w-16 h-0.5 mx-2 lg:mx-4 mt-[-2rem]",
                  currentStep > step.id
                    ? "bg-green-500"
                    : "bg-muted-foreground/30"
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
                      : "border-muted-foreground/30 bg-background text-muted-foreground"
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step.id
                )}
              </button>
              {/* Vertical Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 h-8 mt-2",
                    currentStep > step.id
                      ? "bg-green-500"
                      : "bg-muted-foreground/30"
                  )}
                />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 pb-4">
              <div
                className={cn(
                  "text-sm font-medium",
                  currentStep === step.id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
