import React from 'react'

const Login = () => {
  return (
    <>
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Login</h2>
      <form className="flex flex-col gap-3 mt-4 max-w-sm mx-auto">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login