// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EventCard> = (args) => {
//   return <EventCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EventCard from './EventCard'

export const generated = () => {
  return <EventCard />
}

export default {
  title: 'Components/EventCard',
  component: EventCard,
} as ComponentMeta<typeof EventCard>
