import { PlusIcon } from '@heroicons/react/20/solid'

export default function MobileFilter({ filters, setMobileFiltersOpen }) {

    return (
        <>
            <aside>
                <h2 className="sr-only">Filters</h2>

                <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="inline-flex items-center lg:hidden"
                >
                    <span className="text-sm font-medium text-gray-700">Filters</span>
                    <PlusIcon aria-hidden="true" className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                </button>

                <div className="hidden lg:block">
                    <form className="space-y-10 divide-y divide-gray-200">
                        {filters?.map((section, sectionIdx) => (
                            <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                                <fieldset>
                                    <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                                    <div className="space-y-3 pt-6">
                                        {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                    defaultValue={option.value}
                                                    id={`${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                        ))}
                    </form>
                </div>
            </aside>

        </>)
}