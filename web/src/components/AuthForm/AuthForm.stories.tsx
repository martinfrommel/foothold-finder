// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AuthForm> = (args) => {
//   return <AuthForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AuthForm from './AuthForm'

export const generated = () => {
  return <AuthForm />
}

export default {
  title: 'Components/AuthForm',
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>
