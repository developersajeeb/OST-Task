import { FaLocationArrow } from "react-icons/fa";

const Jobs = () => {
    const jobData = [
        {
            id: 1,
            jobCategory: "Technology",
            jobTitle: "Software Engineer",
            fullTime: true,
            companyName: "ABC Tech",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            jobCategory: "Marketing",
            jobTitle: "Digital Marketing Specialist",
            fullTime: true,
            companyName: "XYZ Marketing Agency",
            location: "New York, NY"
        },
        {
            id: 3,
            jobCategory: "Finance",
            jobTitle: "Financial Analyst",
            fullTime: true,
            companyName: "123 Investments",
            location: "Chicago, IL"
        },
        {
            id: 4,
            jobCategory: "Healthcare",
            jobTitle: "Registered Nurse",
            fullTime: true,
            companyName: "Healthcare Hospital",
            location: "Los Angeles, CA"
        },
        {
            id: 5,
            jobCategory: "Education",
            jobTitle: "Elementary School Teacher",
            fullTime: true,
            companyName: "City Elementary School",
            location: "Houston, TX"
        },
        {
            id: 6,
            jobCategory: "Hospitality",
            jobTitle: "Hotel Receptionist",
            fullTime: false,
            companyName: "Sunset Resort",
            location: "Miami, FL"
        }
    ];

    return (
        <>
            <h2 className="text-3xl font-semibold mb-8">Discover jobs for you</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    jobData.map((job) => <div key={job.id} className="shadow-lg shadow-slate-200 border border-blue-500 rounded-lg p-6">
                        <p className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-500">{job.jobCategory}</p>
                        <h2 className="text-2xl font-semibold mt-7 mb-3">{job.jobTitle}</h2>
                        <ul className="flex items-center gap-4 text-sm text-gray-500">
                            <li className="flex items-center gap-2"><FaLocationArrow /> {job.location}</li>
                            <li className="flex items-center gap-2"><FaLocationArrow />{job.fullTime === true ? 'Full Time' : 'Part Time'}</li>
                        </ul>
                        <p className="mt-5 font-bold">Company: {job.companyName}</p>
                    </div>)
                }
            </div>
            <div className='text-center mt-16'>
                <button className='bg-[#445045] px-6 py-3 rounded-md text-white text-lg font-semibold'>See More</button>
            </div>
        </>
    );
};

export default Jobs;