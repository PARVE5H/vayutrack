import { useEffect, useState } from "react";

export function useGeolocation(){
   const[locationData,setLocationData]= useState(
    {
        lat:null,
        lon:null,
        error:null,
        isLoading: true
    })

    const getLocation=()=>{
        setLocationData((prev)=> ({...prev,isLoading:true,error:null}))

        if(!navigator.geolocation){
            setLocationData({
                lat:null,
                lon:null,
                error: "Geolocation is not supported by your browser",
                isLoading: false
            })
            return
        }

        navigator.geolocation.getCurrentPosition((position)=>{
            setLocationData({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                error:null,
                isLoading: false,
            })
        },(error)=>{
            let errorMessage;
            switch(error.code){
                case error.PERMISSION_DENIED:
                    errorMessage ="Location permission denied. Please enable location access."
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    errorMessage="Location request Timed out."
                    break;
                default:
                    errorMessage="An unknown error occurred while retrieving location."
            }

            setLocationData({
                lat:null,
                lon:null,
                error: errorMessage,
                isLoading: false
            })
        },{
            enableHighAccuracy:true,
            timeout: 5000, // 5 seconds timeout
            maximumAge: 0 // Do not use cached position
        })

    }

    useEffect(()=>{
        getLocation()
    },[])

    return {
        ...locationData,
        getLocation
    }
}