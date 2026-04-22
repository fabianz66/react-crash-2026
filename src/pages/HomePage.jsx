import Hero from '../components/Hero.jsx'
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/JobListings.jsx'

const HomePage = () => {
  return (
    <>
      <Hero
        title="Cracking the React Framework"
        subtitle="The ultimate guide to mastering modern React development in 2026."
      />
      <HomeCards />
      <JobListings isHome={true} />
    </>
  )
}

export default HomePage