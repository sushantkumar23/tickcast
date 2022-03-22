/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/solid"

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

const features = [
  {
    name: "On-Chain Orderbooks",
    description:
      "Full limit orderbooks with interface similar to centralized exchanges",
    icon: GlobeAltIcon,
  },
  {
    name: "Ultra-low Cost",
    description:
      "Lower transaction costs than any other DEX: $0.00001 per transaction",
    icon: ScaleIcon,
  },
  {
    name: "Instant Settlement",
    description: "Sub-second trading speed and settlement",
    icon: LightningBoltIcon,
  },
  {
    name: "Complete transparency",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="pt-6 bg-gray-900">
          <nav
            className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt=""
                  />
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
              >
                Connect Wallet
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-5 mt-6">
                  <a
                    href="#"
                    className="block w-full px-4 py-3 font-medium text-center text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
                  >
                    Connect Wallet
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div>
              <div className="max-w-md px-4 mx-auto sm:max-w-5xl sm:px-6 sm:text-center lg:px-0 lg:flex">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">
                      Faster, Cheaper and Decentralised
                    </span>
                    <span className="block text-indigo-400">
                      marketplace for NFTs
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Tickcast brings the speed and convenience of centralized
                    exchanges to DeFi while remaining fully trustless and
                    transparent.
                  </p>
                  <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Trade on Tickcast
                      </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
      <div className="py-12 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-400 uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-200 sm:text-4xl">
              A better way to trade NFT assets
            </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-300 lg:mx-auto">
              Brining cutting edge technology to the NFT trading
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-300">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
