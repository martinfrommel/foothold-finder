import { render } from '@redwoodjs/testing/web'

import CommunityCard from './CommunityCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommunityCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityCard />)
    }).not.toThrow()
  })
})
