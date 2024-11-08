export const PopoverTriggers = {
  CLICK: 'click',
  HOVER: 'hover'
} as const

export const PopoverPlacements = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
} as const

export type PopoverTrigger = (typeof PopoverTriggers)[keyof typeof PopoverTriggers]
export type PopoverPlacement = (typeof PopoverPlacements)[keyof typeof PopoverPlacements]

// export type PopoverTriggerType = keyof typeof PopoverTriggers
// export type PopoverPlacementType = keyof typeof PopoverPlacements;
