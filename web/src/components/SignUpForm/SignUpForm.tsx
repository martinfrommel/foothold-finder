import { Form, TextField, Submit, PasswordField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

interface SignUpFormProps {
  onSignUpSuccess?: () => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const { client } = useAuth()

  const onSubmit = async (data) => {
    // try {
    //   const response = await client.auth.signUp({
    //     email: data.email,
    //     password: data.password,
    //   })
    //   console.log('response: ', response)
    //   toast.success('Signed up successfully!')
    // } catch (error) {
    //   console.error('Error signing up:', error)
    //   if (!error.response?.ok) {
    //     const status = error.response?.status
    //     if (status === 422) {
    //       const { message } = await error.response.json()
    //       toast.error(`Error signing up: ${message}`)
    //     } else {
    //       toast.error('Error signing up, please try again.')
    //     }
    //   }
    // }
  }

  return (
    <div className="w-full max-w-xs">
      <Form
        onSubmit={onSubmit}
        className="mb-4 flex flex-col items-center justify-center space-y-3 rounded bg-neutral px-10 py-10 shadow-md"
      >
        <TextField
          name="email"
          className="input-bordered input"
          placeholder="Email"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2"
          errorStyle={{ color: 'red' }}
        />
        <PasswordField
          name="password"
          className="input-bordered input"
          placeholder="Password"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2"
          errorStyle={{ color: 'red' }}
        />
        <Submit className="btn-primary btn w-full">Sign Up</Submit>
      </Form>
    </div>
  )
}

export default SignUpForm
