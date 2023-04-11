import { Menu } from 'react-daisyui'

import { Link, routes } from '@redwoodjs/router'

import AuthButton from '../AuthButton/AuthButton'

import logo from './logo.png'

interface NavbarProps {
  className?: string
  showLink?: boolean
  authLinks?: {
    signIn?: boolean
    signUp?: boolean
    [key: string]: boolean
  }
  logoComponent?: React.ReactNode
  logoAltText?: string
  menuLinkClasses?: string
  menuActiveClasses?: string
  useAuthModal?: boolean
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  showLink = true,
  logoComponent = <img src={logo} alt="Logo" className="h-12" />,
  // logoAltText = 'Logo',
  menuLinkClasses = 'transition-all hover:font-semibold',
  menuActiveClasses = 'underline font-bold hover:font-bold',
  children,
}) => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className={`${className} w-full`}>
        <div className="flex items-center justify-center p-4 md:justify-between">
          {showLink ? (
            <Link className="hidden max-h-full md:block" to={routes.home()}>
              {logoComponent}
            </Link>
          ) : (
            <div className="hidden h-12 max-h-full w-12 md:block" />
          )}

          <Menu className="hidden space-x-5 md:flex" horizontal>
            {children &&
              React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement, {
                  key: index,
                  className: menuLinkClasses,
                  activeClassName: menuActiveClasses,
                })
              )}
          </Menu>
          <div
            id="signin-section"
            className="ml-4 hidden items-center md:block"
          >
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
