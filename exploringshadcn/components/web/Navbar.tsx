import { ThemeToggle } from "../theme/ThemeToggle";

import Link from "next/link";
import AvatarComponent from "./AvatarComponent";
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between p-4 items-center">
            <SidebarTrigger />
            <div className="flex flex-row items-center gap-4">
                <Link href="/dashboard">Dashboard</Link>
                <ThemeToggle />
                <AvatarComponent />
            </div>
        </nav>
    );
}