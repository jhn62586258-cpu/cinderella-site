import { useEffect, useRef } from 'react'
import Icon from './Icons'
import { CloudSvg, Sparkles, Sheer } from './Scene'
import { useApply } from '../ApplyContext'
import logoNavy from '../assets/logo-navy.png'

export default function Hero() {
  const ref = useRef(null)
  const { openApply } = useApply()

  // 은은한 패럴랙스: 스크롤에 따라 구름·빛이 서로 다른 속도로 움직입니다.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight)
        ref.current?.style.setProperty('--py', `${y}px`)
      })
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => {
      window.removeEventListener('scroll', on)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-sky" aria-hidden="true">
        <div className="hero-rays" />
        <div className="hero-glow" />
        <Sheer />
        <CloudSvg className="cloud c-back" />
        <Sparkles count={40} seed={11} />
        <CloudSvg className="cloud c-front" />
      </div>

      <div className="hero-in">
        <div className="hero-copy">
          <p className="badge intro" style={{ '--d': 150 }}>
            <span className="badge-line" />
            CONCIERGE LAUNDRY SERVICE
          </p>
          <h1 className="intro" style={{ '--d': 350 }}>
            신데렐라가 마법처럼 가사노동에서 해방되었듯이, 당신의 일상에 <em>마법 같은 여유</em>를 선물합니다.
          </h1>
          <p className="hero-sub intro" style={{ '--d': 650 }}>
            세탁이라는 번거로운 가사노동을 신데렐라세탁이 대신해 드립니다.
            <br className="br-d" />
            당신의 일상에 호텔급 세탁 서비스를 더합니다.
          </p>
          <div className="hero-cta intro" style={{ '--d': 900 }}>
            <button className="btn btn-solid" onClick={() => openApply()}>
              지금 수거 신청하기 <Icon name="arrow" size={18} />
            </button>
            <a className="btn btn-text" href="#process">
              이용방법 보기
            </a>
          </div>
        </div>

        <div className="hero-mark intro" style={{ '--d': 500 }}>
          <img src={logoNavy} alt="Cinderella 신데렐라 세탁" />
        </div>
      </div>

      <a href="#story" className="scroll-cue" aria-label="아래로 스크롤">
        <Icon name="arrowDown" size={16} stroke={1.6} />
        <span>SCROLL</span>
        <i />
      </a>
    </section>
  )
}
