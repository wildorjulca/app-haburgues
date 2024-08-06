import React from 'react'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Minus, Plus } from 'lucide-react'

interface IntefracePropsIngredients {
    src: string,
    alt: string
    title: string
}
const CartIngredient = ({src,alt, title}: IntefracePropsIngredients) => {
  return (
    <Card>
    <CardHeader className='flex items-center'>
      <CardTitle>{title}</CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
      <Image
        src={src}
        width={104}
        height={37}
        alt={alt} />
    </CardHeader>
    <CardContent>
      <h2 className='text-center'>{title}</h2>
    </CardContent>
    <CardFooter className='flex items-center justify-between'>
      <button className='bg-gray-100 rounded-full p-1 hover:bg-slate-700 hover:text-white '>
        <Plus  />
      </button>
      <span className='font-bold text-xl'>0</span>
      <button className='bg-gray-100 rounded-full p-1  hover:bg-slate-700 hover:text-white'>
      <Minus />
      </button>
    </CardFooter>
  </Card>

  )
}

export default CartIngredient