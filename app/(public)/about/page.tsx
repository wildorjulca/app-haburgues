import Cartmain from '@/components/Cart-main'
import Hero_main from '@/components/Hero_main'
import IconMainHamburguer from '@/components/icons/icon-main-hamburger'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
    return (
        <div>
          <Hero_main />
          <Cartmain />

        </div>
    )
}

export default HomePage
