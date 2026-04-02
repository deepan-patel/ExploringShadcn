"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { usePathname } from "next/navigation"

export default function BreadcrumbComponent() {
    const pathname = usePathname()

    const pathSegments = pathname.split("/").filter((segment) => segment !== "")
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {pathSegments.map((segment, index) => (
                        <div key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                                    {segment}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
                        </div>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>

    )
}