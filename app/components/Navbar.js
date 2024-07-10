// import React from 'react'

// function Navbar() {
//   return (
//     <div className='flex justify-between gap-5 h-[88px] '>
//       <div className='bg-red-400 h-full w-1/3'>
//       </div>
//       <div className='bg-red-400 h-full w-1/3 flex items-center justify-center'>
//       <div className="relative w-[80%] flex items-center">
//             <input
//               type="text"
//               className="w-full border border-[#664549] p-2 bg-[#21090B] text-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#6D6D6D] rounded-md"
//               placeholder="Search by Jewellery"
//             />
//             <div className="absolute flex flex-reverse-col">
//               <img
//                 src="../searchLens.png"
//                 alt="Search by Jewwllery"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//       </div>
//       <div className='h-full w-1/3 flex items-center justify-center px-10 bg-red-600'>
//         <div className='w-1/4 bg-red-400 h-[15.45px]'>
//             <img src='../NavbarImg1.svg' className='h-full w-full object-contain'/>
//         </div>
//         <div className='w-1/4 bg-red-400 h-[15.45px]'>
//             <img src='../NavbarImg2.svg' className='h-full w-full object-contain'/>
//         </div>
//         <div className='w-1/4 bg-red-400 h-[15.45px]'>
//             <img src='../NavbarImg3.svg' className='h-full w-full object-contain'/>
//         </div>
//         <div className='w-1/4 bg-red-400 h-[15.45px]'>
//             <img src='../NavbarImg4.svg' className='h-full w-full object-contain'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


/*
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
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'ALL JEWELLERY', href: '#', current: true },
  { name: 'GOLD', href: '#', current: false },
  { name: 'DIAMOND', href: '#', current: false },
  { name: 'EARRINGS', href: '#', current: false },
  { name: 'RINGS', href: '#', current: false },
  { name: 'BESTSELLERS', href: '#', current: false },
  { name: 'MIA', href: '#', current: false },
  { name: 'COLLECTIONS', href: '#', current: false },
  { name: 'WEDDING', href: '#', current: false },
  { name: 'GIFTING', href: '#', current: false },
  { name: 'HARVEST', href: '#', current: false },
  { name: 'MORE', href: '#', current: false },
  { name: 'SALE', href: '#', current: false, sale: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-0">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center lg:mx-5">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 lg:px-0 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:gap-3 lg:flex lg:items-center lg:mx-5">
          <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <HomeIcon aria-hidden="true" className="h-6 w-6 text-[#881F8B]" />
            </button>
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6 text-[#881F8B]" />
            </button>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 lg:p-1 lg:ml-0 flex-shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-[#881F8B]" />
            </button>
          </div>
        </div>
        <nav aria-label="Global" className="hidden bg-[#EACBEB] lg:flex lg:py-2 lg: px-5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                item.sale ? 'bg-[#914493] lg:ml-10 text-white' : '',
                'inline-flex items-center rounded-md px-3 py-2 text-xs font-medium',
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">{user.name}</div>
              <div className="text-sm font-medium text-gray-500">{user.email}</div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

