import { useRef } from 'react'

// 터치(손가락) 좌우 스와이프. 세로 스크롤은 방해하지 않습니다.
export default function useSwipe({ onLeft, onRight, threshold = 44 }) {
  const start = useRef(null)
  return {
    onTouchStart: (e) => {
      const t = e.touches[0]
      start.current = { x: t.clientX, y: t.clientY }
    },
    onTouchEnd: (e) => {
      if (!start.current) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.current.x
      const dy = t.clientY - start.current.y
      start.current = null
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.2) return
      if (dx < 0) onLeft?.()
      else onRight?.()
    },
  }
}
