import React from 'react'
import { Button } from '../components/ui/button'
import { AlertTriangle, MapPin, RefreshCw } from 'lucide-react'
import { useGeolocation } from '../hooks/use-geolocation.js'
import LoadingSkeleton from '../components/loading-skeleton.jsx'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { useReverseGeocodeQuery, useForecastQuery, useWeatherQuery } from '@/hooks/use-weather.js'
import CurrentWeather from '../components/current-weather.jsx'
import HourlyTemperature from '../components/hourly-temperature.jsx'
import WeatherDetails from '../components/weather-details'
import WeatherForecast from '../components/weather-forecast'
import FavoriteCities from '@/components/favorite-cities'

const WeatherDashboard = () => {
  const { lat, lon, error:locationError, isLoading:locationLoading, getLocation } = useGeolocation()

  const locationQuery = useReverseGeocodeQuery({lat,lon})
  const weatherQuery = useWeatherQuery({lat,lon})
  const forecastQuery = useForecastQuery({lat,lon})

  const handleRefresh = () => {
    getLocation()

    if(lat && lon){
      weatherQuery.refetch()
      forecastQuery.refetch()
      locationQuery.refetch()
    }

  }

  if(locationLoading){
    return <LoadingSkeleton />
  }

  if(locationError){
   return (
    <Alert variant='destructive'>
      <AlertTriangle className='h-4 w-4' />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>{locationError}</p>
        <Button onClick={getLocation} variant={"outline"} className="w-fit">
          <MapPin className='mr-2 h-4 w-4' />
          Enable Location
        </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if(!lat || !lon){
   return (
    <Alert variant='destructive'>
      <AlertTitle>Location Required</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>Please enable location access to see your local weather.</p>
        <Button onClick={getLocation} variant={"outline"} className="w-fit">
          <MapPin className='mr-2 h-4 w-4' />
          Enable Location
        </Button>
        </AlertDescription>
      </Alert>
    )
  }


  const locationName = locationQuery.data?.[0]

  if(weatherQuery.error || forecastQuery.error){
     return (
    <Alert variant='destructive'>
      <AlertTriangle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>Failed to fetch weather data, Please try again.</p>
        <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
          <RefreshCw className='mr-2 h-4 w-4' />
          Retry
        </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if(!weatherQuery.data || !forecastQuery.data){
    return <LoadingSkeleton />
  }

  
  return (
    <div className='space-y-4'>
      {/* Favorite Cities */}
          <FavoriteCities />

       {/*    My Location Tag and refresh btn   */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching?"animate-spin":""}`} />
        </Button>
      </div>


                {/* weather details start from here  */}
      <div className='grid gap-6'>
        <div className='flex flex-col lg:flex-row gap-4'>
          {/*  current weather  */}
          <CurrentWeather
          data={weatherQuery.data}
          locationName={locationName}
          />

          {/* hourly temperature */}
          <HourlyTemperature 
          data={forecastQuery.data}/>

        </div>

        <div className='grid gap-6 md:grid-cols-2 item-start'>
            {/*weather  details  */}
          <WeatherDetails data={weatherQuery.data} />

            {/* five day weather forecast  */}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard