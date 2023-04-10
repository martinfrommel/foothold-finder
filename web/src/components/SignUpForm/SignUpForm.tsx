import { Form, TextField, Submit, PasswordField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

interface SignUpFormProps {
  onSignUpSuccess?: () => void
}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const { client, isAuthenticated } = useAuth()

  const handleErrors = (error) => {
    if (!error.response?.ok) {
      const status = error.response?.status
      const message =
        error.message || 'An error occurred. Please try again later.'

      switch (status) {
        case 422:
          toast.error(`Error signing up: ${message}`)
          break
        case 429:
          toast.error(
            'You have reached the maximum number of requests. Please wait a few minutes and try again.'
          )
          break
        default:
          toast.error(message)
          break
      }
    }
  }

  const signInWithProvider = async (provider) => {
    try {
      const response = await client.auth.signIn({ provider })

      if (response.error) {
        handleErrors(response.error)
      } else {
        toast.success(`Signed up successfully with ${provider}!`)
      }
    } catch (error) {
      console.error(`Error signing up with ${provider}:`, error)
      handleErrors(error)
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await client.auth.signUp({
        email: data.email,
        password: data.password,
      })

      if (response.error) {
        handleErrors(response.error)
      } else {
        console.log('response: ', response)
        toast.success('Signed up successfully!')
      }
    } catch (error) {
      console.error('Error signing up:', error)
      handleErrors(error)
    }
  }

  return (
    <div className="w-full max-w-xs">
      <div>{JSON.stringify({ isAuthenticated })}</div>
      <Form
        onSubmit={onSubmit}
        className="mb-4 flex flex-col items-center justify-center space-y-3 rounded bg-neutral px-10 py-10 shadow-md"
      >
        <TextField
          name="email"
          className="input-bordered input transition-all"
          placeholder="Email"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2 transition-all"
          errorStyle={{ color: 'red' }}
        />
        <PasswordField
          name="password"
          className="input-bordered input transition-all"
          placeholder="Password"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2 transition-all"
          errorStyle={{ color: 'red' }}
        />
        <Submit className="btn-primary btn w-full">Sign Up</Submit>
        <div className="mt-4 flex space-x-3">
          <button
            className="btn-primary btn"
            type="button"
            onClick={() => signInWithProvider('google')}
          >
            Sign Up with Google
          </button>
          <button
            className="btn-primary btn"
            type="button"
            onClick={() => signInWithProvider('github')}
          >
            Sign Up with GitHub
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
