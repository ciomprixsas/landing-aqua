import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const list = [
  { title: 'HOME', url: '/home', tab: 'home' },
  { title: 'QUIÉNES SOMOS', url: '#somos', tab: 'somos' },
  { title: 'SERVICIOS', url: '#servicios', tab: 'servicios' },
  { title: 'SECTORES', url: '#sectores', tab: 'sectores' },
  { title: 'BENEFICIOS', url: '#beneficios', tab: 'beneficios' },
  { title: 'CONTACTO', url: '#contacto', tab: 'contacto' },
];

// const icon = '/icons/logo-profile.png';

interface HeaderProps {
  active: any;
}

export const Header: React.FC<HeaderProps> = ({
  active,
}: HeaderProps): JSX.Element => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (active) {
      document.title = 'Sitio Aq';
    }
  });

  return (
    <div className="w-full fixed z-50 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex max-w-screen-xxl px-6 py-4 mx-auto lg:items-center justify-between lg:flex-row lg:px-16 lg:py-5">
        <div className="py-0 flex flex-row w-full lg:w-auto items-center justify-between lg:ml-8">
          <Link href={"/"}>
            <a
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none"
            >
              <img className="w-3/6" src="/icons/vercel.svg" />
            </a>
          </Link>
          <div className="contents">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden mr-4 opacity-75 focus:outline-none"
            >
              {isOpen ? (
                <img src="/icons/close.png" />
              ) : (
                  <img src="/icons/menu.png" />
                )}
            </button>
          </div>
        </div>
        <nav className="flex-col lg:flex-row flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end items-center lg:mr-8">
          {list.map((item, i) => (
              <Link
                key={item.tab}
                href={item.url}
              >
                <a
                  key={item.tab}
                  className={`px-4 py-2 mt-2 text-base ${item.tab === active ? 'bg-gray-200 font-bold' : 'font-normal'} tracking-wide bg-transparent rounded-lg md:mt-0 md:ml-1 hover:text-gray-900 hover:bg-gray-100 focus:text-gray-900 focus:outline-none`}
                >
                  {item.title}
                </a>
              </Link>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div>
          <nav className="flex flex-col flex-grow pb-2 md:justify-start">
            {list.map((item, i) => (
              <Link
                key={item.tab}
                href={item.url}
              >
                <a
                  key={item.tab}
                  className={`block py-2 px-4 border-b border-gray-200 text-sm ${item.tab === active ? 'font-bold' : 'font-light'} tracking-wide focus:outline-none`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};