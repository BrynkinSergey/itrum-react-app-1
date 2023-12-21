import { type FC, type SVGProps } from 'react'

export interface INavLink {
  id: string
  text: string
  Icon: FC<SVGProps<SVGElement>>
}
