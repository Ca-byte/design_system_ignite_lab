import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className: string;
}

export function Button({ children, asChild, className ,...props }:ButtonProps ){
  const Comp = asChild ? Slot : 'button' ;
  return(
    <Comp className={clsx(
  'py-3 px-4 bg-grass-800 font-semibold rounded text-black text-sm w-full hover:bg-grass-500 transition-colors focus:outline outline-4 outline-gray-500',className,
      
    )} {...props} >
      {children}
    </Comp>
  )
}