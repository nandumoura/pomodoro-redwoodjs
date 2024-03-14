import { render } from '@redwoodjs/testing/web'

import PomoBtn from './PomoBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PomoBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PomoBtn />)
    }).not.toThrow()
  })
})
