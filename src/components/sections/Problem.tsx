import { Receipt, Terminal, Lock } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { problems } from "@/lib/content";

const icons = [Receipt, Terminal, Lock];

export default function Problem() {
  return (
    <section id="problem" className="bg-background pt-[77px] pb-16 sm:pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionLabel>Why a private cloud</SectionLabel>
        <h2 className="font-bold text-center mb-16 text-[clamp(28px,3.5vw,40px)] tracking-[-1.5px] text-primary">
          Your servers can be your cloud,
          <br />
          <span className="text-accent-saffron-text">without the public-cloud bill.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ title, body }, i) => {
            const Icon = icons[i];
            return (
              <div key={title} className="rounded-xl p-8 flex flex-col gap-4 card-hover bg-surface-tonal">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-saffron/20">
                  <Icon size={20} className="text-accent-saffron-text" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg tracking-[-0.3px] text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-[15px]">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
