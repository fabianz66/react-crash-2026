import JobListing from './JobListing'
import jobsData from '../jobs.json'

const JobListings = () => {
  const recentJobs = jobsData.jobs.slice(0, 3)
  console.log(recentJobs)

  return (
    <section className="bg-slate-50 px-4 py-12">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings