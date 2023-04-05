import { render } from '@redwoodjs/testing/web'

import ReviewForm from './ReviewForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReviewForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewForm />)
    }).not.toThrow()
  })
})
