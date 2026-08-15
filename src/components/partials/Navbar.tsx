import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./form/ContactForm";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're on the homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="px-6 sticky top-6 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-[#134679] to-[#226DB8] px-8 py-4 shadow-lg">
          {/* Logo */}
          <Link to={"/"}>
            <img src={"/ent.svg"} alt="ent.svg" width={80} height={37} />
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('home')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('division')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Division
              </button>
              <button
                onClick={() => handleNavClick('member')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Team
              </button>
            </div>

            {/* Desktop CTA Button */}
            {/* <Button className="hidden md:block rounded-full bg-white text-blue-900 hover:bg-gray-100 px-6 py-2 font-medium" asChild>
                        <Link to={'/report'}>Pengajuan Liputan</Link>
                    </Button> */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="hidden md:block rounded-full bg-white text-blue-900 hover:bg-gray-100 px-6 py-2 font-medium">
                  Pengajuan Liputan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Pengajuan Liputan</DialogTitle>
                  <DialogDescription>
                    Please fill these fields below
                  </DialogDescription>
                </DialogHeader>
                <ContactForm onSuccess={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute right-6 left-6 mt-4 rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col">
              <button
                onClick={() => handleNavClick('home')}
                className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('division')}
                className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 w-full text-left"
              >
                Division
              </button>
              <button
                onClick={() => handleNavClick('member')}
                className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 w-full text-left"
              >
                Team
              </button>
              <div className="p-4">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-[#134679] to-[#226DB8] text-white hover:opacity-90 py-3 font-medium"
                  >
                    <Button>Pengajuan Liputan</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Pengajuan Liputan</DialogTitle>
                      <DialogDescription>
                        Please fill these fields below
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm onSuccess={() => setOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
