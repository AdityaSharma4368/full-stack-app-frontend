import { uID } from "@/lib/base";
import React, { FC } from "react";
import { NavProps } from "../layout.interface";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navList } from "@/lib/mock-data";
import { LogOut } from "lucide-react";

const Nav: FC<NavProps> = ({ links, isCollapsed }) => {
  const path = usePathname();

  return (
    // <TooltipProvider>
    //   <nav className="flex flex-col items-center gap-2 px-2 sm:py-5">
    //     {navList.map((nav) => (
    //       <Tooltip key={nav.key}>
    //         <TooltipTrigger>
    //           <Link
    //             className={cn(
    //               buttonVariants({
    //                 variant: path === nav.href ? "default" : "ghost",
    //                 size: "icon",
    //               }),
    //               "h-9 w-9",
    //               path === nav.href &&
    //                 "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
    //             )}
    //             href={nav.href}
    //           >
    //             <nav.icon className="h-4 w-4" />
    //             <span className="sr-only">{nav.label}</span>
    //           </Link>
    //         </TooltipTrigger>
    //         <TooltipContent side="right">{nav.label}</TooltipContent>
    //       </Tooltip>
    //     ))}
    //   </nav>
    //   <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    //     {/* {actions.map((action) => ( */}
    //       <Tooltip key={uID()}>
    //         <TooltipTrigger asChild>
    //           <Button
    //             size={"icon"}
    //             variant="link"
    //             onClick={() => {}}
    //             className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
    //           >
    //             <LogOut className="h-5 w-5" />
    //             <span className="sr-only">Logout</span>
    //           </Button>
    //         </TooltipTrigger>
    //         <TooltipContent side="right">Logout</TooltipContent>
    //       </Tooltip>
    //     {/* ))} */}
    //   </nav>
    // </TooltipProvider>
    <div
      data-collapsed={isCollapsed}
      key={uID()}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-full"
    >
      <nav className="flex flex-col justify-between">
        <div className="grid gap-1 px-2 py- group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => {
            return (
              <React.Fragment key={link.key}>
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip key={index} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            buttonVariants({
                              variant: path === link.href ? "default" : "ghost",
                              size: "icon",
                            }),
                            "h-9 w-9",
                            path === link.href &&
                              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          )}
                        >
                          <link.icon
                            onClick={link?.action}
                            className="h-4 w-4"
                          />
                          <span className="sr-only">{link.label}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="flex items-center gap-4"
                      >
                        <span>{link.label}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <React.Fragment key={link.key}>
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant: path === link.href ? "default" : "ghost",
                          size: "sm",
                        }),
                        path === link.href &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "justify-start"
                      )}
                    >
                      <link.icon className="mr-2 h-4 w-4" />
                      <span onClick={link?.action}>{link.label}</span>
                    </Link>
                  </React.Fragment>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
export default Nav;
