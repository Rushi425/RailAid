import React from 'react'

const Booking = () => {
  return (
    <>
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Book Your Service</h2>
      <form className="flex flex-col gap-3 mt-4 max-w-sm mx-auto">
        <select className="border p-2 rounded">
          <option>Luggage Service</option>
          <option>Wheelchair Assistance</option>
        </select>
        <input type="text" placeholder="Train Number" className="border p-2 rounded" />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Book</button>
      </form>
    </div>
    </>
  )
}

export default Booking