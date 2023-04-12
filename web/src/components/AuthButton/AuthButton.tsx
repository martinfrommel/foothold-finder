import { Button } from 'react-daisyui'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

export interface AuthButtonProps {
  signInClassName?: string
  signUpClassName?: string
  logoutClassName?: string
  dashboardClassName?: string
}

const AuthButton: React.FC<AuthButtonProps> = ({
  signInClassName,
  signUpClassName,
  logoutClassName,
  dashboardClassName,
}) => {
  const { isAuthenticated, logOut } = useAuth()

  const buttonClasses = {
    signIn: `btn-secondary ${signInClassName}`,
    signUp: `btn-primary ${signUpClassName}`,
    logout: `btn-primary ${logoutClassName}`,
    dashboard: `btn-secondary ${dashboardClassName}`,
  }

  const buttonText = {
    signIn: 'Sign in',
    signUp: 'Sign up',
    logout: 'Logout',
    dashboard: 'Dashboard',
  }

  const buttonRoute = {
    signIn: routes.signIn(),
    signUp: routes.signUp(),
    dashboard: routes.dashboard(),
  }
  const { pathname } = useLocation()

  if (isAuthenticated) {
    return (
      <>
        {pathname === buttonRoute.dashboard ? (
          <span
            className={`btn ${buttonClasses.dashboard} btn-disabled cursor-auto`}
          >
            {buttonText.dashboard}
          </span>
        ) : (
          <Link
            to={buttonRoute.dashboard}
            className={`btn ${buttonClasses.dashboard}`}
          >
            {buttonText.dashboard}
          </Link>
        )}
        <Button className={`btn ${buttonClasses.logout} ml-2`} onClick={logOut}>
          {buttonText.logout}
        </Button>
      </>
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
