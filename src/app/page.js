"use client";
import { useMemo } from "react";
import {GoogleApiWrapper} from ".//components/map.jsx";






export default function Home() {





  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-60 py-28">
      <nav className="bg-stone-300 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a className="flex items-center">
            <img src="./rc_logo.png" className="h-16 mr-3" />
            <span className="self-center text-2xl  whitespace-nowrap dark:text-white specialFont">
              RC TRACKS
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-black bg-stone-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contactenos
            </button>
          </div>
          <div
            className="items-end justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-stone-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-stone-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-400  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black bg-amber-400 rounded md:bg-transparent md:text-amber-400 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Locaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-14 px-11 h-25 w-72">
        <img className="object-cover" src="./rc_logo.png" />
      </div>
      <div className="mx-14 font">
        <div className="m-12">
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
        <div className="m-12">
          <h1 className="italic text-2xl bold my-5 tracking-wider">
            Servicio que proveemos
          </h1>
          <p className="tracking-wider">
            Alquiler de carros 4x4 para conducir en nuestras pistas ubicadas de
            centros comerciales. Destinado para ninos, Jovenes y Adultos
          </p>
        </div>
        <div className="m-12">
          <h1 className="italic text-2xl bold my-5 tracking-wider">
            Donde nos pueden encontrar
          </h1>
          <p className="tracking-wider">
            Florida parque comercial, segundo pisto al lado de
            crepes and waffles
          </p>
        </div>
        <div>
        <MapContainer />
        </div>
      </div>
    </main>
  );
}
