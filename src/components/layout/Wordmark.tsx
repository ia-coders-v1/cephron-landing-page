import Image from "next/image";
import { cn } from "@/lib/utils";

// Wordmark logo; source files live in /brand.
export default function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Cephron"
      width={128}
      height={32}
      unoptimized
      className={cn("block h-8 w-auto", className)}
    />
  );
}
