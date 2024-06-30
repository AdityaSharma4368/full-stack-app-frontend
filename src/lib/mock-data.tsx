import { Bookmark, Calendar, Files, GalleryVertical, Handshake, Home, LayoutPanelLeft, List, Mail } from "lucide-react";
import { uID } from "./base";

export const navList = [
    { key: uID(), label: "Home", href: "/", icon: Home },
    {
      key: uID(),
      label: "Messages",
      href: "/messages",
      icon: Mail,
    },
    {
      key: uID(),
      href: "/tasks",
      icon: List,
      label: "Tasks",
    },
    {
      key: uID(),
      href: "/bookmarks",
      icon: Bookmark,
      label: "Bookmarks",
    },
    {
      key: uID(),
      href: "/friends",
      icon: Handshake,
      label: "Friends",
    },
    {
      key: uID(),
      href: "/calendar",
      icon: Calendar,
      label: "Calendar",
    },
    {
      key: uID(),
      href: "/documents",
      icon: Files,
      label: "Documents",
    },
    {
      key: uID(),
      href: "/my-work",
      icon: LayoutPanelLeft,
      label: "My Work",
    },
    {
      key: uID(),
      href: "/gallery",
      icon: GalleryVertical,
      label: "Gallery",
    },
  ];