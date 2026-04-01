import { SidebarItems } from "@/types/types";
import { LayoutDashboard, Settings, Calendar } from "lucide-react";


export const sidebarItems: SidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings
    },
    {
        title: "Calendar",
        href: "/calendar",
        icon: Calendar
    }
];