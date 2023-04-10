import { Navbar } from 'react-daisyui'

import { Link, routes } from '@redwoodjs/router'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar className="p-4">
          <Link className="btn-primary btn" to={routes.home()}>
            Go back
          </Link>
        </Navbar>
        <div className="flex flex-grow flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthLayout
