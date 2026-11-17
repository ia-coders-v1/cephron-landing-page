import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";
import { benefits } from "@/lib/content";
import { cn } from "@/lib/utils";

const VMS = [
  { name: "web-prod-01", node: "retail", state: "RUNNING", cpu: "12%" },
  { name: "db-primary", node: "retail", state: "RUNNING", cpu: "41%" },
  { name: "win11-design", node: "studio", state: "RUNNING", cpu: "8%" },
  { name: "build-agent", node: "platform", state: "PAUSED", cpu: "0%" },
  { name: "ubuntu-test", node: "platform", state: "STOPPED", cpu: "-" },
];

const stateStyle: Record<string, string> = {
  RUNNING: "bg-accent-emerald/13 text-emerald-700",
  PAUSED: "bg-sky-500/13 text-sky-700",
  STOPPED: "bg-slate-200 text-slate-600",
};

// Illustrative sample data, not a product claim.
function VmWindow() {
  return (
    <div aria-hidden="true" className="w-full rounded-xl overflow-hidden border bg-white border-slate-200 shadow-xl shadow-slate-900/10">
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-slate-100 border-slate-200">
        <span className="w-3 h-3 rounded-full bg-accent-rose" />
        <span className="w-3 h-3 rounded-full bg-amber-500" />
        <span className="w-3 h-3 rounded-full bg-accent-emerald" />
        <div className="ml-3 flex items-center gap-2 text-slate-500 min-w-0">
          <Monitor size={12} className="shrink-0" />
          <span className="font-mono text-xs truncate">cephron — virtual machines</span>
        </div>
        <span className="ml-auto font-mono text-[11px] text-slate-500">sample data</span>
      </div>

      <div className="p-4 space-y-1.5 min-h-[260px] font-mono text-xs">
        {VMS.map((vm) => (
          <div key={vm.name} className="flex items-center gap-3 leading-relaxed rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="flex-1 min-w-0 truncate text-slate-800">{vm.name}</span>
            <span className="hidden sm:block w-[72px] shrink-0 truncate text-accent-saffron-text">{vm.node}</span>
            <span className={cn("shrink-0 font-semibold px-2 py-0.5 rounded-full text-[11px]", stateStyle[vm.state])}>
              {vm.state}
            </span>
            <span className="w-9 shrink-0 text-right text-slate-500">{vm.cpu}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-3 text-slate-500">
          {["Start", "Stop", "Pause", "Console"].map((a) => (
            <span key={a} className="rounded-md border border-slate-300 px-2.5 py-1 text-[11px]">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-background pt-28 sm:pt-40 pb-[77px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 font-semibold uppercase text-[11px] tracking-[1.5px] rounded-full px-3.5 py-1.5 bg-amber-50 border border-amber-300 text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-saffron animate-pulse shrink-0" />
                Private cloud for virtual machines
              </span>
            </div>

            <h1 className="font-bold leading-[1.05] text-[clamp(40px,5vw,72px)] tracking-[-2.5px] text-primary">
              Your own private cloud,
              <br />
              <span className="text-accent-saffron-text">run from one browser tab.</span>
            </h1>

            <p className="leading-relaxed text-body max-w-130 text-lg">
              Cephron turns your servers into a simple, shared platform for virtual machines. Create, run, share and protect VMs without the command line, and without paying for a public cloud.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="#cta"
                className="flex items-center gap-2 font-semibold text-sm h-11 px-6 rounded-md no-underline bg-primary hover:bg-primary-active text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
              >
                Request a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#create"
                className="flex items-center font-semibold text-sm h-11 px-6 rounded-md no-underline bg-transparent text-primary border border-primary transition-all duration-150 hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98]"
              >
                Explore capabilities
              </Link>
            </div>
          </div>

          {/* Right — 5 cols */}
          <div className="lg:col-span-5">
            <VmWindow />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-muted-soft">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-2">
              <p className="font-bold text-lg tracking-[-0.3px] text-primary">
                <strong>{b.title}</strong>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
