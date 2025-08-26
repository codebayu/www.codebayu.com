import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

const useIsLargeDesktop = () => {
  const { width } = useWindowSize()
  const [isLargeDesktop, setisLargeDesktop] = useState(width > 1536)

  useEffect(() => {
    setisLargeDesktop(width > 1536)
  }, [width])

  return isLargeDesktop
}

export default useIsLargeDesktop
