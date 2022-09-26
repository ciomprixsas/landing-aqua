import React from 'react';
import { Text, Title } from '../';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({

}: FooterProps): JSX.Element => {
  return (
    <div className="flex flex-col max-w-screen-xxl bg-indigo-900 mx-auto justify-start md:flex-row items-center md:items-start text-center md:text-left py-10 px-8 md:px-16 lg:px-16">
        <div className="flex w-full md:w-[30%] flex-col lg:pl-8 items-center md:items-start">
            <a
                href="/"
                className="md:ml-10 mt-2"
            >
                <img className="w-48 md:w-3/6" src="/vercel.svg" />
            </a>
        </div>
        <div className="flex w-full md:w-[30%] flex-col text-sm font-thin pl-2">
            <Title
                color="#CCC"
                align="text-lefts"
                size="1.22rem"
                weight={600}
                cssClass="mt-2 mb-0"
            >
                Contacto
            </Title>
            <hr className='my-2 h-0.5 w-8 bg-blue-800 border-0' />
        </div>
        <div className="flex w-full md:w-[30%] flex-col text-sm font-thin pl-2">
            <Title
                color="#CCC"
                align="text-lefts"
                size="1.22rem"
                weight={600}
                cssClass="mt-2 mb-0"
            >
                Legales
            </Title>
            <hr className='my-2 h-0.5 w-8 bg-blue-800 border-0' />
        </div>
    </div>
  );
}
