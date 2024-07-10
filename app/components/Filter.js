import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Filter({ filters }) {


    return (
        <>
            <form className="mt-4">
                {filters.map((section) => (
                    <Disclosure key={section.name} as="div" className="border-t border-gray-200 pb-4 pt-4">
                        <fieldset>
                            <legend className="w-full px-2">
                                <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                    <span className="text-sm font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 rotate-0 transform group-data-[open]:-rotate-180"
                                        />
                                    </span>
                                </DisclosureButton>
                            </legend>
                            <DisclosurePanel className="px-4 pb-2 pt-4">
                                <div className="space-y-6">
                                    {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                                defaultValue={option.value}
                                                id={`${section.id}-${optionIdx}-mobile`}
                                                name={`${section.id}[]`}
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                className="ml-3 text-sm text-gray-500"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </DisclosurePanel>
                        </fieldset>
                    </Disclosure>
                ))}
            </form>
        </>
    )
}