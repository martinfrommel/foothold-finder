import { MetaTags } from '@redwoodjs/web'

import AuthForm from 'src/components/AuthForm/AuthForm'

const SignInPage = () => {
  return (
    <>
      <MetaTags title="SignIn" description="SignIn page" />

      <AuthForm mode="signin" />
    </>
  )
}

export default SignInPage
