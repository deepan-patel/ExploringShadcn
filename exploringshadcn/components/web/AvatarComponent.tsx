
"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, User, LogOut } from "lucide-react";

export default function AvatarComponent() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    <span className="sr-only">Avatar Menu</span>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}