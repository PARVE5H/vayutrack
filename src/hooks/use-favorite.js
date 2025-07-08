import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";

export function useFavorite(){
  const [favorites,setFavorites] =  useLocalStorage("favorites",[])

  const queryClient = useQueryClient();

  const favoritesQuery =  useQuery({
    queryKey:["favorites"],
    queryFn: () => favorites,
    initialData: favorites,
    staleTime: Infinity,
  })

  const addToFavorites=useMutation({
    mutationFn: async(city)=>{
        const newFavorite={
            ...city,
            id: `${city.lat}-${city.lon}`,
            addedAt: Date.now(),
        }

        const exists= favorites.some((fav)=> fav.id === newFavorite.id)
        if(exists) return favorites

        const newFavorites= [...favorites, newFavorite].slice(0,10)
        setFavorites(newFavorites)
        return newFavorites
    },
    onSuccess:()=>{
        queryClient.invalidateQueries({
          queryKey: ["favorites"],
        })
    }
  })

  const removeFavorite = useMutation({
    mutationFn: async(cityId)=>{
        const newFavorites= favorites.filter((city)=> city.id !== cityId)
        setFavorites(newFavorites)
        return newFavorites
    },
    onSuccess:()=>{
        queryClient.invalidateQueries({
          queryKey: ["favorites"],
        })
    }
  })

  return{
    favorites: favoritesQuery.data ?? [],
    addToFavorites,
    removeFavorite,
    isFavorite:(lat,lon) => (favoritesQuery.data ?? []).some((city)=> city.lat === lat && city.lon === lon)
  }
}