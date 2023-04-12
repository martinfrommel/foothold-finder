// Import necessary form components and toast function
import { Button } from 'react-daisyui'

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

// Import useAuth hook from auth module
import { useAuth } from 'src/auth'

// Define interface for component props
interface AuthFormProps {
  mode: 'signup' | 'signin' // Indicates whether form is for signing up or signing in
  onAuthSuccess?: () => void // Optional callback function to be called after successful authentication
}

// Define AuthForm component
const AuthForm: React.FC<AuthFormProps> = ({ mode, onAuthSuccess }) => {
  // Obtain client object from useAuth hook
  const { client } = useAuth()

  // Define function for handling errors during authentication
  const handleErrors = (error) => {
    // Obtain error status and message
    const status = error.response?.status
    const message =
      error.message || 'An error occurred. Please try again later.'

    // Display appropriate error message using toast function based on status code
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

  // Define function for signing in with third-party provider
  const signInWithProvider = async (provider) => {
    try {
      // Call appropriate method on client object to sign in with provider
      const response = await client.auth.signIn({ provider })

      // Display success message and call onAuthSuccess callback on successful authentication
      if (response.error) {
        handleErrors(response.error)
      } else {
        toast.loading(
          `Signing ${mode === 'signup' ? 'up' : 'in'} with ${provider}!`
        )
        onAuthSuccess?.()
      }
    } catch (error) {
      // Display error message and call handleErrors function on failed authentication
      console.error(
        `Error signing ${mode === 'signup' ? 'up' : 'in'} with ${provider}:`,
        error
      )
      handleErrors(error)
    }
  }

  // Define function for submitting form data
  const onSubmit = async (data) => {
    try {
      // Call appropriate method on client object to sign up or sign in user
      const response = await (mode === 'signup'
        ? client.auth.signUp
        : client.auth.signIn)({
        email: data.email,
        password: data.password,
      })

      // Display success message and call onAuthSuccess callback on successful authentication
      if (response.error) {
        handleErrors(response.error)
      } else {
        toast.success(`Signed ${mode === 'signup' ? 'up' : 'in'} successfully!`)
        onAuthSuccess?.()
      }
    } catch (error) {
      // Display error message and call handleErrors function on failed authentication
      console.error(`Error signing ${mode === 'signup' ? 'up' : 'in'}:`, error)
      handleErrors(error)
    }
  }
  // Render form JSX
  return (
    <div className="w-full max-w-md">
      {/* Render RedwoodJS Form component with appropriate fields */}
      <Form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center space-y-3 rounded bg-neutral py-10 shadow-md"
      >
        {/* Render heading based on mode prop */}
        {mode === 'signup' || mode === 'signin' ? (
          <h1 className="my-2 text-center text-2xl font-bold text-base-100">
            {mode === 'signup' ? 'Sign Up' : 'Sign In'}
          </h1>
        ) : null}
        {mode === 'signup' && (
          <>
            {/* Render fields for additional sign up information */}
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
              {/* Render label and field for date of birth */}
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
            {/* Render search field for country/residence */}
            <SearchField
              name="country"
              placeholder="Country/Residence"
              className="input-bordered input transition-all"
              validation={{ required: true }}
              errorClassName="input-bordered input border-red-500 border-2 transition-all"
            />
          </>
        )}
        {/* Render email and password fields */}
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
        {/* Render submit button */}
        <Submit className="btn-primary btn">
          {mode === 'signup' ? 'Sign Up' : 'Sign In'}
        </Submit>
        {/* Render buttons for signing in with third-party providers */}
        <div className="mt-4 flex space-x-3">
          <Button
            color="primary"
            type="button"
            onClick={() => signInWithProvider('google')}
          >
            {mode === 'signup' ? 'Sign Up' : 'Sign In'} with Google
          </Button>
          {/* <button
        className="btn-primary btn"
        type="button"
        onClick={() => signInWithProvider('github')}
      >
        {mode === 'signup' ? 'Sign Up' : 'Sign In'} with GitHub
      </button> */}
        </div>
      </Form>
    </div>
  )
}

export default AuthForm
