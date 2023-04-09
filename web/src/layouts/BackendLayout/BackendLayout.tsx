import { NavLink } from '@redwoodjs/router'

import Navbar from 'src/components/Navbar/Navbar'
import { backendNavRoutes } from 'src/Routes'

type BackendLayoutProps = {
  children?: React.ReactNode
}

const BackendLayout = ({ children }: BackendLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar className="">
          {backendNavRoutes.map((link, index) => (
            <NavLink
              key={index}
              to={link.route()}
              className="transition-all hover:font-semibold"
              activeClassName="underline font-bold hover:font-bold"
            >
              {link.label}
            </NavLink>
          ))}
        </Navbar>
        <div className="flex flex-1 flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default BackendLayout
