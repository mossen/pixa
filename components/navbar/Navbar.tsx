import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 sm:px-4 sm:py-3">
      <nav className="flex justify-between px-2 pt-2 pb-4 sm:p-0">
        <div className="flex">
          <Link href="/">
            <a className="mx-3 text-white">Home</a>
          </Link>
        </div>
        <Link href="https://github.com/mossen">
          <a className="mx-3 text-white">Github</a>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
