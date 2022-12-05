const APP_KEY = 'COFFEELAB'

export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = localStorage.getItem(`${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: any) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return localStorage.setItem(`${APP_KEY}_${key}`, data)
}
