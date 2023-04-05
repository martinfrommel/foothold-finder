// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/community-details" page={CommunityDetailsPage} name="communityDetails" />
      <Route path="/communities" page={CommunitiesPage} name="communities" />
      <Route path="/gym-details" page={GymDetailsPage} name="gymDetails" />
      <Route path="/gyms" page={GymsPage} name="gyms" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/sign-in" page={SignInPage} name="signIn" />
      <Route path="/signup" page={SignUpPage} name="signUp" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
