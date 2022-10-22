import React from 'react'

function DT_DD({value, valueHold}) {
  return (
    <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{value}</dt>
        <dd className="text-lg font-semibold">{valueHold}</dd>
    </div>
  )
}

export default DT_DD