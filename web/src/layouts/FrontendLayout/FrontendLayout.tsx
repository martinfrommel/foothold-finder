// import { motion } from 'framer-motion'
// import { BottomNavigation } from 'react-daisyui'

import { NavLink } from '@redwoodjs/router'

import Navbar from 'src/components/Navbar/Navbar'
import { frontendNavRoutes } from 'src/Routes'

type FrontendLayoutProps = {
  children?: React.ReactNode
}

const FrontendLayout = ({ children }: FrontendLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar useAuthModal={true}>
          {frontendNavRoutes.map((link, index) => (
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

export default FrontendLayout
