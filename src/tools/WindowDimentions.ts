import { useState, useEffect } from 'react'

type WindowDimentions = {
  width: number
  height: number
}

function getWindowDimentions(): WindowDimentions {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}
export function useWindowDimentions(): WindowDimentions {
  const [windowDimentions, setWindowDimentions] = useState<WindowDimentions>(getWindowDimentions())
  const handleResize = () => {
    setWindowDimentions(getWindowDimentions())
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimentions
}
