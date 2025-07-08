import React, { useState } from 'react'
import { CommandDialog, CommandInput,CommandList, CommandEmpty,CommandGroup, CommandItem, CommandSeparator   } from './ui/command'
import { Button } from './ui/button'
import { Search, Clock,  Loader2, XCircle, Star } from 'lucide-react'
import { useLocationSearch } from '../hooks/use-weather'
import { useNavigate } from 'react-router-dom'
import { useSearchHistory } from '@/hooks/use-search-history'
import { format } from 'date-fns'
import { useFavorite } from '@/hooks/use-favorite'

const Citysearch = () => {

    const [open,setOpen]= useState(false)
    const [query, setQuery]= useState("")
    const navigate = useNavigate()

    const { data:locations, isLoading} = useLocationSearch(query)
    const { history, addToHistory, clearHistory }= useSearchHistory()

    const handleSelect=(cityData)=>{

        const [lat,lon, name, country] = cityData.split("|")

        addToHistory.mutate({
            query,
            name,
            lat: parseFloat(lat),
            lon: parseFloat(lon),
            country,
        })

        setOpen(false)
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`)
        setQuery("")
    }    

    const {favorites } = useFavorite()

  return (
    <>
        <Button 
        variant="outline"
        onClick={()=> setOpen(true)}
        className="justify-start text-sm text-muted-foreground p-1 w-auto sm:pr-12 md:w-40 lg:w-64"
        >
             <Search className='mr-2 h-4 w-4'/>
                Search Cities
        </Button>



     <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search cities...."
        value={query}
        onValueChange={setQuery}
        />
      <CommandList>
        {query.length > 2 && !isLoading && (<CommandEmpty>No cities found.</CommandEmpty>) }



       {favorites.length > 0 && (
           <CommandGroup heading="Favorites">
                {favorites.map((location)=>{
                return (
                <CommandItem 
                key={location.id}
                value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                onSelect={handleSelect}
                >
                    <Star className='mr-2 h-4 w-4 text-yellow-500' />
                    <span>{location.name}</span>
                    {location.state && (
                        <span className='text-sm text-muted-foreground'>
                            , {location.state}
                        </span>
                    )}
                    <span className='text-sm text-muted-foreground'>
                            , {location.country}
                    </span>
                </CommandItem>
             )
                })}
            </CommandGroup>
         )}
        

        
        {history.length > 0 && (
        <>
           <CommandSeparator/>
           <CommandGroup>
                <div className='flex items-center justify-between px-2 my-2'>
                <p className='text-xs text-muted-foreground'>Recent Searches</p>
                <Button 
                variant={"ghost"}
                size={"sm"}
                onClick={()=>clearHistory.mutate()}
                >
                    <XCircle className='h-4 w-4' />Clear
                </Button>
                </div>
                {history.map((location)=>{
                return (
                <CommandItem 
                key={`${location.lat}-${location.lon}`}
                value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                onSelect={handleSelect}
                >
                    <Clock className='mr-2 h-4 w-4 text-muted-foreground' />
                    <span>{location.name}</span>
                    {location.state && (
                        <span className='text-sm text-muted-foreground'>
                            , {location.state}
                        </span>
                    )}
                    <span className='text-sm text-muted-foreground'>
                            , {location.country}
                    </span>
                    <span className='ml-auto text-xs text-muted-foreground'>
                        {format(new Date(location.searchedAt),"MMM d, h:mm a")}
                    </span>
                </CommandItem>
             )
                })}
            </CommandGroup>
        </>  
         )}
            <CommandSeparator/> 

       { isLoading && (
           <CommandGroup>
               <div className='flex items-center justify-center p-4'>
                   <Loader2 className='h-4 w-4 animate-spin' />
               </div>
           </CommandGroup>
       )}
       
       {locations && locations.length > 0 && (
         <CommandGroup heading="Suggestions">
            {locations.map((location)=>{
                return <CommandItem 
                key={`${location.lat}-${location.lon}`}
                value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                onSelect={handleSelect}
                >
                    <Search className='mr-2 h-4 w-4' />
                    <span>
                    {location.name}
                    </span>
                    {location.state && (
                        <span className='text-sm text-muted-foreground'>
                            , {location.state}
                        </span>
                    )}
                    <span className='text-sm text-muted-foreground'>
                            , {location.country}
                        </span>
                </CommandItem>
            })}
        </CommandGroup>
       )}

      </CommandList>
    </CommandDialog>
    </>
  )
}

export default Citysearch