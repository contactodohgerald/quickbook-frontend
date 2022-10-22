import React from 'react'
import AboutCard from './AboutCard'

const abouts = [
    {
      uniqueId: 1,
      label: 'Employees Worldwide',
      number: '14,200',
    },
    {
      uniqueId: 2,
      label: 'Twenty offices in nine countries',
      number: 20,
    },
    {
      uniqueId: 3,
      label: 'Revenue in 2022',
      number: '$12.7B',
    }
]

function AboutUs() {
  return (
    <div className="bg-local opacity-20 mt-10" style={{backgroundImage : "url(https://www.intuit.com/oidam/intuit/ic/en_us/images/01-g/building20-hero5-icom-all-1920x1080.jpg)"}}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-lg font-semibold text-indigo-600">About Quickbook</h2>
                <h1 className="text-xl font-bold ">Quickbook believes everyone should have the opportunity to prosper and we never stop working to find new innovative ways to make that possible.</h1>
            </div>
            <div className="mt-10 dark:bg-gray-800 opacity:50">
                <h1 className="text-4xl font-extrabold text-center text-white mt-5">Powering Prosperity Around the World</h1>
                <p className="text-center font-bold text-white mb-5">Quickbook is the global technology platform that helps consumers and small businesses overcome their most important financial challenges.</p>
                <dl className="space-y-12 md:grid md:grid-cols-3  md:gap-y-10 md:space-y-0">
                    {abouts.map((about) => (
                        <AboutCard key={about.uniqueId} label={about.label} number={about.number} />
                    ))}
                </dl>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
