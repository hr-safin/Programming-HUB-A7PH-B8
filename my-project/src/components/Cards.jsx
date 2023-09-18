import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({handleClick,ToastContainer}) => {

    const [display, setDisplay] = useState([])

    useEffect(() => {
        fetch("course.json")
        .then(res => res.json())
        .then(data => setDisplay(data))
    },[])
    return (
        <>
        
        <div className=' bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-10 px-6'>
          
            {display.map(data => <Card ToastContainer={ToastContainer} handleClick={handleClick} data={data} key={data.id} />)}
        </div>
        </>
        
    );
};

export default Cards;