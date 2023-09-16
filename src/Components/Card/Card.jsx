/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
const Card = ({ course, handleSelectCourse  }) => {
    const { Image, Title, Details, Price, Course_Credit } = course
    return (
        <div className="mb-10">
            <div className="card w-[312px] h-full bg-[#FFFFFF] rounded-xl shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={Image} alt="Shoes" className="rounded-xl" />
                </figure>
                <h1 className=" text-lg font-semibold text-[#1C1B1B] text-center mt-4">{Title}</h1>
                <p className=" text-sm font-normal text-[#1C1B1B99] text-center mt-3 mb-5">{Details}</p>
                <div className="flex gap-6 justify-center">
                    <div className="flex gap-3 items-center">
                        <p><FaDollarSign></FaDollarSign></p>
                        <p className=" text-base font-medium text-[#1C1B1B99]">Price : {Price}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <p><BsBook></BsBook></p>
                        <p className=" text-base font-medium text-[#1C1B1B99]">Credit : {Course_Credit}hr</p>
                    </div>
                </div>
                <button onClick={() => handleSelectCourse(course)} className="pt-2 pb-2 pl-28 pr-28 mt-6 mb-3 ml-3 mr-3 bg-[#2F80ED] rounded-lg text-[#fff]">Select</button>
            </div>
        </div>
    );
};

export default Card;





