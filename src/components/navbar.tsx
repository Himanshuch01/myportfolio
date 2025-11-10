import { Dock, DockIcon } from "@/components/magicui/dock";
import { Magnetic } from "@/components/magicui/magnetic";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background/80 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background/80"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-2 bg-background/80 backdrop-blur-xl border border-border/50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05),0_0_30px_rgba(59,130,246,0.1)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset,0_0_30px_rgba(59,130,246,0.15)] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Magnetic>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-11 sm:size-12 min-w-[44px] min-h-[44px] hover:bg-primary/10 transition-colors"
                    )}
                  >
                    <item.icon className="size-4 sm:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </Magnetic>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full mx-1" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Magnetic>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-11 sm:size-12 min-w-[44px] min-h-[44px] hover:bg-primary/10 transition-colors"
                      )}
                    >
                      <social.icon className="size-4 sm:size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </Magnetic>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2 mx-1" />
        <DockIcon>
          <Magnetic>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </Magnetic>
        </DockIcon>
      </Dock>
    </div>
  );
}
