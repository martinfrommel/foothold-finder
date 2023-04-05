// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ReviewForm> = (args) => {
//   return <ReviewForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ReviewForm from './ReviewForm'

export const generated = () => {
  return <ReviewForm />
}

export default {
  title: 'Components/ReviewForm',
  component: ReviewForm,
} as ComponentMeta<typeof ReviewForm>
