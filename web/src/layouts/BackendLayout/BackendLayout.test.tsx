import { render } from '@redwoodjs/testing/web'

import BackendLayout from './BackendLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BackendLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BackendLayout />)
    }).not.toThrow()
  })
})
