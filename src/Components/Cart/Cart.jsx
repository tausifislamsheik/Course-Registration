/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';


const Cart = ({selectedCourses, remaining, totalCreditHour, totalPrice}) => {
    // console.log(selectedCourses)
    return (
        <div className='card bg-base-100 shadow-xl w-72 p-10 mr-4'>
            <h1 className='font-bold text-blue-600 mb-5'>Credit Hour Remaining: {remaining}hr</h1><hr />
            <h1 className='font-bold my-4'>Course Name</h1>
            {
                selectedCourses.map((course, index) =>(
                    <ol>
                        <li key={course.id} className='text-gray-500'>{index+1}.{course.title}</li>
                    </ol>
                    
                    
                ))
            }
            
            <hr />
            <h4 className='font-semibold my-5'>Total Credit Hour: {totalCreditHour} </h4><hr />
            <h5 className='font-bold mt-5'>Total Price: {totalPrice} USD</h5>
        </div>
    );
};

export default Cart;