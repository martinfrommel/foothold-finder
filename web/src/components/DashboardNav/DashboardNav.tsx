import { BottomNavigation } from 'react-daisyui'

import { NavLink } from '@redwoodjs/router'

import { NavLinkItem } from '../Navbar/NavLinkTypes'

type DashboardNavProps = {
  navLinks: NavLinkItem[]
  icons: JSX.Element[]
  iconSize?: number
  className?: string
}

const DashboardNav: React.FC<DashboardNavProps> = ({
  navLinks,
  icons,
  iconSize = 24,
  className = '',
}) => {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="">
        <BottomNavigation
          className={`flex max-h-28 w-full items-center justify-evenly p-4 ${className}`}
        >
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                {React.cloneElement(icons[index], {
                  width: iconSize,
                  height: iconSize,
                })}
                <NavLink
                  to={link.route()} // Here, call the function instead of passing the string
                  className="mt-1 block"
                  activeClassName="underline"
                >
                  {link.label}
                </NavLink>
              </div>
            </React.Fragment>
          ))}
        </BottomNavigation>
      </div>
    </>
  )
}

export default DashboardNav
