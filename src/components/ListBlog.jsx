import { FaAngleRight } from "react-icons/fa";

const ListBlog = ({ singleData }) => {
    const { image, title, description } = singleData;
    return (
        <div className="flex gap-6 ">
            <figure><img className="w-72 h-40 object-fill rounded-lg" src={image} alt="" /></figure>
            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 font-light mt-2 mb-4">{description}</p>
                <button className="flex items-center gap-1 hover:underline duration-300 hover:text-[#698a84]">Read More <FaAngleRight /> </button>
            </div>
        </div>
    );
};

export default ListBlog;