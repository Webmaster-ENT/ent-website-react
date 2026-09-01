import RegistrationForm from "@/components/partials/form/registration/RegistrationForm";
import { REGISTRATION_CONFIG } from "@/constants/config";
import RegistrationClosed from "@/components/partials/RegistrationClosed";

export default function RegistrationPage() {
  if (!REGISTRATION_CONFIG.isOpen) {
    return <RegistrationClosed />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <RegistrationForm />
    </div>
  );
}

