import { render } from '@redwoodjs/testing/web'

import FeaturesPage from './FeaturesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeaturesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturesPage />)
    }).not.toThrow()
  })
})
