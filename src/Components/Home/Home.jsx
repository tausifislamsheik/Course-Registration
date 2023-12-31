/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookmark } from 'react-icons/fa';


const Home = () => {

  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setremaining] = useState(0)
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
      fetch('./data.json')
        .then(res => res.json())
          .then(data => setAllCourses(data))
    },[])

    const handleSelectCourse = (course) =>{
      const isExist = selectedCourses.find(item=>item.id==course.id)

      let count = course.credit;
      let total = course.price;

      if (isExist) {
        toast.error(" Opps!You've already selected this course.", {
          position:"top-center"
        });
      }else{

        selectedCourses.forEach(item => {
          count = count + item.credit;
          total = total + item.price;
        });
        
        const creditHourRemaining = 20 - count;
        
        if (count > 20) {
          toast.error("You have reached the limit of credit hours of 20hr.You can't select more than the remaining credit hours.", {
            position:"top-right"
          });
        }else{
          setTotalPrice(total);
          setTotalCreditHour(count);
          setremaining(creditHourRemaining);
          setSelectedCourses([...selectedCourses, course]);
        }
        
      }
      
    }

    // console.log(allCourses)

    return (
      <><h1 className=' text-3xl font-bold py-8 ml-96'>Course Registration</h1>
        <div className='flex'>

        <div className='flex flex-wrap gap-4'>
          {allCourses.map(course => (
            <div key={course.id} className="card w-1/3 bg-base-100 shadow-xl">
              <figure className="px-4 pt-6">
                <img src={course.cover_img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{course.title}</h2>
                <p>{course.description}</p>
                <div className='flex mb-6'>
                  <p className=' font-semibold'>$ Price: {course.price}</p>
                  <p className='mt-2'><FaBookmark></FaBookmark></p>
                  <p className='font-semibold'>Credit: {course.credit}hr</p>
                </div>
                <div className="card-actions">
                  <button onClick={() => handleSelectCourse(course)} className="btn btn-primary w-full">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="cart">
            <Cart selectedCourses={selectedCourses} remaining={remaining} totalCreditHour={totalCreditHour} totalPrice={totalPrice}></Cart>
          </div>
        </div>

        <ToastContainer />


      </div></>
        
    );
};

export default Home;