import { MetaTags } from '@redwoodjs/web'

import SignUpForm from 'src/components/SignUpForm/SignUpForm'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="SignUp" description="SignUp page" />

      <SignUpForm />
    </>
  )
}

export default SignUpPage
