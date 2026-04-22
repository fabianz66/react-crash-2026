import { useLoaderData } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobPage = () => {
  const job = useLoaderData();

  return (
    <section className="container m-auto py-10 px-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-500">{job.type}</p>
    </section>
  )
}

const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch job details');
  }
  const job = await response.json();
  return job;
};

export {JobPage as default, jobLoader};