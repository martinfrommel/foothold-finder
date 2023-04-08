import { render } from '@redwoodjs/testing/web'

import DashboardNav from './DashboardNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardNav />)
    }).not.toThrow()
  })
})
