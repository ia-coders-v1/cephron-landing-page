import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Illustrative console panels with sample data, not product claims. No <h3>/<h4> here: the content gate treats those as card titles.

const tone = {
  rose: "bg-accent-rose/10 text-red-600",
  sky: "bg-sky-500/13 text-sky-700",
  saffron: "bg-accent-saffron/15 text-accent-saffron-text",
  emerald: "bg-accent-emerald/13 text-emerald-700",
  slate: "bg-slate-200 text-slate-600",
} as const;

type Tone = keyof typeof tone;

function Pill({ tone: t, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={cn("shrink-0 font-semibold px-2 py-0.5 rounded-full text-[11px] whitespace-nowrap", tone[t])}>
      {children}
    </span>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="w-full rounded-xl overflow-hidden border bg-white border-slate-200 shadow-xl shadow-slate-900/10 font-mono text-xs text-slate-600"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-slate-100 border-slate-200">
        <span className="w-3 h-3 rounded-full bg-accent-rose" />
        <span className="w-3 h-3 rounded-full bg-amber-500" />
        <span className="w-3 h-3 rounded-full bg-accent-emerald" />
        <span className="ml-3 text-slate-500 truncate">cephron — {title}</span>
        <span className="ml-auto shrink-0 text-[11px] text-slate-500">sample data</span>
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Row({ children, highlight }: { children: ReactNode; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 min-w-0 rounded-md px-3 py-2 border",
        highlight ? "border-accent-saffron/40 bg-accent-saffron/8" : "border-slate-200 bg-slate-50"
      )}
    >
      {children}
    </div>
  );
}

function Footnote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 pt-3 border-t border-slate-200 text-slate-500">
      <Check size={14} className="shrink-0 text-emerald-600" />
      <span className="min-w-0">{children}</span>
    </div>
  );
}

