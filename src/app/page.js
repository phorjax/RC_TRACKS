"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import Image from 'next/image';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 6.270932528366708, lng: -75.57752374552615 }),
    []
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* NAV BAR */}
      <nav className="bg-stone-200 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a className="flex items-center">
            <Image alt="RC TRACKS logo" src="/rc_logo.png" width={70}
              height={30} />
            <span className="self-center text-2xl  whitespace-nowrap dark:text-white specialFont">
              RC TRACKS
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-black bg-stone-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contactenos
            </button>
          </div>
          <div
            className="items-end justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-stone-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-stone-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#quieneSomos"
                  className="block py-2 pl-3 pr-4 text-black hover:bg-amber-400 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500"
                >
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="block py-2 pl-3 pr-4 text-black hover:bg-amber-400 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#locaciones"
                  className="block py-2 pl-3 pr-4 text-black hover:bg-amber-400 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Locaciones
                </a>
              </li>
              <li>
                <a
                  href="#caracteristicas"
                  className="block py-2 pl-3 pr-4 text-black hover:bg-amber-400 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500"
                >
                  Pistas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Banner */}
      <div className="mx-5 h-25 w-72">
      <Image alt="RC TRACKS logo" src="/rc_logo.png" width={300}
              height={100} />
      </div>
      {/* TEXT */}
      <div className="textBox mx-60 ">
        <div className="m-12" id="quieneSomos">
          <h1 className="italic text-2xl bold my-5 tracking-wider">
            Quienes somos
          </h1>
          <p className="tracking-wider">
            Somos una empresa dedicada al desarrollo de productos y servicios
            para el entretenimiento familiar, con nuestro producto principal,
            nuestras pistas tematicas para carros a control
            remoto de escala 1/24
          </p>
        </div>
        <div className="m-12" id="servicios">
          <h1 className="italic text-2xl bold my-5 tracking-wider">
            Servicio que proveemos
          </h1>
          <p className="tracking-wider">
            Alquiler de carros 4x4 para conducir en nuestras pistas ubicadas de
            centros comerciales. Destinado para ninos, Jovenes y Adultos
          </p>
        </div>
        <div className="m-12" id="locaciones">
          <h1 className="italic text-2xl bold my-5 tracking-wider">
            Donde nos pueden encontrar
          </h1>
          <p className="tracking-wider">
            Florida parque comercial, segundo pisto al lado de
            crepes and waffles
          </p>
        </div>
        {/* Google maps */}
        <div className="App m-12">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <Marker
                position={{ lat: 6.270932528366708, lng: -75.57752374552615 }}
              />
            </GoogleMap>
          )}
        </div>
        <div className="m-12">
          <h1 className="italic text-2xl bold my-5 tracking-wider" id="caracteristicas">
            Caracteristicas funcionales
          </h1>
          <p className="tracking-wider">
            Pista interactiva con mecanismos, luces y sonido de ambientación.
            Recorrido por jugador de entre 6 y 10 minutos. Jugabilidad sencilla
            y practica. Diferentes tipos de superficies y obstáculos para
            superar.
          </p>
          <Image alt='RC TRACKS ilustration' className="object-cover" width={300}
              height={200} src="/ilustracion.jpg" />
        </div>
      </div>
      {/* footer */}
      <footer className="bg-stone-100  shadow dark:bg-gray-900  w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0">
            <Image alt="RC TRACKS logo" src="/rc_logo.png" width={100}
              height={30} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RC TRACKS</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Acerca de RC TRACKS</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Terminos y condiciones</a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Trabaje con nosotros</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contactenos</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">RCTRACKS™</a>. All Rights Reserved.</span>
        </div>
      </footer>

    </main>

  );
}
