import Icon from './Icons'
import { CloudSvg, Sparkles } from './Scene'
import { useApply } from '../ApplyContext'

export default function EndCta() {
  const { openApply } = useApply()
  return (
    <section className="end">
      <div className="end-sky" aria-hidden="true">
        <div className="hero-glow" />
        <Sparkles count={26} seed={3} />
        <CloudSvg className="cloud c-back" />
        <CloudSvg className="cloud c-front" />
      </div>
      <div className="wrap end-in">
        <h2 className="end-title reveal">
          오늘의 세탁,
          <br />
          신데렐라에게 맡겨주세요.
        </h2>
        <p className="end-sub reveal" style={{ '--d': 120 }}>당신의 일상에 호텔급 여유를 선물합니다.</p>
        <button className="btn btn-solid reveal" style={{ '--d': 220 }} onClick={() => openApply()}>
          수거 신청하기 <Icon name="arrow" size={18} />
        </button>
      </div>
    </section>
  )
}
