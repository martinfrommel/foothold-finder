// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AuthButton> = (args) => {
//   return <AuthButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AuthButton from './AuthButton'

export const generated = () => {
  return <AuthButton />
}

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
} as ComponentMeta<typeof AuthButton>
