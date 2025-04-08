import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-100 py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Blog App. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
