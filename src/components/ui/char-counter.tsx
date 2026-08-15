import { cn } from "@/lib/utils";

interface CharCounterProps {
  current?: number;
  max: number;
  className?: string;
}

export function CharCounter({ current = 0, max, className }: CharCounterProps) {
  const isOver = current > max;
  return (
    <span
      className={cn(
        "text-xs text-right whitespace-nowrap transition-colors select-none",
        isOver ? "text-red-500 font-semibold" : "text-gray-400",
        className
      )}
    >
      {current} / {max}
    </span>
  );
}
