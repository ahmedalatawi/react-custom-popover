import React, { useState, useRef, useEffect } from 'react'
import { PopoverProps } from './types'

import './styles.scss'

function Popover({ children, content, placement }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  const popoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const togglePopover = () => {
    setIsOpen(!isOpen)
  }

  console.log(placement)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
