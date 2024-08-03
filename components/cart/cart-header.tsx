import { Clock5 } from "lucide-react"
import { ReactHTMLElement, ReactNode } from "react"

interface interfaceHeaderProps {
    text: string,
    icon: React.ElementType,
    className?: string 
}

const CartHeader = ({ text, icon: Icon, className }: interfaceHeaderProps) => {
    return (
        <article className='flex items-center gap-x-2'>
            <span className='grid place-content-center h-10 w-10 inline-block rounded-full '>
            <Icon className={` fill-white ${className}`}/>
            </span>
            <span className='font-bold'>{text}</span>
        </article>
    )
}

export default CartHeader
