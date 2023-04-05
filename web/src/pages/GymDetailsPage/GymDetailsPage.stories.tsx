import type { ComponentMeta } from '@storybook/react'

import GymDetailsPage from './GymDetailsPage'

export const generated = () => {
  return <GymDetailsPage />
}

export default {
  title: 'Pages/GymDetailsPage',
  component: GymDetailsPage,
} as ComponentMeta<typeof GymDetailsPage>
