import { Navbar } from 'react-daisyui'

import { Toaster } from '@redwoodjs/web/dist/toast'

import BackButton from 'src/components/BackButton/BackButton'

// import { NavLink } from '@redwoodjs/router'

// import { authNavRoutes } from 'src/Routes'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Toaster position="top-right" />

        <Navbar className="p-4">
          <BackButton />
        </Navbar>
        <div className="flex flex-grow flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthLayout
