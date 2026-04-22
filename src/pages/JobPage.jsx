import { useParams } from 'react-router-dom'

const JobPage = () => {
  const { id } = useParams()

  return (
    <h1 className="text-3xl font-bold text-center mt-10">
      Job Details for ID: {id}
    </h1>
  )
}

export default JobPage