import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GymDetailsPage = () => {
  return (
    <>
      <MetaTags title="GymDetails" description="GymDetails page" />

      <h1>GymDetailsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GymDetailsPage/GymDetailsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>gymDetails</code>, link to me with `
        <Link to={routes.gymDetails()}>GymDetails</Link>`
      </p>
    </>
  )
}

export default GymDetailsPage
