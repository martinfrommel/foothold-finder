// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GymCard> = (args) => {
//   return <GymCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GymCard from './GymCard'

export const generated = () => {
  return <GymCard />
}

export default {
  title: 'Components/GymCard',
  component: GymCard,
} as ComponentMeta<typeof GymCard>
