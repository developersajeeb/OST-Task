import { FaAngleRight } from "react-icons/fa";

const TwoBlog = ({ singleData }) => {
    const { image, title, description } = singleData;

    return (
        <div>
            <img className="w-full h-52 object-cover rounded-lg" src={image} alt="" />
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 font-light mt-2 mb-4">{description}</p>
                <button className="flex items-center gap-1 hover:underline duration-300 hover:text-[#698a84]">Read More <FaAngleRight/> </button>
            </div>
        </div>
    );
};

export default TwoBlog;
