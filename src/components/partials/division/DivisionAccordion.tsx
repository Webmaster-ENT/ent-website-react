import { cn } from "@/lib/utils"

interface AccordionProps {
    img: string
    icon: string
    title: string
    description: string
    color?: 'green' | 'blue' | 'pink' | 'yellow' | 'purple' | 'red' | 'orange' | 'cyan'
    isOpen: boolean
    onToggle: () => void
}

const colorMap: Record<string, string> = {
    green: '#C6FFA7',
    cyan: '#A7FFF5',
    pink: '#FFA7E5',
    yellow: '#FFFFA7',
    purple: '#B7A7FF',
    red: '#EE5252',
    orange: '#FDA889',
    blue: '#7D93ED'
} 

export default function DivisionAccordion({ img, icon, title, description, color = 'green', isOpen, onToggle }: AccordionProps) {
    return (
        <div className="w-sm md:w-md">
            <div
                className={cn(
                'relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer',
                isOpen ? 'max-h-[400px]' : 'max-h-[200px]'
                )}
                onClick={onToggle}
            >
                {/* Background image */}
                <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay */}
                <div className={cn('relative z-10 pt-10 flex flex-col gap-y-5', isOpen ? 'px-0' : 'px-10')}>
                    <div
                        style={{ backgroundColor: colorMap[color] }}
                        className={cn(
                        'size-10 rounded-md flex items-center justify-center',
                        isOpen && 'mx-10'
                        )}
                    >
                        <img src={icon} alt="icon" width={20} height={20} className="mx-auto h-auto" />
                    </div>

                    <div
                        style={{ backgroundColor: colorMap[color] }}
                        className={cn(
                        'transition-all duration-300 flex flex-col justify-start gap-2',
                        isOpen ? 'h-full p-10 rounded-md' : 'h-fit p-4 rounded-t-md'
                        )}
                    >
                        <div className="flex items-center justify-end">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-lg">{title}</span>
                        </div>
                        </div>

                        {isOpen && (
                        <p className="text-sm leading-6 mt-2 transition-all duration-300">
                            {description}
                        </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}