// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, routes } from '@redwoodjs/router'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import BackendLayout from './layouts/BackendLayout/BackendLayout'
import FrontendLayout from './layouts/FrontendLayout/FrontendLayout'

export const frontendNavRoutes = [
  { label: 'Home', route: () => routes.home() },
  { label: 'About', route: () => routes.about() },
  { label: 'Features', route: () => routes.features() },
]

export const backendNavRoutes = [
  { label: 'Dashboard', route: () => routes.dashboard() },
  { label: 'Profile', route: () => routes.profile() },
  { label: 'Gyms', route: () => routes.gyms() },
]

export const privateRoutes = ['/community-details', '/communities', '/gym-details', '/gyms', '/profile', '/dashboard']

export const authNavRoutes = [{ label: 'Back', route: () => routes.home() }]

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={AdminLayout}>
        <Set wrap={FrontendLayout} prerender>
          <Route path="/about" page={AboutPage} name="about" />
          <Route path="/" page={HomePage} name="home" />
          <Route path="/features" page={FeaturesPage} name="features" />
          <Route notfound page={NotFoundPage} />
        </Set>

        <Set unauthenticated="signIn" wrap={BackendLayout} private>
          <Route path="/community-details" page={CommunityDetailsPage} name="communityDetails" />
          <Route path="/communities" page={CommunitiesPage} name="communities" />
          <Route path="/gym-details" page={GymDetailsPage} name="gymDetails" />
          <Route path="/gyms" page={GymsPage} name="gyms" />
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
        <Set wrap={AuthLayout}>
          <Route path="/sign-in" page={SignInPage} name="signIn" />
          <Route path="/sign-up" page={SignUpPage} name="signUp" />
        </Set>
      </Set>
    </Router>
  )
}

export default Routes
