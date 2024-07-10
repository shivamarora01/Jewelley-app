import React from "react";

const products = [
    {
        id: 1,
        name: "Product 1",
        price: "$100",
        imageSrc: "../FeaturedImg1.svg",
        imageAlt: "Product 1 Image",
    },
    {
        id: 2,
        name: "Product 2",
        price: "$200",
        imageSrc: "../FeaturedImg2.svg",
        imageAlt: "Product 2 Image",
    },
    {
        id: 3,
        name: "Product 3",
        price: "$300",
        imageSrc: "../FeaturedImg3.svg",
        imageAlt: "Product 3 Image",
    },
    {
        id: 4,
        name: "Product 4",
        price: "$400",
        imageSrc: "../FeaturedImg4.svg",
        imageAlt: "Product 4 Image",
    },
    {
        id: 5,
        name: "Product 1",
        price: "$100",
        imageSrc: "../FeaturedImg1.svg",
        imageAlt: "Product 1 Image",
    },
    {
        id: 6,
        name: "Product 2",
        price: "$200",
        imageSrc: "../FeaturedImg2.svg",
        imageAlt: "Product 2 Image",
    },
    {
        id: 7,
        name: "Product 3",
        price: "$300",
        imageSrc: "../FeaturedImg3.svg",
        imageAlt: "Product 3 Image",
    },
    {
        id: 8,
        name: "Product 4",
        price: "$400",
        imageSrc: "../FeaturedImg4.svg",
        imageAlt: "Product 4 Image",
    },
    // Add more products as needed
];

function ProductGrid() {
    return (
        <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;
