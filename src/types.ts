import { ReactNode } from 'react'
import { PopoverPlacement, PopoverTrigger } from './constants'

export interface PopoverProps {
  triggerType?: PopoverTrigger
  children: ReactNode
  content: ReactNode
  placement: PopoverPlacement

  //TODO: to be used later
  // defaultIsOpen?: boolean
  // isOpenControlled?: boolean
  // isOpen?: boolean
  // onClose?: () => void
  // target?: HTMLElement
  // onChangeOpen?: (isOpen: boolean) => void
}
