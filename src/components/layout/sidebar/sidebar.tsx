"use client";
import { uID } from "@/lib/base";
import { navList } from "@/lib/mock-data";
import { GanttChart, LogOut, Settings } from "lucide-react";
import React from "react";
import { useLogout } from "../../../../context/hooks/useLogoutHook";
import Nav from "./sidebar-nav";

const SidebarDesktop = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true);
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  const bottomLinks = [
    {
      href: "/settings",
      icon: Settings,
      label: "Account Settings",
      key: uID(),
    },
    {
      href: "/login",
      icon: LogOut,
      label: "Log Out",
      key: uID(),
      action: handleLogout,
    },
  ];
  return (
    <aside
      className={`${
        isCollapsed ? "w-[80px]" : "w-[270px]"
      } max-w-xs hidden sm:block h-screen sticky overflow-hidden left-0 top-0 z-40 shadow-md bg-slate-50`}
    >
      {/* fixed inset-y-0 overflow-hidden */}
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
        <div className="mt-5 h-full flex flex-col justify-between">
          <div className="py-3">
            <Nav isCollapsed={isCollapsed} links={navList} />
          </div>

          <div className="mb-12">
            <Nav isCollapsed={isCollapsed} links={bottomLinks} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
