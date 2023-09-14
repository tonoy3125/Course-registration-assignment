import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [allCourses,setAllCourses] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setAllCourses(data))
    },[])
    console.log(allCourses)
    return (
        <div className="flex flex-col lg:flex-row lg:justify-evenly container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    allCourses.map(course => <Card key={course.ID} course={course}></Card>)
                }
            </div>
            <div className="border w-[312px] h-[355px] rounded-xl mx-auto shadow-lg pl-6">
                <h1 className="text-left mt-6 text-lg font-bold text-[#2F80ED]">Credit Hour Remaining</h1>
                <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                <h3 className="text-left text-xl font-bold text-[#1C1B1B] mt-4">Course Name</h3>
                <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                <p>Total Credit Hour : </p>
                <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                <p>Total Price : </p>
            </div>
        </div>
    );
};

export default Cards;