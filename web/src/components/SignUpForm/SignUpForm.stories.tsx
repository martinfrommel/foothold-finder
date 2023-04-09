// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SignUpForm> = (args) => {
//   return <SignUpForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SignUpForm from './SignUpForm'

export const generated = () => {
  return <SignUpForm />
}

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>
