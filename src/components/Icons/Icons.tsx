/// <reference types="vite-plugin-svgr/client" />

import { FC, SVGProps } from 'react'
import { IconProps } from '@components/Icons/interface'

import Home from './icons/home.svg?react'

const Icon =
  (SvgComponent: FC<SVGProps<SVGSVGElement>>): React.FC<IconProps> =>
  ({ height = '20', width = '20', className = '', onClick }: IconProps) => {
    const svgProps = {
      height,
      width,
      className: `${className}`,
      onClick,
    }
    return <SvgComponent {...svgProps} />
  }

export const HomeIcon = Icon(Home)
