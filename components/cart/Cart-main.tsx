import Image from 'next/image'
import React from 'react'
import cartBurguer from '../../public/images/cart-burger.png'
import { Clock5, CupSoda, CupSodaIcon, Flame, Minus, Plus } from 'lucide-react'
import CartHeader from './cart-header'
import { Badge } from "@/components/ui/badge"


import cutlet from '../../public/images/burguer/sm/cutlet.png'
import mayo from '../../public/images/burguer/sm/mayo (1).png'

import CartIngredient from './cart-ingredient'
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
      <button className='w-full bg-rose-50 rounded-2xl p-2'>
        <span className='text-rose-500'>+ Tomate Chechout</span>
        <Badge className='ml-2 bg-rose-600'>0.2 oz</Badge>
      </button>



      <div className='grid grid-cols-2 gap-5 mt-4'>
        <CartIngredient
          src={cutlet}
          alt='Cultet'
          title='Cutlet'
        />
        <CartIngredient
          src={mayo}
          alt='Cultet'
          title= "Mayo"
        />
      </div>

      <section className='mt-4'>
        <p className='text-center text-blue-700 text-4xl font-extrabold'>$12.65</p>
        <button className='w-full bg-blue-700 text-white  rounded-full h-[45px] mt-2 hover:bg-blue-500'>Chechout</button>
      </section>




    </>
  )
}

export default Cartmain
