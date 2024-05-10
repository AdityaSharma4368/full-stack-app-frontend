"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Bookmark,
  Calendar,
  Files,
  GanttChart,
  Handshake,
  Home,
  LayoutPanelLeft,
  List,
  LogOut,
  LucideIcon,
  Mail,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SidebarButton } from "./sidebar-button";

const SidebarDesktop = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  return (
    <div
      className={`${
        isCollapsed ? "w-[80px]" : "w-[280px]"
      } max-w-xs h-screen left-0 top-0 z-40 shadow-md bg-slate-50`}
    >
      <div className="h-full px-3 py-4">
        <div
          className={`flex ${
            isCollapsed ? "justify-center rotate-180" : "justify-start"
          } items-center cursor-pointer ml-2`}
        >
          <GanttChart
            size={"42"}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          {!isCollapsed && (
            <h3 className="mx-3 text-xl font-bold">Manage Day</h3>
          )}
        </div>
        <div className="mt-5">
          <Nav
            isCollapsed={isCollapsed}
            links={[
              { label: "Home", href: "/", icon: Home },
              {
                label: "Messages",
                href: "/messages",
                icon: Mail,
              },
              {
                href: "/tasks",
                icon: List,
                label: "Tasks",
              },
              {
                href: "/bookmarks",
                icon: Bookmark,
                label: "Bookmarks",
              },
              {
                href: "/friends",
                icon: Handshake,
                label: "Friends",
              },
              {
                href: "/calendar",
                icon: Calendar,
                label: "Calendar",
              },
              {
                href: "/documents",
                icon: Files,
                label: "Documents",
              },
              {
                href: "/my-work",
                icon: LayoutPanelLeft,
                label: "My Work",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;

interface NavProps {
  isCollapsed: boolean;
  links: {
    href: string;
    label?: string;
    icon: LucideIcon;
  }[];
}

function Nav({ links, isCollapsed }: NavProps) {
  const path = usePathname();
  const bottomLinks = [
    {
      href: "/",
      icon: Settings,
      label: "Account Settings",
    },
    {
      href: "/my-work",
      icon: LogOut,
      label: "Log Out",
    },
  ];
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          return (
            <>
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
                        <link.icon className="h-4 w-4" />
                        <span className="sr-only">{link.label}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {link.label}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <>
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
                    {link.label}
                  </Link>
                </>
              )}
            </>
          );
        })}
        <div
          className={` ${
            isCollapsed ? "w-[80px]" : "w-[240px]"
          } absolute left-0  bottom-3 px-3 `}
        >
          {isCollapsed ? (
            <div className="">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={"/"}>
                      <SidebarButton
                        size="sm"
                        icon={Settings}
                        className="w-full"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    Account Settings
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <SidebarButton size="sm" icon={LogOut} className="w-full" />
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    Log Out
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ) : (
            <div className="">
              <Link href="/">
                <SidebarButton size="sm" icon={Settings} className="w-full">
                  Account Settings
                </SidebarButton>
              </Link>
              <Link href={"/login"}>
                <SidebarButton size="sm" icon={LogOut} className="w-full">
                  Log Out
                </SidebarButton>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
