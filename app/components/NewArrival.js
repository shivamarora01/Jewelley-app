export default function NewArrival() {
  return (
    <div className="bg-gray-50 my-3">
      <div className="mx-auto max-w-2xl px-4 lg:py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-xl uppercase">
              New Arrival
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <img
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  src="../NewArrivalImg1.png"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-3 text-base text-black text-semibold text-xl text-center">
              Product Name
              </p>
              <p className="mt-2 text-base text-sm text-gray-500 text-center">
              Elevate your ear party with a choice of mix and matched stacks or striking solo statements. The choice is yours!
              </p>
              <div className="flex justify-center mt-1">
                <button className="px-[20px] py-[6px] border border-solid border-[1px] border-[#FF8BBC] mt-2 text-[#881545] text-sm">SHOP NOW</button>   
              </div>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <img
                  alt="Front zipper pouch with included key ring."
                  src="../NewArrivalImg2.png"
                  className="h-full w-full object-cover object-cover"
                />
              </div>
              <p className="mt-3 text-base text-black text-semibold text-xl text-center">
              Product Name
              </p>
              <p className="mt-2 text-base text-sm text-gray-500 text-center">
              Elevate your ear party with a choice of mix and matched stacks or striking solo statements. The choice is yours!
              </p>
              <div className="flex justify-center mt-1">
                <button className="px-[20px] py-[6px] border border-solid border-[1px] border-[#FF8BBC] mt-2 text-[#881545] text-sm">SHOP NOW</button>   
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
