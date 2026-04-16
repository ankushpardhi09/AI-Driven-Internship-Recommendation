import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './api/homepageContent'
import { AppProvider } from './context/AppContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { RouteWelcomeLoader } from './components/RouteWelcomeLoader'
import { AICopilotPage } from './pages/AICopilotPage'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'
import { EmployerPage } from './pages/EmployerPage'
import { FaqPage } from './pages/FaqPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SignUpPage } from './pages/SignUpPage'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <RouteWelcomeLoader />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.aiCopilot} element={<AICopilotPage />} />
            <Route path={routes.employer} element={<EmployerPage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.blog} element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path={routes.resources} element={<ResourcesPage />} />
            <Route path={routes.features} element={<FeaturesPage />} />
            <Route path={routes.faq} element={<FaqPage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.signup} element={<SignUpPage />} />
            <Route
              path={routes.profile}
              element={(
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              )}
            />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
