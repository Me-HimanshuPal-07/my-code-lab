import { cn } from '../../lib/utils'

const Input = ({ className, type = 'text', ...props }) => (
  <input
    className={cn(
      'ui-input flex h-11 w-full rounded-md border border-[#cbd6cb] bg-[#fffefb] px-3.5 text-sm text-[#17211f] outline-none transition focus:border-[#387250] focus:ring-2 focus:ring-[#387250]/15 disabled:cursor-wait disabled:opacity-70 read-only:bg-[#edf2ed] read-only:text-[#68736d]',
      type === 'file' && 'h-auto p-2.5',
      className,
    )}
    type={type}
    {...props}
  />
)

export { Input }
