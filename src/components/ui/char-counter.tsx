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
      translate="no"
      className={cn(
        "text-xs text-right whitespace-nowrap transition-colors select-none notranslate",
        isOver ? "text-red-500 font-semibold" : "text-gray-400",
        className
      )}
    >
      {`${current ?? 0} / ${max}`}
    </span>
  );
}
