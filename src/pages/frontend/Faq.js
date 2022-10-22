import React from 'react'
import { Link } from 'react-router-dom'

function Faq() {
  return (
    <div className=" mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-lg font-semibold text-indigo-600">FAQ</h2>
                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">FREQUENTLY ASKED QUESTION</p>
            </div>
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>What is QuickBook?</span>
                    <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-white">QuickBook Online is a cloud based financial management software. Its designed to slash the time you spend managing your business finances, by helping you with tasks such as:</p>
                        <ul className="text-white">
                            <li> - Creating estimates and invoices</li>
                            <li> - Tracking sales and cash flow</li>
                            <li> - Managing your customers and suppliers</li>
                            <li> - Monitoring your tax and making tax return much easier</li>
                            <li> - Understanding your company's performance</li>
                            <li> - Planning ahead and budgeting</li>
                        </ul>
                        <p className="mb-2 text-white">Being a true cloud solution, there's no need to install any software. You access QuickBook Online straight from your internet browser on any computer or web enabled device whenever, wherever.</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span>What are the System requirements for QuickBook ?</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-white">Recommended system requirements</p>
                        <ul className="text-white">
                            <li> - Windows PC: 1 GHz computer with 256 MB of RAM running Windows XP or later</li>
                            <li> - Apple Mac: Intel-based Mac running OS X 10.5 or later</li>
                            <li> - Latest version of Internet Explorer, Firefox, Google Chrome or Safari for Mac</li>
                            <li> - High-speed internet connection (DSL, cable, T1) </li>
                        </ul>
                        <strong>Note:</strong> QuickBooks is not supported on Linux, including Ubuntu and Fedora 
                        <strong>Internet Connection</strong>
                        <p className="mb-2 text-white">QuickBook works best with a fast broadband Internet connection.</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                    <span>Which QuickBook Plan is right for me and what is monthly subscription cost?</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-white">There are three plans to choose from to suite your business' needs at an affordable monthly subscription. We recommend you choose the plan with the feature set that meets your business needs today, you can upgrade to a higher plan as your business grows.</p>
                        <Link to="pricing">Start comparing plans and view the latest pricing and promotions.</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq