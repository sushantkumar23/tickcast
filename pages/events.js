import Image from "next/Image"

import event_1 from "../public/event_1.png"
import event_2 from "../public/event_2.png"
import event_3 from "../public/event_3.png"

const events = [
  {
    id: 1,
    name: "Global DeFi Summit",
    href: "#",
    price: "0.2 SOL",
    description:
      "Learn about decentralized finance and the future of financial markets.",
    options: "8 colors",
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
    options: "Black",
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
    options: "Black",
    imageSrc: event_3,
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
]

export default function Events() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Events
            </h2>
            <p className="text-xl text-gray-500">
              Book tickets for any events from our platform with a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
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
                  <h3 className="text-sm font-medium text-gray-900">
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
      </div>
    </div>
  )
}
