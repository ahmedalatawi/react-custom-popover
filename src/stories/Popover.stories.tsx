import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Popover from '../Popover'
import { PopoverPlacements } from '../constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Popover',
  component: Popover,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    content: <div>This is the popover content!</div>,
    children: <span>Click Me</span>,
    placement: PopoverPlacements.TOP
  }
}
