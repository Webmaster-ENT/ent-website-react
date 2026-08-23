import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Terjadi Kesalahan";
  let message = "Maaf, terjadi kesalahan yang tidak terduga. Silakan coba muat ulang halaman.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Halaman Tidak Ditemukan";
      message = "Halaman yang Anda cari tidak ada atau telah dipindahkan.";
    } else {
      title = `Error ${error.status}`;
      message = error.statusText || message;
    }
  }

  // Detect Google Translate DOM conflict
  const isTranslateError =
    error instanceof Error &&
    error.message?.includes("removeChild");

  if (isTranslateError) {
    message =
      "Sepertinya fitur terjemahan otomatis pada browser Anda menyebabkan konflik. " +
      "Silakan nonaktifkan fitur Google Translate di browser, lalu muat ulang halaman.";
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground">{message}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Muat Ulang
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors cursor-pointer"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
