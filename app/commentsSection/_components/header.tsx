import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 w-full px-4 py-3 flex justify-between items-center bg-gray-100'>
        <h1 className='font-bold tracking-wide text-stone-600 text-xl'>Comments</h1>
        <p className='text-gray-500 text-sm font-medium'>Sam.Dev</p>
    </header>
  )
}

export default Header