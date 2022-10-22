import React from "react"

function AboutCard({label, number}) {
    return(
        <div className="p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-200 dark:border-gray-700">
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-center leading-none text-indigo-600 dark:text-indigo-900">{number}</h1>
            <p className="mb-3 text-center font-normal text-black dark:text-black">{label}</p>
        </div>
    )
}

export default AboutCard