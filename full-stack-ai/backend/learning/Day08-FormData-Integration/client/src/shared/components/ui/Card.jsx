import { cn } from '../../lib/utils'

const Card = ({ className, ...props }) => <div className={cn('rounded-lg border border-black/10 bg-[#fffdf7]/95', className)} {...props} />

export { Card }
