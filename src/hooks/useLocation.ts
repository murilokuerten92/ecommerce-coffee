import { useEffect, useState } from 'react';

export function useLocation() {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 })
  const [currentLocation, setCurrentLocation] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude })

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDAH2qqgMV6p96n3z_S9ztak0VfZR7kM58`).then(response => {
        response.json().then(response => {
          const addressParsed = response.results[0].formatted_address.split(',')

          setCurrentLocation(addressParsed[2])
        });

      })
    })
  }, [])

  return {
    coordinates,
    currentLocation
  }

}
