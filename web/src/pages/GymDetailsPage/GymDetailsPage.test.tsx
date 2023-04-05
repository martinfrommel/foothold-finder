import { render } from '@redwoodjs/testing/web'

import GymDetailsPage from './GymDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GymDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GymDetailsPage />)
    }).not.toThrow()
  })
})
