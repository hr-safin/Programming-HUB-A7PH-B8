import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/NavBar";
import Swal from 'sweetalert2'


function App() {
  const [add, setAdd] = useState([]);
  let [remaining, setRemaining] = useState(20);
  let [credit, setCredit] = useState(0);
  let [total,setTotal] = useState(0)
  let [remove, setRemove] = useState([])
  
  const handleClick = (info) => {
    const newAdd = [...add, info];
    const removeDouble = add.find((item) => item.id === info.id);

    credit = info.courseCredit;
    total = info.coursePrice
    if (removeDouble) {
      return Swal.fire({
        title: 'Already Enrolled!',
        text: 'You can not enroll one course more than once',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }

    add.forEach((item) => {
      credit += item.courseCredit;
    });

    add.forEach(item => {
      total +=item.coursePrice
    })

    if (credit > 20) {
      return Swal.fire({
        title: 'Credit hour is exceeding',
        text: 'You have crossed the credit hour limit and remaining credit hour can not be negative',
        icon: 'error',
        confirmButtonText: 'close'
      })
    } else {
      remaining = 20 - credit;
      setCredit(credit);
      setAdd(newAdd);
      setRemaining(remaining);
      setTotal(total)
    }
  };

 

  const handleRemove = () => {
    setAdd([])
    setCredit(0)
    setRemaining(20)
    setTotal(0)
  }



  return (
    <>
      <NavBar />
      <h2 className=' bg-[#F3F3F3] text-3xl font-bold text-center pt-20 pb-4'>Course Registration</h2>
      <div className=" bg-[#F3F3F3] flex flex-col-reverse md:flex-col-reverse lg:flex-row  py-6 gap-12 lg:gap-0">
        <Cards  ToastContainer={ToastContainer} handleClick={handleClick} />
        <Cart handleRemove={handleRemove}  total={total} remaining={remaining} credit={credit} add={add} />
      </div>
    </>
  );
}

export default App;
