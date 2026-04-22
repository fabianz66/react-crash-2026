import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobPage from './pages/JobPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MainLayout from './layouts/MainLayout.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobPage />} />
          {/* Catch all other routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
