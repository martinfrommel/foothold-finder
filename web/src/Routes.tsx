// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import BackendLayout from './layouts/BackendLayout/BackendLayout'
import FrontendLayout from './layouts/FrontendLayout/FrontendLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={FrontendLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Set wrap={BackendLayout}>
        <Route path="/community-details" page={CommunityDetailsPage} name="communityDetails" />
        <Route path="/communities" page={CommunitiesPage} name="communities" />
        <Route path="/gym-details" page={GymDetailsPage} name="gymDetails" />
        <Route path="/gyms" page={GymsPage} name="gyms" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Set wrap={AuthLayout}>
        {' '}
        <Route path="/sign-in" page={SignInPage} name="signIn" />
        <Route path="/signup" page={SignUpPage} name="signUp" />
      </Set>
    </Router>
  )
}

export default Routes
