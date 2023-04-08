import { Navbar } from 'react-daisyui'

import { NavLink } from '@redwoodjs/router'

import { authNavRoutes } from 'src/Routes'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar className="p-4">
          {authNavRoutes.map((link, index) => (
            <NavLink
              key={index}
              to={link.route()}
              className="btn transition-all hover:font-semibold"
              activeClassName="underline font-bold hover:font-bold"
            >
              {link.label}
            </NavLink>
          ))}
        </Navbar>
        <div className="flex flex-grow flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthLayout
