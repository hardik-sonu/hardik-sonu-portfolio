import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-[#76B900] text-white hover:bg-[#6AA300] hover:-translate-y-0.5 shadow-lg hover:shadow-xl",
    secondary:
      "border border-neutral-300 bg-white text-neutral-900 hover:border-[#76B900] hover:text-[#76B900] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyle, variants[variant], className)}
    >
      {children}
    </Link>
  );
}