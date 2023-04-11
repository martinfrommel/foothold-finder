// src/components/AuthForm/AuthForm.tsx
import {
  Form,
  TextField,
  Submit,
  PasswordField,
  EmailField,
  SearchField,
  DateField,
  Label,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

interface AuthFormProps {
  mode: 'signup' | 'signin'
  onAuthSuccess?: () => void
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onAuthSuccess }) => {
  const { client } = useAuth()

  const handleErrors = (error) => {
    const status = error.response?.status
    const message =
      error.message || 'An error occurred. Please try again later.'

    switch (status) {
      case 422:
        toast.error(
          `Error ${mode === 'signup' ? 'signing up' : 'signing in'}: ${message}`
        )
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

  const signInWithProvider = async (provider) => {
    try {
      const response = await client.auth.signIn({ provider })

      if (response.error) {
        handleErrors(response.error)
      } else {
        toast.success(
          `Signed ${
            mode === 'signup' ? 'up' : 'in'
          } successfully with ${provider}!`
        )
        onAuthSuccess?.()
      }
    } catch (error) {
      console.error(
        `Error signing ${mode === 'signup' ? 'up' : 'in'} with ${provider}:`,
        error
      )
      handleErrors(error)
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await (mode === 'signup'
        ? client.auth.signUp
        : client.auth.signIn)({
        email: data.email,
        password: data.password,
      })

      if (response.error) {
        handleErrors(response.error)
      } else {
        toast.success(`Signed ${mode === 'signup' ? 'up' : 'in'} successfully!`)
        onAuthSuccess?.()
      }
    } catch (error) {
      console.error(`Error signing ${mode === 'signup' ? 'up' : 'in'}:`, error)
      handleErrors(error)
    }
  }

  return (
    <div className="w-full max-w-md">
      {mode === 'signup' || mode === 'signin' ? (
        <h1 className="my-2 text-center text-xl font-bold">
          {mode === 'signup' ? 'Sign Up' : 'Sign In'}
        </h1>
      ) : null}

      <Form
        onSubmit={onSubmit}
        className="mx-2 flex flex-col items-center justify-center space-y-3 rounded bg-neutral px-3 py-10 shadow-md"
      >
        {mode === 'signup' && (
          <>
            <TextField
              name="firstname"
              className="input-bordered input transition-all"
              placeholder="First Name"
              validation={{ required: true }}
              errorClassName="input-bordered input border-red-500 border-2 transition-all"
            />
            <TextField
              name="lastname"
              className="input-bordered input transition-all"
              placeholder="Last Name"
              validation={{ required: false }}
              errorClassName="input-bordered input border-red-500 border-2 transition-all"
            />
            <div className="space-x-2 ">
              <Label className="font-semibold text-white" name="dob-label">
                Date of Birth
              </Label>
              <DateField
                name="dob"
                className="input-bordered input transition-all"
                placeholder="Date of Birth"
                validation={{ required: false }}
                errorClassName="input-bordered input border-red-500 border-2 transition-all"
              />
            </div>
            <SearchField
              name="country"
              placeholder="Country/Residence"
              className="input-bordered input transition-all"
              validation={{ required: true }}
              errorClassName="input-bordered input border-red-500 border-2 transition-all"
            />
          </>
        )}
        <EmailField
          name="email"
          className="input-bordered input transition-all"
          placeholder="Email"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2 transition-all"
        />
        <PasswordField
          name="password"
          className="input-bordered input transition-all"
          placeholder="Password"
          validation={{ required: true }}
          errorClassName="input-bordered input border-red-500 border-2 transition-all"
        />
        <Submit className="btn-primary btn w-full">
          {mode === 'signup' ? 'Sign Up' : 'Sign In'}
        </Submit>
        <div className="mt-4 flex space-x-3">
          <button
            className="btn-primary btn"
            type="button"
            onClick={() => signInWithProvider('google')}
          >
            {mode === 'signup' ? 'Sign Up' : 'Sign In'} with Google
          </button>
          <button
            className="btn-primary btn"
            type="button"
            onClick={() => signInWithProvider('github')}
          >
            {mode === 'signup' ? 'Sign Up' : 'Sign In'} with GitHub
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AuthForm
