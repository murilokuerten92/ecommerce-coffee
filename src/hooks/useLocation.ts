import { useEffect, useState } from 'react'

export function useLocation() {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 })
  const [currentLocation, setCurrentLocation] = useState('')

  useEffect(() => {
    let isCancelled = false

    function handlePermission() {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            report(result.state)
          } else if (result.state === 'prompt') {
            report(result.state)
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
                  const addressParsed =
                    response.results[0].formatted_address.split(',')
                  if (!isCancelled) {
                    setCurrentLocation(addressParsed[2])
                  }
                })
              })
            })
          } else if (result.state === 'denied') {
            report(result.state)
          }
          result.onchange = function () {
            report(result.state)
          }
        })
    }

    function report(state: any) {
      console.log('Permission ' + state)
    }

    handlePermission()

    return () => {
      isCancelled = true
    }
  }, [])

  return {
    coordinates,
    currentLocation,
  }
}
