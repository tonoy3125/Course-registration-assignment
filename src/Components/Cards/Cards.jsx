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
        <div className="flex container mx-auto">
            <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-6">
                {
                    allCourses.map(course => <Card key={course.ID} course={course}></Card>)
                }
            </div>
            <div>
                <h1>This Is cart</h1>
            </div>
        </div>
    );
};

export default Cards;