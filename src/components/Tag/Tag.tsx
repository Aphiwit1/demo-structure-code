import { StatusEnum } from '@enums/StatusEnum'
import { ReactNode } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

export type TagStyle = StatusEnum.NORMAL | StatusEnum.WARNING | StatusEnum.ALARM

export const mappedStyle = (style: TagStyle | undefined) => {
  switch (style) {
    case StatusEnum.NORMAL:
      return {
        bgColor: 'bg-green-200',
        textColor: 'text-green-500',
        dotColor: 'bg-green-500',
      }
    case StatusEnum.WARNING:
      return {
        bgColor: 'bg-yellow-200',
        textColor: 'text-yellow-500',
        dotColor: 'bg-yellow-500',
      }
    case StatusEnum.ALARM:
      return {
        bgColor: 'bg-red-200',
        textColor: 'text-red-500',
        dotColor: 'bg-red-500',
      }
    default:
      // Primary outlined
      return {
        bgColor: 'border border-primary',
        textColor: 'text-primary',
        dotColor: 'bg-primary',
      }
  }
}
const Tag = ({
  tagStyle,
  children,
  className,
  isShowPrefixDot,
}: {
  tagStyle: TagStyle | undefined
  children: ReactNode | string
  className?: string
  isShowPrefixDot?: boolean
}) => {
  const style = mappedStyle(tagStyle)
  return (
    <div
      className={twMerge(
        'flex space-x-[4px] justify-center items-center px-[10px] h-[24px] min-w-[48px] w-fit  rounded-[10px] text-[10px]',
        style.bgColor,
        style.textColor,
        className
      )}
    >
      {isShowPrefixDot && (
        <div
          className={twJoin('h-[10px] w-[10px] rounded-full', style.dotColor)}
        />
      )}
      <div className='flex items-center justify-center w-fit whitespace-nowrap'>
        {children}
      </div>
    </div>
  )
}

export default Tag
