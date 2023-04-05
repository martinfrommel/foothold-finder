import { render } from '@redwoodjs/testing/web'

import CommunityDetailsPage from './CommunityDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommunityDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityDetailsPage />)
    }).not.toThrow()
  })
})
