import { useEffect, useState } from 'react'

export interface DrawerContext {
  isDrawerOpen: boolean
  handleClickClose: () => void
  handleOpenDrawer: () => void
}

export const useDrawer = (): DrawerContext => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleClickClose = () => {
    setIsDrawerOpen(false)
  }
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflowY = 'hidden'
    }
    return () => {
      document.body.style.overflowY = 'initial'
    }
  }, [isDrawerOpen])

  return { isDrawerOpen, handleClickClose, handleOpenDrawer }
}
