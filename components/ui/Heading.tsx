import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  align = "left",
}: HeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}