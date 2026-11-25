import { Fragment, useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import logo from "../../Img/logo.png"; // Import the logo

const navigation = [
  { name: 'Features', href: '/#features', current: false },
  { name: 'Our Vision', href: '/#vision', current: false },
  { name: 'FAQs', href: '/#faq', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [navbarClass, setNavbarClass] = useState('fixed w-full z-40 transition-transform duration-300');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      

      if (scrollTop > previousScrollY + 200) {
        setShowNavbar(false);
        previousScrollY = scrollTop;
      } else if (scrollTop < previousScrollY - 50) {
        setShowNavbar(true);
        previousScrollY = scrollTop;
      }



      if (scrollTop > 100) {
        setNavbarClass('fixed w-full z-40 border-b bg-white backdrop-blur-xl transition-transform duration-300');
      } else {
        setNavbarClass('bg-transparent fixed w-full z-40 transition-transform duration-300');
      }

      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer, showNavbar]);

  return (
    <Disclosure as="nav" className={`${showNavbar ? 'translate-y-0 z-50' : '-translate-y-full'} ${navbarClass}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to='/'>
                    <img
                      data-aos="fade-right" data-aos-delay="200"
                      className="h-11 w-auto"
                      src={logo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                {/* links nav device design */}
                <div className="hidden sm:flex items-center justify-center sm:ml-12 ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'border-y-[1.5px] border-transparent text-slate-800 transition-[1s] hover:text-teal-700 hover:bg-slate-50',
                          'px-3 py-2 text-sm'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link data-aos="fade-left" data-aos-delay="200"
                  to="/recipes" className="font-normal hidden sm:block rounded-full py-2 px-4 text-sm font-semibold text-slate-800 hover:text-teal-700 mr-1">
                  Recipes
                </Link>
                <Link data-aos="fade-left" data-aos-delay="200"
                  to="/try" className="font-normal underline lg:block inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 text-teal-700 hover:text-white hover:bg-teal-700 mr-3 active:bg-teal-200 active:text-black focus-visible:outline-blue-600">
                  ME
                </Link>
                <Link data-aos="fade-left" data-aos-delay="200"
                  to="/download" className="font-normal hidden lg:block inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-700 text-white hover:text-white hover:bg-teal-600 active:bg-teal-200 active:text-black focus-visible:outline-blue-600">
                  Download App
                </Link>
                <Link data-aos="fade-left" data-aos-delay="200"
                  to="/download" className="sm:block lg:hidden inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-700 text-white hover:text-white hover:bg-teal-600 active:bg-teal-200 active:text-black focus-visible:outline-blue-600">
                  Download
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-slate-800 border-b hover:bg-gray-700 hover:text-white',
                    'block hover:rounded-md px-3 last:border-0 py-2 text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
