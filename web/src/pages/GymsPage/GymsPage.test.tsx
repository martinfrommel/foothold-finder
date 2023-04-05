import { render } from '@redwoodjs/testing/web'

import GymsPage from './GymsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GymsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GymsPage />)
    }).not.toThrow()
  })
})
