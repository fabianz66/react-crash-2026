import {useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner';


const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_per_page=3' : '/api/jobs';
        const response = await fetch(apiUrl);
        console.log('API response status:', response);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  console.log('Fetched jobs:', jobs);
  const recentJobs = isHome ? jobs?.slice(0, 3) : jobs;
  
  return (
    <section className="bg-slate-50 px-4 py-12">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { loading ? (
            <Spinner />
          ) : (
            recentJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default JobListings