import { Fragment, useState, useEffect } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    // const [currentState, setCurrentState] = useState(false)
    const [isActive, setIsActive] = useState(false)
    // const [navigation, setNavigation] = useState([
    //     { name: 'Dashboard', href: '#', current: false },
    //     { name: 'Team', href: '#', current: false },
    //     { name: 'Projects', href: '#', current: false },
    //     { name: 'Calendar', href: '#', current: false },
    // ])

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Our Services', href: '#' },
        { name: 'Our Locations', href: '#' },
        { name: 'Contact Us', href: '#' },
    ]

    useEffect(() => {
        setIsActive('Dashboard')
    }, [])

    // function changeLinkStyle(index) {
    //     const newNav = [...navigation]
    //     newNav[index].current = true

    //     setNavigation(newNav)
    // }
    return (
        <Disclosure
            as='nav'
            className='bg-white'
        >
            {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='flex items-center sm:hidden'>
                                {/* Mobile menu button*/}
                                <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-translucent-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex flex-shrink-0 items-center'>
                                    <img
                                        className='w-16 h-auto'
                                        src='./hra-logo.jpg'
                                        alt='Health Risk Assessment Logo'
                                    />
                                </div>
                                <div className='hidden sm:ml-6 sm:block'>
                                    <div className='flex space-x-2 md:space-x-4'>
                                        {navigation.map((item, index) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    isActive === item.name
                                                        ? 'bg-black text-white'
                                                        : 'text-black hover:bg-translucent-red',
                                                    'rounded-md px-3 py-2 text-center text-sm font-medium'
                                                )}
                                                aria-current={
                                                    isActive
                                                        ? 'page'
                                                        : undefined
                                                }
                                                onClick={() =>
                                                    // changeLinkStyle(index)
                                                    setIsActive(item.name)
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center pr-1 sm:ml-6 sm:pr-0'>
                                <a
                                    href='#'
                                    className='relative rounded-md w-min text-center bg-black text-white hover:bg-translucent-red hover:text-black px-2 py-1 text-sm font-normal md:w-max md:px-3 md:py-2 md:font-medium'
                                >
                                    Book an appointment
                                </a>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className='sm:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className={classNames(
                                        isActive === item.name
                                            ? 'bg-black text-white'
                                            : 'text-black hover:bg-translucent-red',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={() => setIsActive(item.name)}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
