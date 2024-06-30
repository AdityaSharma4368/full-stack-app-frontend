import { LucideIcon } from "lucide-react";

export interface NavProps {
    isCollapsed: boolean;
    links: {
      href: string;
      label?: string;
      icon: LucideIcon;
      key: string;
      action?: () => void;
    }[];
  }
  