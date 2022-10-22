import React from 'react'
import Layout from './Layout'
import Footer from './Footer'
import Pricing from './Pricing'

function FreeTrail() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
        <div className="relative overflow-hidden ">
            <div className="mx-auto max-w-7xl">
                <Layout />
            </div>
        </div>
        <Pricing />
        <Footer />
    </div>
  )
}

export default FreeTrail
