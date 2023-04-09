// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof BackButton> = (args) => {
//   return <BackButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import BackButton from './BackButton'

export const generated = () => {
  return <BackButton />
}

export default {
  title: 'Components/BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>
