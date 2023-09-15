/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [allCourses, setAllCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalPrice, setTotalPrice] = useState([])
    const [remainingCredit, setRemainingCredit] = useState(20)
    const [totalCredit, setTotalCredit] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    const notify = () => toast.warn('Already Added this Course!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const notice = () => toast.warn('Your Credit Hour Is Finished!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.ID == course.ID)
        let time = course.Course_Credit;
        time = totalCredit + time;


        let remaining = 20 - time;


        let count = course.Price


        if (isExist) {
            return notify()
        }
        else {
            selectedCourse.forEach(item => {
                count += item.Price
            })

            if (time > 20) {
                return notice()
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
                        <div className="text-[#1C1B1B99] text-base">
                            {
                                selectedCourse.map(course => (
                                    <li className="list-decimal" key={course.id}> {course.Title} </li>
                                ))
                            }
                        </div>
                    </div>
                    <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                    <p className=" text-base font-medium text-[#1C1B1BCC]">Total Credit Hour : {totalCredit}</p>
                    <hr className="w-[264px]  border mt-4 bg-[#1C1B1B33]" />
                    <p className=" text-base font-semibold text-[#1C1B1BCC]">Total Price : {totalPrice} USD</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cards;