import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CommunityDetailsPage = () => {
  return (
    <>
      <MetaTags title="CommunityDetails" description="CommunityDetails page" />

      <h1>CommunityDetailsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/CommunityDetailsPage/CommunityDetailsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>communityDetails</code>, link to me with
        `<Link to={routes.communityDetails()}>CommunityDetails</Link>`
      </p>
    </>
  )
}

export default CommunityDetailsPage
