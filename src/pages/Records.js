import React from 'react'
import background from '../img/background.jpeg'

const Records = () => {
  return (
    <div
    className="relative h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${background})` }}
>
    <br/>
    <br/>
    <h1 className='text-4xl font-extrabold ' >Records</h1>
    <br/>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl mx-auto p-6 bg-aa ">
<table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
<thead class="text-xs text-black uppercase bg-aa ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Department
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Doctor
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-bb border-b text-black border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    Ram
                </th>
                <td class="px-6 py-4">
                    20
                </td>
                <td class="px-6 py-4">
                    doctor
                </td>
                <td class="px-6 py-4">
                    2024-2-3
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="">lorem</a>
                </td>
            </tr>
            <tr class="bg-aa border-b text-black border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="">Edit</a>
                </td>
            </tr>
            <tr class="bg-bb border-b text-black border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" >Edit</a>
                </td>
            </tr>
            <tr class="bg-aa border-b text-black border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium ">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" >Edit</a>
                </td>
            </tr>
            <tr class="bg-bb text-black border-blue-40">
                <th scope="row" class="px-6 py-4 font-medium ">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" >Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>

  )
}

export default Records
