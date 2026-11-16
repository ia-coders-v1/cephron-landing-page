import Image from "next/image";
import { cn } from "@/lib/utils";

// Logo lockup (symbol + wordmark); source files live in /brand.
export default function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Cephron"
      width={121}
      height={32}
      unoptimized
      className={cn("block h-8 w-auto", className)}
    />
  );
}
