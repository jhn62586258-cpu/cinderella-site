import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const Ctx = createContext({ open: false, preset: {}, openApply: () => {}, closeApply: () => {} })

// 어디서든 useApply().openApply() 를 호출하면 수거 신청 모달이 열립니다.
export function ApplyProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState({})
  const openApply = useCallback((p = {}) => {
    setPreset(p && p.nativeEvent ? {} : p)
    setOpen(true)
  }, [])
  const closeApply = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ open, preset, openApply, closeApply }), [open, preset, openApply, closeApply])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useApply = () => useContext(Ctx)
