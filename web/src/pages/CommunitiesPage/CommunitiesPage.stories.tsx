import type { ComponentMeta } from '@storybook/react'

import CommunitiesPage from './CommunitiesPage'

export const generated = () => {
  return <CommunitiesPage />
}

export default {
  title: 'Pages/CommunitiesPage',
  component: CommunitiesPage,
} as ComponentMeta<typeof CommunitiesPage>
