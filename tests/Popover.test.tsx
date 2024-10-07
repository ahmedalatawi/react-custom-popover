import React from 'react'
import Popover from '../src/Popover'
import { PopoverProps } from '../src/types'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('Popover Component', () => {
  let props: PopoverProps

  beforeEach(() => {
    props = {
      theme: 'primary'
    }
  })

  const renderComponent = () => render(<Popover {...props} />)

  test('should have primary className with default props', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('popover')

    expect(component).toHaveClass('popover-primary')
  })

  test('should have secondary className with theme set as secondary', () => {
    props.theme = 'secondary'
    const { getByTestId } = renderComponent()

    const component = getByTestId('popover')

    expect(component).toHaveClass('popover-secondary')
  })
})
