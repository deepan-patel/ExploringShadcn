"use client"

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

export default function EditUserForm() {
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-2">Edit User's Information</SheetTitle>
                <SheetDescription>Update the user's information.</SheetDescription>
            </SheetHeader>

        </SheetContent>
    )
}