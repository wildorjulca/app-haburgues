
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

import Link from 'next/link'

import { usePathname } from 'next/navigation'
export const Navbar = () => {
    const patthaname = usePathname()
    console.log(patthaname)
    return (
        <>

            <div className='flex items-center justify-between sm:justify-start gap-8'>
                <Button variant="outline" size="icon"
                    className='rounded-full'>
                    <IconLogo />
                </Button>
                <Link href={"/"} className={`hidden sm:block pb-3  ${patthaname === "/" ? "border-b-4  border-blue-950" : ""}`}>About</Link>
                <Link href={"/about"} className={`hidden sm:block pb-3 ${patthaname === "/about" ? "  border-b-4  border-blue-950" : ""}`}>Discovery Make</Link>
                <Button className='rounded-full bg-rose-50 text-red-500 sm:ml-auto '>
                    <Phone className="mr-2 h-4 w-4" />
                    Call me Back
                </Button>
                <a className='hidden sm:block' href="tel: 923778300">+01: 9237778300</a>
                <Button variant={"secondary"} className='hidden sm:block rounded-full '>😀</Button>
                {/* <Button variant="outline" size="icon">
                    <IconMenu />
                </Button> */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className='sm:hidden' variant="outline" size="icon">
                            <IconMenu />
                        </Button>
                    </SheetTrigger>
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
