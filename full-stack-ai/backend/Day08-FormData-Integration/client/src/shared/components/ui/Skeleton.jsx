import { cn } from '../../lib/utils'

const Skeleton = ({ className, ...props }) => <div className={cn('animate-pulse rounded-md bg-[#dfe5df]', className)} {...props} />

export { Skeleton }
