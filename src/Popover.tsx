import React, { useState, useRef } from 'react'
import { PopoverProps } from './types'
import useOnClickOutside from './hooks/useOnClickOutside'
import useOnEscape from './hooks/useOnEscape'

import './styles.scss'

function Popover({ children, content, placement }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  const popoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const togglePopover = () => {
    setIsOpen(!isOpen)
  }

  console.log(placement)

  useOnClickOutside(popoverRef, () => setIsOpen(false))
  useOnEscape(() => setIsOpen(false))

  return (
    <div className="popover-wrapper" ref={triggerRef}>
      <div className="popover-trigger" onClick={togglePopover}>
        {children}
      </div>
      {isOpen && (
        <div className={`popover ${placement}`} ref={popoverRef}>
          <div className="popover-content">{content}</div>
          <div className={`arrow ${placement}`} />
        </div>
      )}
    </div>
  )
}

export default Popover
