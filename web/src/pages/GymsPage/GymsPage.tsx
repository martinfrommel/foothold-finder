import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GymsPage = () => {
  return (
    <>
      <MetaTags title="Gyms" description="Gyms page" />

      <h1>GymsPage</h1>
      <p>
        Find me in <code>./web/src/pages/GymsPage/GymsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>gyms</code>, link to me with `
        <Link to={routes.gyms()}>Gyms</Link>`
      </p>
    </>
  )
}

export default GymsPage
