import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero title="Cracking the React Framework" subtitle="The ultimate guide to mastering modern React development in 2026." />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App
