import JobListings from '../components/JobListings.jsx'

const JobsPage = () => {
  return (
    <section className="bg-slate-50 px-4 py-10">
      <JobListings isHome={false} />
    </section>
  )
}

export default JobsPage