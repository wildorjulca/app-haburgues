import Image from 'next/image'
import React from 'react'
import cartBurguer from '../public/images/cart-burger.png'
import { Clock5 } from 'lucide-react'

const Cartmain = () => {
  return (
    <>
    <div>
      <Image 
      alt='Burguer'
      src={cartBurguer} 
      width={375}
      height={520}/>
    </div>
    <section>
        <article>
            <span className=' grid place-content-center h-8 w-8 inline-block  bg-purple-600'><Clock5 className='text-purple-700  fill-white' /></span>
        </article>

    </section>
    </>
  )
}

export default Cartmain
