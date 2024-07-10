import { ArrowDownIcon } from "@heroicons/react/20/solid"

const products = [
    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg1.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },
    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg2.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg3.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg4.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg5.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg6.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg7.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },    {
      id: 1,
      name: 'Bora Armchair',
      description: 'Elevate your ear party with a choice of mix',
      href: '#',
      imageSrc:  '/FeaturedImg8.svg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      sellingPrice: '14000',
      mrpPrice: '20000'
    },
    // More products...
  ]
  
  export default function FeaturedProduct() {
    return (
      <div className="bg-[#F9E6FF]">
        <div className="mx-auto max-w-2xl px-4 lg:py-8 sm:px-10 sm:py-20 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center">Featured Products</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div key={product.id} className="flex justify-center items-center">
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900 text-center">{product.name}</h3>
                    <p className="mt-1 text-xs text-gray-500 text-center">{product.description}</p>
                  </div>
                  <div className="relative mt-2">
                    <h3 className="text-lg font-medium text-gray-900 text-center">₹{product.sellingPrice}
                    <span className="ml-2 mt-1 text-md text-gray-500 text-center line-through">₹{product.mrpPrice}</span>
                    </h3>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                  </div>
                  <div className="flex justify-center mt-1">
                <button className="px-[20px] py-[6px] border border-solid border-[1px] border-[#FF8BBC] mt-2 text-[#881545] text-sm">SHOP NOW</button>   
              </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-md text-[#9B2053] flex justify-center items-center uppercase text-center mt-10 hover:underline hover:cursor-pointer">
  View More <span className="inline-flex items-center ml-1"> <ArrowDownIcon className="w-5 h-5" /> </span>
</h2>
        </div>
      </div>
    )
  }
  