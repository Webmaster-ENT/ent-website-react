import { removeFromLocalStorage } from "@/lib/localStorage";
import { CheckCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function SuccessPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success("Berhasil Download");
      removeFromLocalStorage("nrpUser");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4 mx-auto pt-12 h-screen text-secondary bg-gradient-to-b from-[#19559d] to-[#2069c3] w-full">
      <CheckCircleIcon className="size-24 text-green-400 bg-green-100 rounded-full p-5" />
      <h1 className="font-bold text-5xl text-center">Thank You!</h1>
      <p className="text-center max-w-2xl">
        Your Data turn into document that can be downloaded. If your document
        does not start downloading,{" "}
        <span className="underline cursor-pointer text-blue-400">
          Click Here
        </span>{" "}
        to download manually
      </p>
    </div>
  );
}
