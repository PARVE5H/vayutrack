import React from 'react'
import {AlertTriangle} from 'lucide-react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useWeatherQuery, useForecastQuery } from '@/hooks/use-weather'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import LoadingSkeleton from '@/components/loading-skeleton'
import CurrentWeather from '../components/current-weather.jsx'
import HourlyTemperature from '../components/hourly-temperature.jsx'
import WeatherDetails from '../components/weather-details'
import WeatherForecast from '../components/weather-forecast'
import FavoriteButton from '@/components/favorite-button.jsx'

const CityPage = () => {
  const [searchParams] = useSearchParams()
  const params =useParams()
  const lat = parseFloat(searchParams.get("lat") || "0")
  const lon = parseFloat(searchParams.get("lon") || "0")

  const coordinates ={lat ,lon }

  const weatherQuery= useWeatherQuery(coordinates)
  const forecastQuery= useForecastQuery(coordinates)

  if(weatherQuery.error || forecastQuery.error){
     return (
    <Alert variant='destructive'>
      <AlertTriangle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>Failed to fetch weather data, Please try again.</p>
        </AlertDescription>
      </Alert>
    )
  }

  if(!weatherQuery.data || !forecastQuery.data || !params.cityName){
    return <LoadingSkeleton />
  }

  return (
  <div className='space-y-4'>

      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tight'>
          {params.cityName}, {weatherQuery.data.sys.country}
          </h1>
          <div>
             <FavoriteButton data={ {...weatherQuery.data, name: params.cityName} }/>
          </div>
      </div>

    <div className='grid gap-6'>
        <div className='flex flex-col lg:flex-row gap-4'>
          {/*  current weather  */}
          <CurrentWeather
          data={weatherQuery.data}
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

export default CityPage