function Bar({ pct, t = "saffron" }: { pct: number; t?: "saffron" | "rose" }) {
  return (
    <div className="h-1.5 flex-1 min-w-0 rounded-full bg-slate-200 overflow-hidden">
      <div
        className={cn("h-full rounded-full", t === "rose" ? "bg-accent-rose" : "bg-accent-saffron")}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function CreateVisual() {
  const steps = ["Name", "Boot source", "Size", "Disks and networks", "Login", "Review", "Create"];
  const current = 2;
  return (
    <Panel title="new virtual machine">
      <div className="flex flex-col gap-1.5">
        {steps.map((s, i) => (
          <Row key={s} highlight={i === current}>
            <span
              className={cn(
                "w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[11px]",
                i < current
                  ? "bg-accent-emerald/20 text-emerald-700"
                  : i === current
                    ? "bg-accent-saffron/20 text-accent-saffron-text"
                    : "bg-slate-200 text-slate-500"
              )}
            >
              {i < current ? <Check size={12} /> : i + 1}
            </span>
            <span className={cn("flex-1 min-w-0 truncate", i === current ? "text-slate-900" : "text-slate-500")}>{s}</span>
            {i === current && <Pill tone="saffron">Now</Pill>}
          </Row>
        ))}
      </div>
      <div className="pt-3 border-t border-slate-200">
        <div className="flex items-center justify-between gap-3 mb-2 text-slate-500">
          <span>quota after this VM</span>
          <span className="text-slate-800">12 of 16 cores</span>
        </div>
        <Bar pct={75} />
      </div>
    </Panel>
  );
}

function RunVisual() {
  const vms: [string, string, Tone][] = [
    ["web-prod-01", "RUNNING", "emerald"],
    ["db-primary", "RUNNING", "emerald"],
    ["build-agent", "PAUSED", "sky"],
    ["ubuntu-test", "STOPPED", "slate"],
  ];
  return (
    <Panel title="virtual machines">
      <div className="flex flex-col gap-1.5">
        {vms.map(([name, state, t]) => (
          <Row key={name}>
            <span className="flex-1 min-w-0 truncate text-slate-800">{name}</span>
            <Pill tone={t}>{state}</Pill>
          </Row>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-200">
        {["Start", "Stop", "Pause", "Console"].map((a) => (
          <div key={a} className="rounded-md bg-slate-50 border border-slate-200 px-2 py-2 text-center text-slate-800">
            {a}
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ShareVisual() {
  const nodes: [string, string, number, "saffron" | "rose"][] = [
    ["retail", "8 cores · dedicated", 62, "saffron"],
    ["studio", "4 cores · shared 4x", 38, "saffron"],
    ["platform", "8 cores · dedicated", 91, "rose"],
  ];
  return (
    <Panel title="nodes">
      <div className="flex flex-col gap-1.5">
        {nodes.map(([name, spec, pct, t]) => (
          <Row key={name}>
            <span className="w-[68px] shrink-0 truncate text-slate-800">{name}</span>
            <span className="hidden sm:block w-[132px] shrink-0 truncate text-slate-500">{spec}</span>
            <Bar pct={pct} t={t} />
            <span className="w-8 shrink-0 text-right text-slate-500">{pct}%</span>
          </Row>
        ))}
      </div>
      <Footnote>Each node sees only its own VMs, disks and networks</Footnote>
    </Panel>
  );
}

function StayUpVisual() {
  const servers: [string, string, string, Tone][] = [
    ["server-1", "7 VMs", "ONLINE", "emerald"],
    ["server-2", "moving to server-1 and server-3", "MAINTENANCE", "sky"],
    ["server-3", "6 VMs", "ONLINE", "emerald"],
  ];
  return (
    <Panel title="cluster">
      <div className="flex flex-col gap-1.5">
        {servers.map(([name, detail, state, t]) => (
          <Row key={name} highlight={t === "sky"}>
            <span className="w-[68px] shrink-0 truncate text-slate-800">{name}</span>
            <span className="flex-1 min-w-0 truncate text-slate-500">{detail}</span>
            <Pill tone={t}>{state}</Pill>
          </Row>
        ))}
      </div>
      <Footnote>Live migration · VMs keep running</Footnote>
    </Panel>
  );
}

function StorageVisual() {
  const disks: [string, string, number][] = [
    ["web-prod-01", "40 GB · 9 GB used", 23],
    ["db-primary", "200 GB · 118 GB used", 59],
    ["win11-design", "120 GB · 36 GB used", 30],
  ];
  return (
    <Panel title="storage">
      <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-800">cluster capacity</span>
          <span className="text-slate-500">4.1 of 12 TB used</span>
        </div>
        <Bar pct={34} />
      </div>
      <div className="flex flex-col gap-1.5">
        {disks.map(([vm, size, pct]) => (
          <Row key={vm}>
            <span className="w-[96px] shrink-0 truncate text-slate-800">{vm}</span>
            <span className="hidden sm:block w-[148px] shrink-0 truncate text-slate-500">{size}</span>
            <Bar pct={pct} />
          </Row>
        ))}
      </div>
      <Footnote>Thin disks use space as data is written</Footnote>
    </Panel>
  );
}

function MoveVisual() {
  const files: [string, string][] = [
    ["web01.ova", "VMware"],
    ["fileserver.vhdx", "Hyper-V"],
    ["lab.qcow2", "Proxmox/KVM"],
  ];
  return (
    <Panel title="import and export">
      <div className="flex flex-col gap-1.5">
        {files.map(([file, from]) => (
          <Row key={file}>
            <span className="flex-1 min-w-0 truncate text-slate-800">{file}</span>
            <span className="hidden sm:block shrink-0 text-slate-500">{from}</span>
            <ArrowRight size={14} className="shrink-0 text-accent-saffron-text" />
            <Pill tone="emerald">IMPORTED</Pill>
          </Row>
        ))}
      </div>
      <Footnote>Export any VM&apos;s disk and settings, any time</Footnote>
    </Panel>
  );
}

function ObserveVisual() {
  const bars = [30, 42, 38, 55, 48, 62, 58, 71, 66, 52, 47, 60];
  const hw: [string, string, Tone][] = [
    ["server-1", "54 °C · 0 memory errors", "emerald"],
    ["server-2", "61 °C · 2 memory errors", "rose"],
  ];
  return (
    <Panel title="health">
      <div className="flex items-end gap-1 h-16 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-accent-saffron/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {hw.map(([name, detail, t]) => (
          <Row key={name} highlight={t === "rose"}>
            <span className="w-[68px] shrink-0 truncate text-slate-800">{name}</span>
            <span className="flex-1 min-w-0 truncate text-slate-500">{detail}</span>
            <Pill tone={t}>{t === "rose" ? "CHECK" : "OK"}</Pill>
          </Row>
        ))}
      </div>
      <Footnote>Every action recorded with who and when</Footnote>
    </Panel>
  );
}

function SecureVisual() {
  const checks: [string, string, Tone][] = [
    ["Password set at first sign-in", "ON", "emerald"],
    ["Lock after repeated wrong guesses", "ON", "emerald"],
    ["Nodes isolated from each other", "ON", "emerald"],
    ["Remote shell access", "REVIEW", "rose"],
  ];
  return (
    <Panel title="security">
      <div className="flex flex-col gap-1.5">
        {checks.map(([name, state, t]) => (
          <Row key={name} highlight={t === "rose"}>
            <span className={cn("flex-1 min-w-0 truncate", t === "rose" ? "text-slate-900" : "text-slate-500")}>{name}</span>
            <Pill tone={t}>{state}</Pill>
          </Row>
        ))}
      </div>
      <Footnote>Warns you when a risky option is left on</Footnote>
    </Panel>
  );
}

const visuals: Record<string, () => ReactNode> = {
  create: CreateVisual,
  run: RunVisual,
  share: ShareVisual,
  "stay-up": StayUpVisual,
  storage: StorageVisual,
  move: MoveVisual,
  observe: ObserveVisual,
  secure: SecureVisual,
};

export default function FeatureVisual({ id }: { id: string }) {
  const Visual = visuals[id];
  return Visual ? <Visual /> : null;
}
