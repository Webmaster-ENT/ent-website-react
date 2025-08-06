import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function AddressCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay the animation slightly to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={`w-full max-w-md mx-auto bg-white px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-5 rounded-2xl z-30 transition-all duration-700 ease-out ${
      isVisible
        ? 'lg:translate-y-0 lg:opacity-100'
        : 'lg:translate-y-8 lg:opacity-0'
    }`}>
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-blue-900">Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <div className="text-sm sm:text-base text-blue-900 leading-relaxed">
          Gedung Pasca Sarjana Politeknik Elektronika Negeri Surabaya, Lt. 1, Ruangan PS1011, Jl. Raya ITS, Keputih,
          Kec. Sukolilo, Surabaya, Jawa Timur 60111.
        </div>

        <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4 flex-wrap">
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-green-50" asChild>
            <Link target="_blank" to={'https://www.whatsapp.com'}>
                <img src={'/icons/whatsapp.svg'} alt="whatsapp.svg" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-blue-50" asChild>
            <Link target="_blank" to="https://www.linkedin.com/company/eepis-news-and-network-team/" aria-label="LinkedIn">
              <img src={'/icons/linkedin.svg'} alt="linkedin.svg" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-pink-50" asChild>
            <Link target="_blank" to="https://www.instagram.com/entcrews" aria-label="Instagram">
              <img src={'/icons/instagram.svg'} alt="instagram.svg" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-red-50" asChild>
            <Link target="_blank" to="https://www.youtube.com/@entcrews" aria-label="YouTube">
              <img src={'/icons/youtube.svg'} alt="youtube.svg" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-gray-100" asChild>
            <Link target="_blank" to="https://www.tiktok.com/@entcrews" aria-label="TikTok">
              <img src={'/icons/tiktok.svg'} alt="tiktok.svg" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}