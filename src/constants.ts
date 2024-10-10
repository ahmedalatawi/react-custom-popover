export enum PopoverTriggers {
  CLICK = 'click',
  HOVER = 'hover'
}

export enum PopoverPlacements {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right'
}

export type PopoverTrigger = keyof Record<PopoverTriggers, string>
export type PopoverPlacement = keyof Record<PopoverPlacements, string>
