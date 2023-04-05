import type { ComponentMeta, ComponentStory } from '@storybook/react'

import FrontendLayout from './FrontendLayout'

export const generated: ComponentStory<typeof FrontendLayout> = (args) => {
  return <FrontendLayout {...args} />
}

export default {
  title: 'Layouts/FrontendLayout',
  component: FrontendLayout,
} as ComponentMeta<typeof FrontendLayout>
