import { DriveStep, driver } from 'driver.js'
import 'driver.js/dist/driver.css'

interface CreateDriversProps {
  steps: DriveStep[]
  product: string
}

export default function createDrivers({ steps, product }: CreateDriversProps) {
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
    }, 1000)
    return () => clearTimeout(timeout)
  }

  return { runDriver, isProductTour }
}
