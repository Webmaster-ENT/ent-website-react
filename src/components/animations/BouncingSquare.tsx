export type BouncingSquareProps = {
    isMobile: false | boolean
    isFlip: boolean
    size: 'sm' | 'md' | 'lg'
    className?: string
}

const convertToTailwind = (size: 'sm' | 'md' | 'lg') => {
    if(size === 'sm') {
        return 'size-8'
    } else if(size === 'md') {
        return 'size-12'
    }
    return 'size-16'
}

export default function BouncingSquares({ isMobile = false, size, className, isFlip } : BouncingSquareProps) {
    return (
        <div className={`absolute ${isMobile ? 'block lg:hidden' : 'hidden lg:block'} animate-pulse ${className ?? ''}`}>
            <div className="relative">
                <div className={`${convertToTailwind(size)} bg-[#134679]/90`}></div>
                <div className={`absolute ${isFlip ? '-bottom-4 -left-4' : '-bottom-4 -right-4'} -z-10 ${convertToTailwind(isMobile ? size : 'md')} bg-teal-400/90`}></div>
            </div>
      </div>
    )
}