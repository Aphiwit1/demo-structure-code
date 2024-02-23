import { twMerge } from 'tailwind-merge'
import { ButtonInterfaceProps } from './interface'

const PrimaryButton = ({
  type,
  className,
  children,
  isError,
  disabled,
  ...props
}: ButtonInterfaceProps) => {
  const bgColor = disabled ? 'bg-gray-300' : isError ? 'bg-red' : 'bg-blue-600'
  return (
    <button
      type={type}
      className={twMerge(
        `
        h-[32px]
        py-1 px-5
        text-sm text-white
        rounded-[5px] 
        border-none outline-none
          hover:outline-none hover:border-none
          focus:outline-none focus:border-none
          active:outline-none active:border-none
        disabled:cursor-not-allowed disabled:opacity-40
         `,
        bgColor,
        className
      )}
      disabled={disabled}
      {...props}
    >
      <div className='select-none'>{children}</div>
    </button>
  )
}

export default PrimaryButton
