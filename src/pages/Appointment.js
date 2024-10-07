 import React from 'react'
import background from '../img/background.jpeg'

const Appointment = () => {
  return (
    <>
        <div
    className="relative h-screen w-full bg-cover bg-center  " 
    style={{ backgroundImage: `url(${background})` }}
>
<section className="max-w-4xl p-6 mx-auto  rounded-md   ">
<h1 className="text-4xl font-extrabold text-black capitalize ">Appointment Scheduling</h1>
<br/>
    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-black font-bold " for="username">Name</label>
                <input id="name" type="text" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="font-bold text-black" for="passwordConfirmation">Date</label>
                <input id="date" type="date" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div> 

            <div>
                <label className="text-black font-bold " for="username">Age</label>
                <input id="username" type="number" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
    <label className="font-bold text-black" for="gender">Gender</label>
    <select id="gender" className="block w-full px-4 py-2 mt-2 text-black bg-bb border border-gray-300 rounded-full    focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
</div>
           
<div>
                <label className="text-black font-bold " for="username">Address</label>
                <input id="address" type="number" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>


            <div>
                <label className="font-bold text-black" for="passwordConfirmation">Date of Birth</label>
                <input id="dob" type="date" className="block w-full px-4 py-2 mt-2 text-black bg-bb border border-gray-300 rounded-full dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div> 
            <div>
                <label className="text-black font-bold " for="username">Phone Number</label>
                <input id="phone" type="number" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            
            <div>
                <label className="text-black font-bold " for="username">Doctor</label>
                <input id="doctor" type="text" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
                <label className="text-black font-bold " for="username">Department</label>
                <input id="department" type="text" className="block w-full px-4 py-2 mt-2 bg-bb text-black rounded-full border border-gray-300  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>

</section>





    </div>
    </>
  )
}

export default Appointment
