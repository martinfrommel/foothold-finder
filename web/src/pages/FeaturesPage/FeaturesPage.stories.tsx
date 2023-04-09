import type { ComponentMeta } from '@storybook/react'

import FeaturesPage from './FeaturesPage'

export const generated = () => {
  return <FeaturesPage />
}

export default {
  title: 'Pages/FeaturesPage',
  component: FeaturesPage,
} as ComponentMeta<typeof FeaturesPage>
