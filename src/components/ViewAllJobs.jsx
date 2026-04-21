import React from 'react'

const ViewAllJobs = () => {
    return (
        <div className="flex justify-center mt-10">
            <a
                href="/jobs"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >
                View All Jobs
            </a>
        </div>
    )
}

export default ViewAllJobs