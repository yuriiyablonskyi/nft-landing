import { useEffect, useRef, useState } from 'react'

type CountdownReturnType = [number, number, number]
export const useCountdown = (
  initialHours: number = 59,
  initialMinutes: number = 59,
  initialSeconds: number = 59,
): CountdownReturnType => {
  const [hours, setHours] = useState<number>(initialHours)
  const [minutes, setMinutes] = useState<number>(initialMinutes)
  const [seconds, setSeconds] = useState<number>(initialSeconds)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const tick = () => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
        return
      }

      if (seconds > 0) {
        setSeconds(prev => prev - 1)
      } else if (minutes > 0) {
        setMinutes(prev => prev - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(prev => prev - 1)
        setMinutes(59)
        setSeconds(59)
      }
    }
    timerRef.current = setInterval(tick, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [hours, minutes, seconds])
  return [hours, minutes, seconds]
}
