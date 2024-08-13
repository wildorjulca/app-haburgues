import Cartmain from '@/components/cart/Cart-main'
import Hero_main from '@/components/Hero_main'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        <div>
          <Hero_main />
          <div className='sm:hidden'>
          <Cartmain />
          </div>
        </div>
    </div>
  )
}

export default HomePage
