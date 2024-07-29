
'use client'
import React from 'react'
import IconLogo from './icons/icon-logo'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import IconMenu from './icons/icon-menu'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export const Navbar = () => {
    return (
        <>

            <div className='flex items-center justify-between'>
                <Button variant="outline" size="icon"
                    className='rounded-full'>
                    <IconLogo />
                </Button>
                <Button className='rounded-full bg-rose-50 text-red-500 '>
                    <Phone className="mr-2 h-4 w-4" />
                    Call me Back
                </Button>
                {/* <Button variant="outline" size="icon">
                    <IconMenu />
                </Button> */}
                <Sheet>
                <SheetTrigger asChild><Button variant="outline" size="icon">
                    <IconMenu />
                </Button></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>


            
        </>
    )
}
