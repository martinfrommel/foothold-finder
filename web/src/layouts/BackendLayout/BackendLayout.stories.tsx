import type { ComponentMeta, ComponentStory } from '@storybook/react'

import BackendLayout from './BackendLayout'

export const generated: ComponentStory<typeof BackendLayout> = (args) => {
  return <BackendLayout {...args} />
}

export default {
  title: 'Layouts/BackendLayout',
  component: BackendLayout,
} as ComponentMeta<typeof BackendLayout>
