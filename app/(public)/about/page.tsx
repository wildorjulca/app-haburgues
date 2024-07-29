import IconMainHamburguer from '@/components/icons/icon-main-hamburger'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <h1 className='text-gray-800 text-5xl font-medium'>Make Your Burquer</h1>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatem quisquam totam veritatis maiores eaque incidunt odit doloremque unde qui animi fuga dolore error dolorum rem ea doloribus at. Laborum!</p>
            <div className='relative flex justify-center items-center'>
                <Button className='w-32 h-32 rounded-full uppercase absolute text-xl'>mate Burguer</Button>
                <Image
                    src="/images/bg-burger.png"
                    alt='Burguer'
                    width={375}
                    height={520}
                    className='mx-auto:'
                />
            </div>

        </div>
    )
}

export default HomePage
