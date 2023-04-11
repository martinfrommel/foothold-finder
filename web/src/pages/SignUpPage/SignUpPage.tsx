import { MetaTags } from '@redwoodjs/web'

import AuthForm from 'src/components/AuthForm/AuthForm'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="SignUp" description="SignUp page" />
      <AuthForm mode="signup" />
    </>
  )
}

export default SignUpPage
