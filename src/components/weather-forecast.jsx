import { format } from 'date-fns'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react'

const WeatherForecast = ({data}) => {
    const dailyForcasts=data.list.reduce((acc,forecast)=>{

        const date= format(new Date(forecast.dt * 1000), "yyyy-MM-dd")

        if(!acc[date]){
            acc[date]={
                temp_min: forecast.main.temp_min,
                temp_max: forecast.main.temp_max,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed,
                weather: forecast.weather[0],
                date: forecast.dt,
            }
        }else{
            acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min)
            acc[date].temp_max = Math.min(acc[date].temp_max, forecast.main.temp_max)
        }
        return acc
    },{})

    const formatTemp=(temp) => `${Math.round(temp)}°C`

    const nextDays = Object.values(dailyForcasts).slice(1,6)

  return (
    <Card>
        <CardHeader>
            <CardTitle>Five Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='grid gap-4'>
                {nextDays.map((day)=>{
                    return <div key={day.date}
                        className='grid grid-cols-3 gap-4 items-center rounded-lg border p-4'>
                        <div className='flex flex-col justify-start'>
                            <p className='font-medium'>{format(new Date(day.date*1000),"EEE, MMM d" )}</p>
                            <p className='text-sm text-muted-foreground capitalize'>{day.weather.description}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 justify-between'>
                            <span className='text-blue-500 flex items-center'>
                                <ArrowDown className='mr-1 h-4 w-4' />
                                {formatTemp(day.temp_min)} 
                            </span>
                            <span className='text-red-500 flex items-center'>
                                <ArrowUp className='mr-1 h-4 w-4' />
                                {formatTemp(day.temp_max)}
                            </span>
                        </div>
                        <div className='flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row justify-end'>
                             <span className='gap-2 flex items-center'>
                                <Droplets className='text-blue-500 h-4 w-4' />
                                <span className='text-sm'>{day.humidity}%</span>
                            </span>
                            <span className='gap-2 flex items-center'>
                                <Wind className='text-blue-500 h-4 w-4' />
                                <span className='text-sm'>{day.wind}m/s</span>
                            </span>
                        </div>
                        </div>
                
            })}
            </div>
        </CardContent>
    </Card>
  )
}

export default WeatherForecast