import { cn } from '../../lib/utils'

const Alert = ({ className, ...props }) => <div className={cn('flex items-center gap-2 rounded-lg border border-[#b7d2be] bg-[#e7f0ea] px-4 py-3 text-sm font-bold text-[#245c3b]', className)} {...props} />

export { Alert }
