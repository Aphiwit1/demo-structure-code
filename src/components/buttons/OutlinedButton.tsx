import { twMerge } from 'tailwind-merge'
import { ButtonInterfaceProps } from './interface'

const OutlinedButton = ({
  type,
  className,
  children,
  ...props
}: ButtonInterfaceProps) => (
    <button
      type={type}
      className={twMerge(
        `
        h-[32px]
        py-1 px-5
        text-sm
        rounded-[5px]
        border-[2px] border-gray-300 outline-none 
          hover:outline-none hover:border-gray-300
          focus:outline-none focus:border-gray-300
          active:outline-none active:border-gray-300
        disabled:opacity-40`,
        className
      )}
      {...props}
    >
      <div className='select-none'>{children}</div>
    </button>
  )

export default OutlinedButton
