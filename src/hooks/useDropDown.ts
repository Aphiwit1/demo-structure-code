import { useEffect, useRef, useState } from 'react'

export const useDropdown = (initialDefaultOpen = false) => {
  const dropdownRef = useRef(null)
  const [isShowDropdown, setIsShowDropdown] = useState(initialDefaultOpen)

  const toggleDropdown = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    setIsShowDropdown(!isShowDropdown)
  }

  useEffect(() => {
    const pageClickEvent = () => {
      if (dropdownRef.current !== null) {
        setIsShowDropdown(!isShowDropdown)
      }
    }
    if (isShowDropdown) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isShowDropdown])

  return { dropdownRef, isShowDropdown, toggleDropdown }
}
