import Image from 'next/image'
import React from 'react'
import cartBurguer from '../../public/images/cart-burger.png'
import { Clock5, CupSoda, CupSodaIcon, Flame } from 'lucide-react'
import CartHeader from './cart-header'

const Cartmain = () => {
  return (
    <>
      <div>
        <Image
          alt='Burguer'
          src={cartBurguer}
          width={375}
          height={520}
          className='mx-auto' />
      </div>
      <section className='flex justify-between'>
        <CartHeader
          text={"7 min"}
          icon={Clock5}
          className="stroke-purple-700 bg-purple-700 rounded-full" />

        <CartHeader
          text={"20 oz"}
          icon={CupSodaIcon}
          className="stroke-orange-500 bg-orange-500 rounded-full" />

        <CartHeader
          text={"249 kcal"}
          icon={Flame}
          className="stroke-red-500 bg-red-500 rounded-full" />

      </section>
    </>
  )
}

export default Cartmain
