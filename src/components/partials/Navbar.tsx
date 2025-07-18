"use client"

import { useState } from "react";
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <nav className="px-6 sticky top-6 z-50">
            <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-[#134679] to-[#226DB8] px-8 py-4 shadow-lg">
                {/* Logo */}
                <Link to={'/'}>
                    <img src={'/ent.svg'} alt="ent.svg" width={80} height={37} />
                </Link>

                <div className="flex items-center space-x-8">
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">
                        About
                    </Link>
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">
                        Division
                    </Link>
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">
                        Team
                    </Link>
                    <Link to="#" className="text-white hover:text-blue-200 transition-colors">
                        Home
                    </Link>
                    </div>

                    {/* Desktop CTA Button */}
                    <Button className="hidden md:block rounded-full bg-white text-blue-900 hover:bg-gray-100 px-6 py-2 font-medium" asChild>
                    <Link to={'/report'}>Pengajuan Liputan</Link>
                    </Button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                >
                {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute right-6 left-6 mt-4 rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
                <div className="flex flex-col">
                    <Link to="#" className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                    About
                    </Link>
                    <Link to="#" className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                    Division
                    </Link>
                    <Link to="#" className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                    Team
                    </Link>
                    <Link to="#" className="px-6 py-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100">
                    Home
                    </Link>
                    <div className="p-4">
                    <Button className="w-full rounded-full bg-gradient-to-r from-[#134679] to-[#226DB8] text-white hover:opacity-90 py-3 font-medium">
                        <Link to={'/report'}>Pengajuan Liputan</Link>
                    </Button>
                    </div>
                </div>
                </div>
            )}
            </div>
      </nav>
    )
}