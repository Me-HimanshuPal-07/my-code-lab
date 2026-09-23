import { cn } from '../../lib/utils'

const Badge = ({ className, children, ...props }) => (
  <span className={cn('inline-flex items-center gap-1.5 rounded-full border border-[#b7d2be] bg-[#e7f0ea] px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[#245c3b]', className)} {...props}>
    <span className="h-1.5 w-1.5 rounded-full bg-[#387250]" />
    {children}
  </span>
)

export { Badge }
