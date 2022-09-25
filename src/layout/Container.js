import React from 'react'

const Container = ({ children }) => {
  return (
    // sayfayı 3'e böldük . 3 ayrı component olacak
    <div className="flex min-h-screen max-w-7xl mx-auto ">
      {children}
    </div>
  )
}

export default Container
