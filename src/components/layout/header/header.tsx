"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  GanttChart,
  ListCollapse,
  LogOut,
  Menu,
  Phone,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SearchBar } from "../../common/searchbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Button } from "../../ui/button";
import { navList } from "@/lib/mock-data";

const HeaderPage = () => {
  const profileMenu = [
    {
      label: "Profile",
      icon: <User className="h-4 w-4" />,
      href: "/",
      key: "key1",
    },
    {
      label: "About",
      icon: <ListCollapse className="h-4 w-4" />,
      href: "/",
      key: "key2",
    },
    {
      label: "Contact",
      icon: <Phone className="h-4 w-4" />,
      href: "/",
      key: "key3",
    },
  ];

  return (
    <header className="top-0 z-10 inset-x-0 flex h-14 justify-between items-center border-b bg-background p-2 sm:sticky sm:h-auto sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="sm:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs flex flex-col gap-10">
          <span className="flex h-2 w-full items-center justify-start">
            <GanttChart size={"25"} />
            <h3 className="mx-3 text-lg font-bold">Manage Day</h3>
          </span>
          <nav className="grid gap-6 font-medium">
            {navList.map((nav) => (
              <Link
                key={nav.key}
                href={nav.href}
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <nav.icon className="h-4 w-4" />
                {nav.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="relative flex-1 md:grow-0">
        <SearchBar />
      </div>

      <div className="rounded-full flex gap-4 items-center justify-end">
        <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2 hidden sm:block">
          <CiSettings size={16} color={"gray"} className="" />
        </div>
        <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2">
          <IoMdNotificationsOutline size={16} color={"gray"} className="" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <div className="hidden cursor-pointer bg-[#EEF2F6] rounded-full pt-1.5 pb-1.5 pl-3 pr-3 md:flex gap-2 items-center justify-between text-sm text-gray-500 font-semibold">
                <Avatar className="h-5 w-5 ">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQFXVXlqZPmn7A/profile-displayphoto-shrink_400_400/0/1703484376683?e=1720051200&v=beta&t=AUh9zqsTTbXWI-fOkYr5ndGCmhRcQgLzuVGHhyFhjKk" />
                </Avatar>
                <span className="tracking-wide">Aditya Sharma</span>
                <MdKeyboardArrowDown size={16} color={"gray"} className="" />
              </div>
              <div className="md:hidden">
                <Avatar className="h-7 w-7 ">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQFXVXlqZPmn7A/profile-displayphoto-shrink_400_400/0/1703484376683?e=1720051200&v=beta&t=AUh9zqsTTbXWI-fOkYr5ndGCmhRcQgLzuVGHhyFhjKk" />
                </Avatar>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {profileMenu.map((menu) => (
              <DropdownMenuItem key={menu.key}>
                <Link
                  href={menu.href}
                  className="inline-flex items-center gap-2"
                >
                  {menu.icon}
                  {menu.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="sm:hidden" />
            <DropdownMenuItem onClick={() => {}} className="sm:hidden">
              <span className="inline-flex w-full cursor-pointer items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}} className="sm:hidden">
              <span className="inline-flex w-full cursor-pointer items-center gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    // <header className="border bg-white top-0 z-20 flex h-14 justify-between items-center p-6">
    //   <Sheet>
    //     <SheetTrigger asChild>
    //       <Button size="icon" variant="ghost" className="sm:hidden">
    //         <Menu className="h-6 w-6" />
    //         <span className="sr-only">Toggle Menu</span>
    //       </Button>
    //     </SheetTrigger>
    //     <SheetContent side="left" className="sm:max-w-xs flex flex-col gap-10">
    //       <span className="flex h-2 w-full items-center justify-start">
    //         <GanttChart size={"25"} />
    //         <h3 className="mx-3 text-lg font-bold">Manage Day</h3>
    //       </span>
    //       <nav className="grid gap-6 font-medium">
    //         {navList.map((nav) => (
    //           <Link
    //             key={nav.key}
    //             href={nav.href}
    //             className="flex items-center gap-4 px-2.5 text-foreground"
    //           >
    //             <nav.icon className="h-4 w-4" />
    //             {nav.label}
    //           </Link>
    //         ))}
    //       </nav>
    //     </SheetContent>
    //   </Sheet>

    //   <div className="relative flex-1 md:grow-0">
    //     <SearchBar />
    //   </div>

    //   <div className="rounded-full flex gap-4 items-center justify-end">
    //     <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2">
    //       <CiSettings size={16} color={"gray"} className="" />
    //     </div>
    //     <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2">
    //       <IoMdNotificationsOutline size={16} color={"gray"} className="" />
    //     </div>
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <div className="cursor-pointer bg-[#EEF2F6] rounded-full pt-1.5 pb-1.5 pl-3 pr-3 flex gap-2 items-center justify-between text-sm text-gray-500 font-semibold">
    //           <Avatar className="h-5 w-5 ">
    //             <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQFXVXlqZPmn7A/profile-displayphoto-shrink_400_400/0/1703484376683?e=1720051200&v=beta&t=AUh9zqsTTbXWI-fOkYr5ndGCmhRcQgLzuVGHhyFhjKk" />
    //           </Avatar>
    //           <span className="tracking-wide">Aditya Sharma</span>
    //           <MdKeyboardArrowDown size={16} color={"gray"} className="" />
    //         </div>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="end">
    //         <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //         <DropdownMenuSeparator />
    //         {profileMenu.map((menu) => (
    //           <DropdownMenuItem key={menu.key}>
    //             <Link
    //               href={menu.href}
    //               className="inline-flex items-center gap-2"
    //             >
    //               {menu.icon}
    //               {menu.label}
    //             </Link>
    //           </DropdownMenuItem>
    //         ))}
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    // </header>
  );
};

export default HeaderPage;
