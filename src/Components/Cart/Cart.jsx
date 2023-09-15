/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';


const Cart = ({selectedCourses}) => {
    console.log(selectedCourses)
    return (
        <div>
            <h1 className='font-bold'>Course Name</h1><br />
            {
                selectedCourses.map((course, index) =>(
                    <ol>
                        <li className='text-gray-500'>{index+1}.{course.title}</li>
                    </ol>
                    
                    
                ))
            }
            <br />
            <hr />
            <h4>Total Credit Hour: </h4>
        </div>
    );
};

export default Cart;