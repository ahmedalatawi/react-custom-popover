import React from 'react'
import { PopoverProps } from './types'

import './styles.scss'

const Popover = ({ theme }: PopoverProps) => (
  <div data-testid="popover" className={`popover popover-${theme}`}>
    <h1 className="heading">I am the Popover component</h1>
    <h2>Made with love by Ahmed</h2>
  </div>
)

export default Popover
