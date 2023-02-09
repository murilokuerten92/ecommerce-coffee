import { useEffect, useState } from 'react'

export function useUserLocation() {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 })
  const [currentLocation, setCurrentLocation] = useState('')

  useEffect(() => {
    let isCancelled = false
    navigator.geolocation.getCurrentPosition((position) => {
      if (!isCancelled) {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDAH2qqgMV6p96n3z_S9ztak0VfZR7kM58`,
      ).then((response) => {
        response.json().then((response) => {
          const addressParsed = response.results[0].formatted_address.split(',')
          if (!isCancelled) {
            setCurrentLocation(addressParsed[2])
          }
        })
      })
    })

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    coordinates,
    currentLocation,
  }
}
