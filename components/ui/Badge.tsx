import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#76B900]/20 bg-[#76B900]/10 px-3 py-1 text-xs font-medium text-[#4E7D00]",
        className
      )}
    >
      {children}
    </span>
  );
}