import { SidebarItems } from "@/types/types";
import { LayoutDashboard, Settings, Calendar, Home } from "lucide-react";


export const sidebarItems: SidebarItems = [
    {
        title: "Home",
        href: "/",
        icon: Home
    },
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

export const userRoles = [
    "user",
    "admin",
]