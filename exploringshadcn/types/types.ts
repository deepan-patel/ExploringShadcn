// defining types here
import { LucideIcon } from "lucide-react";


interface SidebarItem {
    title: string;
    href: string;
    icon: LucideIcon;
}

export type SidebarItems = SidebarItem[];
