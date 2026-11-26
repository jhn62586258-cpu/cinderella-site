import { useEffect, useState } from 'react'
import { useApply } from '../ApplyContext'

export default function MobileBar() {
  const { openApply, open } = useApply()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 120)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <div className={`mbar ${show && !open ? 'show' : ''}`}>
      <button onClick={() => openApply()}>
        <span>수거 신청</span>
        <small>첫 이용 30% 할인</small>
      </button>
    </div>
  )
}
