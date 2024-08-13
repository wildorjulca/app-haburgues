import Image from 'next/image'
import React from 'react'
import imgFooter from '../public/images/burguer/Footer/payment.png'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='hidden  sm:flex gap-4'>
            <p>{year} @credencial wildor J.C</p>
            <p>Programer</p>
            <Image
                src={imgFooter}
                alt='footer'
                className='ml-auto'
            />
        </div>
    )
}

export default Footer