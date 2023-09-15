/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';


const Cart = ({selectedCourses, remaining, totalCreditHour}) => {
    console.log(selectedCourses)
    return (
        <div>
            <h1 className='font-bold text-blue-600'>Credit Hour Remaining: {remaining}hr</h1><hr />
            <h1 className='font-bold'>Course Name</h1><br />
            {
                selectedCourses.map((course, index) =>(
                    <ol>
                        <li key={course.id} className='text-gray-500'>{index+1}.{course.title}</li>
                    </ol>
                    
                    
                ))
            }
            <br />
            <hr />
            <h4>Total Credit Hour: {totalCreditHour} </h4><hr />
            {/* <h5>Total Price: {totalprice} USD</h5> */}
        </div>
    );
};

export default Cart;