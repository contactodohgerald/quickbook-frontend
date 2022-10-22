import React from 'react'
import { Link } from 'react-router-dom'

function CTA({title, url}) {
  return (
    <Link  className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" to={url}>
      <div className="flex items-center">
      
        <span>{title}</span>
      </div>
      <span>
        Procced <span dangerouslySetInnerHTML={{ __html: '&RightArrow;' }}></span>
      </span>
    </Link>
  )
}

export default CTA
