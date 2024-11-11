import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center p-ws md:p-ws_lg'>
        <h3 className='font-major font-bold text-xl text-primary md:text-3xl'>Touch ATM <span className='text-secondary'>*</span></h3>
        <button className='bg-primary text-white px-8 py-2 rounded-3xl font-major font-bold'>Login</button>
    </nav>
  )
}
