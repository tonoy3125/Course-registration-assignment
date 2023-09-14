/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [allCourses, setAllCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalPrice, setTotalPrice] = useState([])
    const [remainingCredit, setRemainingCredit] = useState(0)
    const [totalCredit, setTotalCredit] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])


    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.ID == course.ID)
        let time = course.Course_Credit;
        time = totalCredit + time;

        let remaining = 20 - time;
        let count = course.Price


        if (isExist) {
            return alert('Already Added')
        }
        else {
            selectedCourse.forEach(item => {
                count += item.Price
            })

            if (time > 20) {
                return alert('you canot add more')
            }
            else {
                setRemainingCredit(remaining)
                setTotalCredit(time)
                setTotalPrice(count)
                const newCourse = ([...selectedCourse, course])
                setSelectedCourse(newCourse)
            }

        }

    }
    // console.log(selectedCourse)


    return (
        <div className="flex flex-col lg:flex-row lg:justify-evenly container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    allCourses.map(course => <Card key={course.ID} handleSelectCourse={handleSelectCourse} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice} course={course}></Card>)
                }
            </div>
            <div>
                <div className="border w-[312px]  rounded-xl mx-auto shadow-lg pl-6">
                    <h1 className="text-left mt-6 text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remainingCredit}</h1>
                    <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                    <div>
                        <h3 className="text-left text-xl font-bold text-[#1C1B1B] mt-4">Course Name</h3>
                        {
                            selectedCourse.map(course => (
                                <li className="list-decimal" key={course.id}> {course.Title} </li>
                            ))
                        }
                    </div>
                    <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                    <p>Total Credit Hour : {totalCredit}</p>
                    <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                    <p>Total Price : {totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;