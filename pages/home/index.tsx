import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Header, Title, Text, CardSimple,
} from '../../components';

/**
 * module Home
 * @module pages/home
 * @returns JSX.Element
 */
const Home = () => {
  const router = useRouter();
  return (
    <>
        <Header active="home" />
        <div
            className="pt-2 md:pt-16 pb-4 px-0 md:px-0 w-full h-full max-w-screen-xxl mx-auto md:items-center bg-contain bg-no-repeat"
        >
            <div
                className="flex flex-col bg-top bg-center opacity-95 bg-fixed bg-cover bg-no-repeat py-10 px-14 w-100"
                style={{ backgroundImage: "url('/images/carousel-1.png')" }}
            >
                <div className="lg:px-32">
                    <div>
                        <Text
                        color="#FFF"
                        align="text-left"
                        size="1.6rem"
                        weight={400}
                        cssClass="mt-48 mb-2"
                        >
                            Tecnología
                        </Text>
                    </div>
                    <Title
                        color="#FFF"
                        align="text-left"
                        size="2.8rem"
                        weight={600}
                        cssClass="home-title mt-2 mb-2"
                    >
                        AQUA <br />INTERACTIVE
                    </Title>
                    <div>
                        <Text
                            color="#FFF"
                            align="text-left"
                            size="1.2rem"
                            weight={400}
                            cssClass="mb-32 mt-5"
                        >
                            Utilizamos tecnología de punta para
                            <br />
                            innovar procesos empresariales
                        </Text>
                    </div>
                </div>
            </div>

            <div key={'somos'} id='somos' className="flex flex-col md:flex-row py-12 px-14">
                <div className="w-full md:w-2/4 lg:w-2/5 px-0 md:px-8 lg:px-16 py-2">
                    <Text
                        color="#2c3d84"
                        align="text-left"
                        size="1.2rem"
                        weight={700}
                        cssClass="mb-0"
                    >
                        Quiénes Somos
                    </Text>
                    <Title
                        color="#1A1A2E"
                        align="text-left"
                        size="1.8rem"
                        weight={700}
                        cssClass="home-title mt-4 mb-3"
                    >
                        En Aqua Interactive tenemos más de una década de experiencia
                    </Title>
                </div>
                <div className="w-full md:w-2/4 lg:w-3/5 lg:pr-40 lg:mr-10 mt-6 lg:mt-4">
                    <Text
                        color="#0F3460"
                        align="text-left"
                        size="0.96rem"
                        weight={400}
                        cssClass="mb-4"
                    >
                        En el desarrollo e implementación de productos y servicios tecnológicos a nivel global.
                        <br /><br />
                        A través de nuestra fábrica de software, originamos cambios y potenciamos el crecimiento en tu organización.
                        <br /><br />
                        Desarrollamos productos e implementamos servicios a partir de 3 fundamentos que aseguran la calidad y la eficacia de nuestro trabajo:
                        <br /><br />
                    </Text>
                </div>
            </div>

            <div className="flex flex-col md:flex-row py-2 px-14 lg:px-40">
                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <CardSimple title='INNOVACIÓN' marginXl={10} desc='Aplicaciones novedosas, tendencias tecnológicas y evolución de paradigmas.' color='' />
                    <CardSimple title='PERSONALIZACIÓN' marginXl={10} desc='Enfoque en las necesidades específicas de cada cliente.' color='' />
                    <CardSimple title='FLEXIBILIDAD' marginXl={10} desc='Adaptación a los retos que presenta cada proyecto.' color='' />
                </div>
            </div>

            <div key={'servicios'} id='servicios' className="flex flex-col md:flex-row py-12 px-14">
                <div className="w-full md:w-2/4 lg:w-2/5 px-0 md:px-8 lg:px-16 py-2">
                <Title
                        color="#1A1A2E"
                        align="text-left"
                        size="1.8rem"
                        weight={700}
                        cssClass="home-title mt-4 mb-3"
                    >
                        Nuestros servicios
                    </Title>
                </div>
            </div>

            <div key={'beneficios'} id='beneficios' className="flex flex-col py-12 px-14">
                <div className="w-full px-0 md:px-8 lg:px-16 py-2">
                    <Title
                        color="#1A1A2E"
                        align="text-left"
                        size="1.8rem"
                        weight={700}
                        cssClass="home-title mt-4 mb-3"
                    >
                        Beneficios
                    </Title>
                </div>
                <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-14 lg:px-16'>
                    <CardSimple title='CALIDAD' marginXl={5} desc='Provocamos procesos de calidad continua en todos los niveles de tu organización.' color='' />
                    <CardSimple title='ÓRDEN' marginXl={5} desc='Instauramos orden en los procesos internos así como en los proyectos de tu organización.' color='' />
                    <CardSimple title='ESTABILIDAD' marginXl={5} desc='Le damos equilibrio y solidez a la estructura y los recursos de tu organización.' color='' />
                    <CardSimple title='EXCELENCIA' marginXl={5} desc='Renovamos, transformamos y fortalecemos los sistemas existentes en tu organización.' color='' />
                </div>
            </div>
        </div>
    {/* <Footer /> */}
    </>
  );
};

export default Home;