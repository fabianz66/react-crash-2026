import { useState } from 'react'
import Card from './Card'
import {FaMapMarker} from 'react-icons/fa'

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = job.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }

    return (
        <Card bg="bg-white">
            <div className="mb-4">
                <div className="text-indigo-600 font-semibold mb-1 uppercase text-xs tracking-wider">{job.type}</div>
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
            </div>

            <div className="mb-4 text-slate-600 leading-relaxed">{description}</div>

            <button
                onClick={() => setShowFullDescription((prev) => !prev)}
                className="text-indigo-500 mb-5 hover:text-indigo-600"
            >
                {showFullDescription ? 'Less' : 'More'}
            </button>

            <h3 className="text-indigo-600 font-bold mb-4">{job.salary} / Year</h3>

            <div className="border-t border-slate-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-slate-500 mb-3 text-sm flex items-center">
                    <FaMapMarker className="text-lg mr-1" />
                    {job.location}
                </div>
                <a
                    href={`/jobs/${job.id}`}
                    className="h-9 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors font-medium flex items-center justify-center"
                >
                    Read More
                </a>
            </div>
        </Card>
    )
}

export default JobListing
