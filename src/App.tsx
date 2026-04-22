import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobPage, {jobLoader} from './pages/JobPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MainLayout from './layouts/MainLayout.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      {/* Catch all other routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App
