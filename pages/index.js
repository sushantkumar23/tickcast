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
import Image from "next/image"
import Link from "next/link"

import {
  InboxIcon,
  SwitchHorizontalIcon,
  TrendingUpIcon,
  CashIcon,
  CollectionIcon,
  DatabaseIcon,
  UserGroupIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline"
import event from "../public/event.png"
import sports from "../public/sports.png"
import event_1 from "../public/event_1.png"
import event_2 from "../public/event_2.png"
import event_3 from "../public/event_3.png"

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"

const transferFeatures = [
  {
    id: 1,
    name: "Minimal fees.",
    description:
      "Built on top of Solana, Cryptik leverages the faster transaction time while ensuring the lowest transaction fees for all exchange of tickets",
    icon: CashIcon,
  },
  {
    id: 2,
    name: "No middlemen.",
    description:
      "The underlying blockchain transaction ensures that no middlemen is involved in moving tickets for both primary & secondary transactions",
    icon: UserGroupIcon,
  },
  {
    id: 3,
    name: "Fully trustless.",
    description:
      "No breach of trust as each transaction is written down into blockchain to have a verifiable proof of ticket purchases",
    icon: BadgeCheckIcon,
  },
]
const events = [
  {
    id: 1,
    name: "Global DeFi Summit",
    href: "#",
    price: "0.2 SOL",
    description:
      "Learn about decentralized finance and the future of financial markets.",
    imageSrc: event_1,
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Tomorrowland 2022",
    href: "#",
    price: "1200 USDC",
    description:
      "Tomorrowland is the world's largest dance music festival bringing electronic music's biggest stars.",
    imageSrc: event_2,
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 2,
    name: "HackFS 2022",
    href: "#",
    price: "30 USDC",
    description:
      "Build the foundation for the decentralized web. A virtual Hackathon by ETHGlobal and Protocol Labs.",
    imageSrc: event_3,
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
]

const features = [
  {
    name: "Optimised Primary Sale",
    description:
      "Sell tickets worldwide faster with minimal fees and seamless experience for buyers",
    icon: GlobeAltIcon,
  },
  {
    name: "Secondary Market Revenue",
    description:
      "Generate revenue from hassle-free secondary-sale through royalty fees for secondary sale",
    icon: ScaleIcon,
  },
  {
    name: "Used tickets = Digital Collectibles",
    description:
      "Tickets on blockchain last forever as a digital collectible for the buyers",
    icon: LightningBoltIcon,
  },
  {
    name: "Seamless experience",
    description:
      "Seamless experience for your users; across the worldwide and across all platforms",
    icon: AnnotationIcon,
  },
]

const steps = [
  {
    name: "Connect",
    description:
      "Connect your Solana wallet to pay for tickets on Cryptik to get started",
    icon: SwitchHorizontalIcon,
  },
  {
    name: "Mint",
    description:
      "Mint tickets for all the events that you want to attend while they last!",
    icon: DatabaseIcon,
  },
  {
    name: "Trade",
    description:
      "Your NFT ticket will be available in your wallet to use or trade across the world.",
    icon: TrendingUpIcon,
  },
  {
    name: "Collect",
    description:
      "Capture a piece of loved events through NFT collectible tickets for future rewards/discounts!",
    icon: CollectionIcon,
  },
]

export default function Example() {
  return (
    <div>
      <svg
        className="absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width={364}
        height={384}
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width={364}
          height={384}
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
      {/* Hero section */}
      <div className="pt-10 bg-gray-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div>
            <div className="max-w-md px-4 mx-auto sm:max-w-5xl sm:px-6 sm:text-center lg:px-0 lg:flex lg:justify-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-100 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Building the world&#39;s first</span>
                  <span className="block text-indigo-500">
                    NFT tickets marketplace
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Buy, trade and collect tickets on the blockchain
                </p>
                <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Join waitlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Events section */}
      {/* <div className="bg-gray-900">
          <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Events</h2>
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-100">
                Trending Events
              </h2>

              <Link href="/events" passHref>
                <a className="hidden text-sm font-semibold text-indigo-500 hover:text-indigo-4d00 sm:block">
                  Browse all events<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 mt-6 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="relative flex flex-col overflow-hidden bg-gray-200 border border-gray-500 rounded-lg shadow-lg group"
                >
                  <div className="bg-gray-200 aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
                    <Image
                      src={event.imageSrc}
                      alt={event.imageAlt}
                      height={200}
                      width={200}
                      layout="responsive"
                      className="object-cover object-center w-full h-full sm:w-full sm:h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4 space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      <a href={event.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {event.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                    <div className="flex flex-col justify-end flex-1">
                      <p className="text-sm italic text-gray-500">
                        Starting from
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        {event.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      {/* Re-imagine section */}
      <div className="relative py-16 overflow-hidden bg-gray-900">
        <div className="relative">
          <div className="items-center lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                    <InboxIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-100">
                    Reimagining the future of tickets with the power of NFTs
                  </h2>
                  <p className="mt-4 text-lg text-gray-200">
                    The vision of Cryptik is to be the most advanced crypto
                    peer-to-peer ticketing platform on the planet. Trustless
                    system that ensures that gets you tickets for your favourite
                    events at lighning speed.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  layout="responsive"
                  height={281}
                  width={500}
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={event}
                  alt="Concert show"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Better Ticketing section */}
      <div className="py-16 overflow-hidden bg-gray-800 lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-50 sm:text-4xl">
              A better way to ticketing
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-200">
              Cryptik works differently to traditional ticketing platforms. Mint
              NFT tickets directly from the organizers with complete ownership.
              If you can no longer attend, trade with other Cryptik users on our
              secondary market or anywhere on the Blockchain.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8 lg:items-center">
            <div className="relative">
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-bold leading-6 text-gray-50">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-200">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full shadow-xl rounded-xl lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={sports}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-100">
              How does this work?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Tried and tested system. Get started by just the following simple
              steps
            </p>
          </div>
          <dl className="mt-12 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {steps.map((step) => (
              <div key={step.name}>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <step.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-bold leading-6 text-gray-100">
                    {step.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-200">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Revolution section */}
      <div className="py-24 overflow-hidden bg-gray-800">
        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                Bringing a revolution to ticketing
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-100">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-300">
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
