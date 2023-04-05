import { render } from '@redwoodjs/testing/web'

import CommunitiesPage from './CommunitiesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommunitiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunitiesPage />)
    }).not.toThrow()
  })
})
