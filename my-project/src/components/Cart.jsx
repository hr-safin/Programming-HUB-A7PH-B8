import React from "react";


const Cart = ({ add, credit, remaining, total,handleRemove}) => {
  let count = 1;
  return (
    <>
    <div className="lg:px-0 px-6">
      <div className=" bg-white p-6 rounded-lg">
        <h2 className="pb-4 text-lg font-semibold text-blue-600">
          Credit Hour Remaining {remaining} hr
        </h2>
        <div className=" border border-gray-200 mb-3"></div>
        <h2 className=" text-lg font-bold">Course Name</h2>
        <p className=" pt-2 pb-3 text-gray-700 text-md">Number of Enrolled courses: {add.length}</p>
        <ol className="  text-gray-500 text-sm pb-3">
          {add.map((item) => {
            return (
              
                <li className="pb-2">
                 {count++}. {item.courseName}
                </li>
                
              
            );
          })}
        </ol>
        <div className=" border border-gray-200 mb-3 mt-3"></div>
        <h2>Total Credit Hour : {credit}</h2>
        <div className=" border border-gray-200 mb-3 mt-3"></div>
        <h2>Total Price : {total} USD</h2>
      </div>
      <div className=" my-8 flex justify-center">
      <button onClick={handleRemove} className={add.length > 0 ? " rounded-md text-white bg-red-500 px-4 py-2 text-lg" : "hidden"}>remove all</button>
      </div>
      
    </div>
   
   
    </>
  );
};

export default Cart;
