import { DriveStep, driver } from 'driver.js'
import 'driver.js/dist/driver.css'

interface CreateDriversProps {
  steps: DriveStep[]
  product: string
  timing?: number
}

export default function createDrivers({ steps, product, timing = 1000 }: CreateDriversProps) {
  let isProductTour = false
  const driverObj = driver({
    showProgress: true,
    animate: true,
    steps
  })

  if (typeof window !== 'undefined') {
    isProductTour = !(window.localStorage.getItem(`cb-onboarding-${product}`) !== null)
  }

  function runDriver() {
    const timeout = setTimeout(() => {
      driverObj?.drive()
      window.localStorage.setItem(`cb-onboarding-${product}`, 'true')
    }, timing)
    return () => clearTimeout(timeout)
  }

  return { runDriver, isProductTour }
}
