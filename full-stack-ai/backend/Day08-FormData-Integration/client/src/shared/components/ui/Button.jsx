import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'ui-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#387250] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[#245c3b] text-[#fffefb] hover:bg-[#19482d]',
        secondary: 'border border-[#cbd6cb] bg-transparent text-[#245c3b] hover:bg-[#e7f0ea]',
        icon: 'h-[52px] w-[52px] rounded-full border border-[#cbd6cb] bg-[#fffefb] p-0 text-[#245c3b] hover:border-[#387250] hover:bg-[#e7f0ea]',
        destructive: 'h-11 w-11 rounded-full border border-[#e0b9b2] bg-[#fff8f6] p-0 text-[#a34234] hover:border-[#a34234] hover:bg-[#fbe6e2]',
      },
      size: {
        default: 'px-4 py-3',
        icon: 'h-[52px] w-[52px] p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

const Button = ({ className, variant, size, type = 'button', ...props }) => (
  <button className={cn(buttonVariants({ variant, size }), className)} type={type} {...props} />
)

export { Button }
