import { render } from '@redwoodjs/testing/web'

import GymCard from './GymCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GymCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GymCard />)
    }).not.toThrow()
  })
})
