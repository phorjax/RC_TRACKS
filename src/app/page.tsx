"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { NavBar } from "./components/navbar";



export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const center = useMemo(
    () => ({ lat: 6.270932528366708, lng: -75.57752374552615 }),
    []
  );

  return (
    <>
    <NavBar />;
    </>
  );
}
