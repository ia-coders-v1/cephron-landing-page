import Link from "next/link";
import { Mail } from "lucide-react";
import Wordmark from "./Wordmark";
import { CONTACT_EMAIL } from "@/lib/site";
import { featureSections } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2">
            <div className="mb-4">
              <Wordmark />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-muted-foreground max-w-[260px]">
              Your own private cloud, run from one browser tab.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail size={13} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[1.5px] mb-4 text-muted-soft">Capabilities</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5">
              {featureSections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="inline-block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-soft">© {new Date().getFullYear()} Cephron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
