import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero_main = () => {
  return (
    <div className='mt-4'>
          <h1 className='text-gray-800 text-5xl font-medium sm:flex sm:w-1/2 sm:w-1/3'>Make Your Burquer</h1>
            <p className='text-gray-800 mt-2 sm:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatem quisquam totam veritatis maiores eaque incidunt odit doloremque unde qui animi fuga dolore error dolorum rem ea doloribus at. Laborum!</p>
            <div className='relative flex justify-center items-center'>
                <Button className='w-32 h-32 rounded-full uppercase absolute text-xl'>mate Burguer</Button>
                <Image
                    src="/images/bg-burger.png"
                    alt='Burguer'
                    width={375}
                    height={520}
                    className='mx-auto'
                />
            </div>
    </div>
  )
}

export default Hero_main
