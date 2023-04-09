import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FeaturesPage = () => {
  return (
    <>
      <MetaTags title="Features" description="Features page" />

      <h1>FeaturesPage</h1>
      <p>
        Find me in <code>./web/src/pages/FeaturesPage/FeaturesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>features</code>, link to me with `
        <Link to={routes.features()}>Features</Link>`
      </p>
    </>
  )
}

export default FeaturesPage
