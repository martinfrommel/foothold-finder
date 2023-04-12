import { Meta, Story } from '@storybook/react'
import AuthButton, { AuthButtonProps } from './AuthButton'

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
} as Meta

const Template: Story<AuthButtonProps> = (args) => <AuthButton {...args} />

export const NotAuthenticated = Template.bind({})
NotAuthenticated.args = {
  isAuthenticated: false,
}

export const Authenticated = Template.bind({})
Authenticated.args = {
  isAuthenticated: true,
}

