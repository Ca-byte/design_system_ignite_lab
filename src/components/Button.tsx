import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'


export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}

export function Button({ children, asChild}:ButtonProps ){
  const Comp = asChild ? Slot : 'button' ;
  return(
    <Comp className={clsx(
  'py-4 px-3 bg-grass-800 font-semibold rounded text-black text-sm w-full hover:bg-grass-500 transition-colors focus:outline outline-4 outline-gray-500',
      
    )}>
      {children}
    </Comp>
  )
}