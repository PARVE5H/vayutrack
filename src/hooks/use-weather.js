import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEYS={
    weather:(coords)=>["weather",coords],
    forecast:(coords)=>["forecast",coords],
    location:(coords)=>["location",coords],
    search:(query)=>["location-search",query]
}

export function useWeatherQuery({lat,lon}){
  return  useQuery({
        queryKey:WEATHER_KEYS.weather({lat,lon}),
        queryFn:()=> weatherAPI.getCurrentWeather({lat,lon}),
        enabled: !!lat && !!lon,

    })
}

export function useForecastQuery({lat,lon}){
  return  useQuery({
        queryKey:WEATHER_KEYS.forecast({lat,lon}),
        queryFn:()=> weatherAPI.getForecast({lat,lon}),
        enabled: !!lat && !!lon,

    })
}

export function useReverseGeocodeQuery({lat,lon}){
  return  useQuery({
        queryKey:WEATHER_KEYS.location({lat,lon}),
        queryFn:()=> weatherAPI.reverseGeocode({lat,lon}),
        enabled: !!lat && !!lon,

    })
}

export function useLocationSearch(query){
    return  useQuery({
        queryKey:WEATHER_KEYS.search(query),
        queryFn:()=> weatherAPI.searchLocations(query),
        enabled: query.length >=1,
    })
}
