import type { ComponentMeta } from '@storybook/react'

import CommunityDetailsPage from './CommunityDetailsPage'

export const generated = () => {
  return <CommunityDetailsPage />
}

export default {
  title: 'Pages/CommunityDetailsPage',
  component: CommunityDetailsPage,
} as ComponentMeta<typeof CommunityDetailsPage>
