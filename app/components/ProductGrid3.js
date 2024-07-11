/*
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
const products = [
    {
        id: 1,
        name: "Product 1",
        price: "24100",
        imageSrc: "../FeaturedImg1.svg",
        availability: 'White and Black',
        imageAlt: "Product 1 Image",
    },
    {
        id: 2,
        name: "Product 2",
        price: "36200",
        imageSrc: "../FeaturedImg2.svg",
        availability: 'White and Black',
        imageAlt: "Product 2 Image",
    },
    {
        id: 3,
        name: "Product 3",
        price: "57300",
        imageSrc: "../FeaturedImg3.svg",
        availability: 'White and Black',
        imageAlt: "Product 3 Image",
    },
    {
        id: 4,
        name: "Product 4",
        price: "86400",
        imageSrc: "../FeaturedImg4.svg",
        availability: 'White and Black',
        imageAlt: "Product 4 Image",
    },
    {
        id: 5,
        name: "Product 1",
        price: "15700",
        imageSrc: "../FeaturedImg1.svg",
        availability: 'White and Black',
        imageAlt: "Product 1 Image",
    },
    {
        id: 6,
        name: "Product 2",
        price: "28800",
        imageSrc: "../FeaturedImg2.svg",
        availability: 'White and Black',
        imageAlt: "Product 2 Image",
    },
    {
        id: 7,
        name: "Product 3",
        price: "37800",
        imageSrc: "../FeaturedImg3.svg",
        availability: 'White and Black',
        imageAlt: "Product 3 Image",
    },
    {
        id: 8,
        name: "Product 4",
        price: "40000",
        imageSrc: "../FeaturedImg4.svg",
        availability: 'White and Black',
        imageAlt: "Product 4 Image",
    },
    // Add more products as needed
];
  
  export default function ProductGrid3() {
    return (
        <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group text-sm">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                <p className="italic text-gray-500">{product.availability}</p>
                <p className="mt-2 font-medium text-gray-900">₹{product.price}</p>
                <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a>
              </div>
              </div>
            ))}
          </div>
        </div>

    )
  }
  