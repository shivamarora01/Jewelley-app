const incentives = [
    {
      name: 'Free Shipping',
      description: "Orders Over $200",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: '24/7 Customer Support',
      description: 'Hours: 8am - 11 pm',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Money Back Guarantee',
      description: "Within 30 Day",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
      name: 'Free Returns',
      description: "Hours: 8am - 11 pm",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
  ]
  
  export default function Component6() {
    return (
      <div className="relative bg-gray-50 flex items-center justify-center">
        <div className="absolute w-full mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col items-center justify-center">
                <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
                <h3 className="mt-6 text-sm font-medium text-white">{incentive.name}</h3>
                <p className="mt-2 text-sm text-white">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:h-[400px] sm:h-[250px]">
            <img src="../bg_dark 1.svg" className="w-full h-full object-cover"/>
        </div>
      </div>
    )
  }
  