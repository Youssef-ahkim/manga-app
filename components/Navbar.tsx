import Image from 'next/image'
import React from 'react'
import SearchForm from './SearchForm'

function Navbar() {
    return (
        <div className='bg-gray-100 fixed top-0 w-full justify-between items-center hidden sm:flex z-40'>
            <Image src="/logo.png" alt="logo" width={250} height={250} className="w-[25vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] mr-5"/>
            <SearchForm />

        </div>
    )
}

export default Navbar
