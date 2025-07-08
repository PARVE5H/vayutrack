import { useFavorite } from '@/hooks/use-favorite'
import React from 'react'
import { Button } from './ui/button'
import { Star } from 'lucide-react'
import { toast } from 'sonner'

const FavoriteButton = ({data}) => {
    const {addToFavorites, isFavorite, removeFavorite} = useFavorite()

    const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon)
    const isLoading = addToFavorites.isPending || removeFavorite.isPending

    const handleToggleFavorite=()=>{
        if(isCurrentlyFavorite){
            removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`, {
                onSuccess: () => {
                    toast.error(`Removed ${data.name} from Favorites`)
                },
                onError: () => {
                    toast.error(`Failed to remove ${data.name} from Favorites`)
                }
            })
        }else{
            addToFavorites.mutate({
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                country: data.sys.country,
                state: data.state || null,
            }, {
                onSuccess: () => {
                    toast.success(`Added ${data.name} to Favorites`)
                },
                onError: () => {
                    toast.error(`Failed to add ${data.name} to Favorites`)
                }
            })
        }
    }


  return (
    <Button
    variant={isCurrentlyFavorite ? "default" : "outline"}
    size="icon"
    onClick={handleToggleFavorite}
    disabled={isLoading}
    className={isCurrentlyFavorite ? "bg-yellow-500 hover:bg-yellow-600" : ""}>
        <Star
            className={`h-4 w-4 ${isCurrentlyFavorite ? "fill-current" : ""}`}
            />
    </Button>
  )
}

export default FavoriteButton