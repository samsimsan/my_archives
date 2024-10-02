"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"


const ProfileMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-slate-700/45 px-4 py-2 rounded-full cursor-pointer">
                    Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-4">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        First
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Second
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Third
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileMenu