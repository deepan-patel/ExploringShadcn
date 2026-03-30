import { ThemeToggle } from "../theme/ThemeToggle";

import Link from "next/link";
import AvatarComponent from "./AvatarComponent";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between p-4 items-center">
            <div>Collapable</div>
            <div className="flex flex-row items-center gap-4">
                <Link href="/dashboard">Dashboard</Link>
                <ThemeToggle />
                <AvatarComponent />
            </div>
        </nav>
    );
}