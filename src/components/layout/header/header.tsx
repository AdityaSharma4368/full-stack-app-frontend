import {
  Bell,
  ListCollapse,
  NotebookIcon,
  Phone,
  Search,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HiOutlineKey,
  HiOutlineMagnifyingGlass,
  HiOutlinePower,
  HiOutlineUser,
} from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { TbListDetails } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const HeaderPage = () => {
  // border-2 border-rose-200<ListCollapse />
  const profileMenu = [
    {
      label: "Profile",
      icon: <User className="h-5 w-5" />,
      href: "/",
      key: "key1",
    },
    {
      label: "About",
      icon: <ListCollapse className="h-5 w-5" />,
      href: "/",
      key: "key2",
    },
    {
      label: "Contact",
      icon: <Phone className="h-5 w-5" />,
      href: "/",
      key: "key3",
    },
  ];

  return (
    <header className="border bg-white shadow-md rounded-lg h-[7vh] w-full flex justify-between items-center p-6">
      <div className="relative w-96">
        <SearchBar />
      </div>
      <div className="rounded-full flex gap-4 items-center justify-end ">
        <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2">
          <CiSettings size={16} color={"gray"} className="" />
        </div>
        <div className="bg-[#EEF2F6] cursor-pointer rounded-full p-2">
          <IoMdNotificationsOutline size={16} color={"gray"} className="" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer bg-[#EEF2F6] rounded-full pt-1.5 pb-1.5 pl-3 pr-3 flex gap-2 items-center justify-between text-sm text-gray-500 font-semibold">
              <Avatar className="h-5 w-5 ">
                <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQFXVXlqZPmn7A/profile-displayphoto-shrink_400_400/0/1703484376683?e=1720051200&v=beta&t=AUh9zqsTTbXWI-fOkYr5ndGCmhRcQgLzuVGHhyFhjKk" />
              </Avatar>
              <span className="tracking-wide">Aditya Sharma</span>
              <MdKeyboardArrowDown size={16} color={"gray"} className="" />
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderPage;

const SearchBar = () => {
  return (
    <>
      <Search className="absolute text-gray-500 left-2.5 top-2.5 h-5 w-5" />
      <Input
        type="search"
        placeholder={"Search..."}
        className={cn(
          "w-full focus:outline-none bg-[#EEF2F6] rounded-full pl-9"
        )}
      />
    </>
  );
};
