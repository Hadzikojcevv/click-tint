export const handleMapCenter = (pathname: string) => {
  switch (pathname) {
    case '/br':
      return [-23.533773, -46.62529]
      break
    case '/gr':
      return [40.6401, 22.9444]
      break
    case '/hr':
      return [45.815, 15.9819]
      break
    case '/rs':
      return [44.8125, 20.4612]
      break
    case '/bg':
      return [42.6977, 23.3219]
      break
    default:
      return [42.6401, 22.9444]
      break
  }
}
