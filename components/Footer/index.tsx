import React from 'react';
import { Text, Title } from '../';
import Link from 'next/link';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({

}: FooterProps): JSX.Element => {
  return (
    <div key={'contacto'} id='contacto' className='flex flex-col max-w-screen-xxl mx-auto bg-cover bg-bottom py-10 px-8 md:px-16 lg:px-16'
        style={{ backgroundImage: "url('images/carousel-2.jpg')" }}
    >
        <div className="flex flex-col justify-start md:flex-row items-center md:items-start text-center md:text-left ">
            <div className="flex w-full md:w-[30%] flex-col lg:pl-8 items-center md:items-start md:ml-12 text-right">
                <Link
                    href="/"
                    className="ml-2 md:ml-2 lg:ml-4 xl:ml-14 mt-4"
                >
                    <img className="w-48 md:w-36 lg:w-48" src="/icons/vercel-light.png" />
                </Link>
            </div>
            <div className="flex w-full md:w-[30%] lg:w-[20%] mt-5 md:mt-0 flex-col text-sm font-thin pl-2 text-white">
                <Title
                    color="#FFF"
                    align="text-lefts"
                    size="1.25rem"
                    weight={600}
                    cssClass="mt-2 mb-0"
                >
                    Contacto
                </Title>
                <hr className='my-2 h-0.5 w-8 bg-blue-800 border-0' />
                <span className='mt-3 font-medium'>Operaciones:</span>
                <span>
                    Av. Séneca 134 - Tercer piso, Col.
                    Polanco, Delegación: Miguel Hidalgo C.P. 11560 - CDMX, México.
                </span>
                <span className='font-medium'>Teléfono:</span>
                <span>+ (52) 55 8596 5748 / 49  <br/> + (52) 55 6363 4776 / 77</span>
            </div>
            <div className="flex w-full md:w-[30%] lg:w-[20%] flex-col text-sm font-thin pl-2 text-white">
                <Title
                    color="#FFF"
                    align="text-lefts"
                    size="1.25rem"
                    weight={600}
                    cssClass="mt-2 mb-0"
                >
                    Legales
                </Title>
                <hr className='my-2 h-0.5 w-8 bg-blue-800 border-0' />
            </div>
        </div>
        <div className='flex w-full mt-4'>
            <Title
                color="#FFF"
                align="text-center"
                size="0.92rem"
                weight={400}
                cssClass="mt-2 mb-0"
            >
                Copyright © 2020 l Aqua Interactive. Todos los derechos reservados.
            </Title>
        </div>
    </div>
  );
}
