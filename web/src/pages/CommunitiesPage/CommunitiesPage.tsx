import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CommunitiesPage = () => {
  return (
    <>
      <MetaTags title="Communities" description="Communities page" />

      <h1>CommunitiesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CommunitiesPage/CommunitiesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>communities</code>, link to me with `
        <Link to={routes.communities()}>Communities</Link>`
      </p>
    </>
  )
}

export default CommunitiesPage
