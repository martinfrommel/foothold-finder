import { Button } from 'react-daisyui'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

export interface AuthButtonProps {
  signInClassName?: string
  signUpClassName?: string
  logoutClassName?: string
}

const AuthButton: React.FC<AuthButtonProps> = ({
  signInClassName,
  signUpClassName,
  logoutClassName,
}) => {
  const { isAuthenticated, logOut } = useAuth()

  const buttonClasses = {
    signIn: `btn-secondary ${signInClassName}`,
    signUp: `btn-primary ${signUpClassName}`,
    logout: `btn-primary ${logoutClassName}`,
  }

  const buttonText = {
    signIn: 'Sign in',
    signUp: 'Sign up',
    logout: 'Logout',
  }

  const buttonRoute = {
    signIn: routes.signIn(),
    signUp: routes.signUp(),
  }

  if (isAuthenticated) {
    return (
      <Button className={`btn ${buttonClasses.logout}`} onClick={logOut}>
        {buttonText.logout}
      </Button>
    )
  } else {
    return (
      <>
        <Link to={buttonRoute.signIn} className={`btn ${buttonClasses.signIn}`}>
          {buttonText.signIn}
        </Link>
        <Link
          to={buttonRoute.signUp}
          className={`btn ${buttonClasses.signUp} ml-2`}
        >
          {buttonText.signUp}
        </Link>
      </>
    )
  }
}

export default AuthButton
