import type { ComponentMeta } from '@storybook/react'

import GymsPage from './GymsPage'

export const generated = () => {
  return <GymsPage />
}

export default {
  title: 'Pages/GymsPage',
  component: GymsPage,
} as ComponentMeta<typeof GymsPage>
