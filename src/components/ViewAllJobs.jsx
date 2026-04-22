const ViewAllJobs = () => {
    return (
        <div className="flex justify-center mt-10">
            <Link
                to="/jobs"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >
                View All Jobs
            </Link>
        </div>
    )
}

export default ViewAllJobs