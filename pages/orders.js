/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Aurorian #3203",
    href: "#",
    price: "SOL 4",
    availability: "White and Black",
    imageSrc:
      "https://solanart.io/_next/image?url=https%3A%2F%2Fcdn-image.solanart.io%2Funsafe%2F600x600%2Ffilters%3Aformat(webp)%2Farweave.net%2FPZ44wxtIvhsBJgzTSCtp7lALAvMINp2L8WwPCv84948&w=3840&q=75",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  },
  {
    id: 2,
    name: "Aurorian #1640",
    href: "#",
    price: "SOL 24",
    availability: "Washed Black",
    imageSrc:
      "https://solanart.io/_next/image?url=https%3A%2F%2Fcdn-image.solanart.io%2Funsafe%2F600x600%2Ffilters%3Aformat(webp)%2Farweave.net%2FYx_uqT3RcZNwhkPddy9jOB4ljzVyHlxq04auyzcl810&w=3840&q=75",
    imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
  },
  {
    id: 3,
    name: "Aurorian #7823",
    href: "#",
    price: "SOL 456",
    availability: "Blue",
    imageSrc:
      "https://solanart.io/_next/image?url=https%3A%2F%2Fcdn-image.solanart.io%2Funsafe%2F600x600%2Ffilters%3Aformat(webp)%2Farweave.net%2FOsbASzkZgdWVDRple-xHw0tq00poiqJgZ7i6x-_zXh0&w=3840&q=75",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h1 className="mb-1 text-2xl font-bold">Aurory</h1>
        <p className="mb-6 text-lg text-gray-600">Ask Prices</p>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="text-sm group">
              <div className="w-full overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout="fill"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
