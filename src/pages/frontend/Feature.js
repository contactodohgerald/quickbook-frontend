import React from 'react'

import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Hello organised',
    description:
      'QuickBook Online keeps everything in its right place, so you’ll always have what you need when you need it. ',
    icon: GlobeAltIcon,
  },
  {
    name: 'Free up time',
    description:
      'Sync with your bank and favourite apps, so your books are always accurate and up to date. ',
    icon: ScaleIcon,
  },
  {
    name: 'Claim everything',
    description:
      'Claim every entitlement at tax time with your expense receipts stored and sorted in QuickBook. ',
    icon: BoltIcon,
  },
  {
    name: ' Unlimited support',
    description:
      'With QuickBook free and unlimited customer support, help is always just a click away. ',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

function Feature() {
  return (
    <div className="py-12 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
            Powerful accounting tools for small and growing businesses
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Feature
