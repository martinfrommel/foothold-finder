// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DashboardNav> = (args) => {
//   return <DashboardNav {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DashboardNav from './DashboardNav'

export const generated = () => {
  return <DashboardNav />
}

export default {
  title: 'Components/DashboardNav',
  component: DashboardNav,
} as ComponentMeta<typeof DashboardNav>
