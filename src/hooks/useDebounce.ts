import { useRef } from 'react'

export function useDebounce() {
  const timeout = useRef<any>(null)

  return {
    debounce: (callback: () => void, duration: number) => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        if (callback) {
          callback()
        }
      }, duration)
    },
  }
}
