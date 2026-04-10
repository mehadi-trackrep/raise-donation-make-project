import { cn } from "@/lib/utils";
import { CATEGORY_COLORS } from "@/lib/constants";
import { ProjectCategory } from "@/types/project";

interface BadgeProps {
  category: ProjectCategory;
  label: string;
  className?: string;
}

export function Badge({ category, label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        CATEGORY_COLORS[category],
        className
      )}
    >
      {label}
    </span>
  );
}
