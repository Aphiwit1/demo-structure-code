import { FunctionComponent } from 'react'

interface DotsMenuPropType {
  text: string
  Icon?: FunctionComponent
  onClick: () => void
}

const DotsMenuTitle = ({ text, Icon, onClick }: DotsMenuPropType) => (
    <div
      onClick={onClick}
      className='flex justify-between w-full cursor-pointer hover:bg-neutral-border hover:bg-opacity-40 '
    >
      {text}
      {Icon && <Icon />}
    </div>
  )
export default DotsMenuTitle
