import React from 'react'

function Contact() {
  return (
    <div className=" mt-10" id='contact'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Contact</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">QUICKBOOK CUSTOMER SUPPORT</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact us</h2>
              <form method='post' action='#'>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                      <input type="email" id="email" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" placeholder="Email" required />
                  </div>
                  <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="subject" placeholder="Subject" required/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                    <textarea  required id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." name="message"></textarea>
                  </div>
                  <button type="submit" className="items-center justify-center rounded-md text-blue-700 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-1 mr-2 mb-3 dark:bg-blue-300 dark:hover:bg-blue-200 focus:outline-none dark:focus:ring-blue-800 mt-5">Contact Us</button> 
              </form>
            </div>
            <div className="mt-10">
              <img src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/image/lifestyle/sbseg-Contact-us.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
